// 1. Registro do Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('SW registrado!', reg))
            .catch(err => console.error('Erro no SW', err));
    });
}

// 2. Lógica de Instalação (PWA)
let deferredPrompt;
const installBtn = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') installBtn.style.display = 'none';
            deferredPrompt = null;
        });
    }
});

// 3. Persistência de Dados (LocalStorage)
const form = document.getElementById('diario-form');
const lista = document.getElementById('lista-entradas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    
    const novaEntrada = {
        id: Date.now(),
        titulo,
        descricao,
        data: new Date().toLocaleDateString('pt-BR')
    };

    const entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    entradas.push(novaEntrada);
    localStorage.setItem('entradas', JSON.stringify(entradas));
    
    form.reset();
    renderizar();
});

function renderizar() {
    const entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    lista.innerHTML = entradas.map(ent => `
        <div class="card">
            <h3>${ent.titulo}</h3>
            <small>${ent.data}</small>
            <p>${ent.descricao}</p>
            <button class="btn-delete" onclick="remover(${ent.id})">Excluir</button>
        </div>
    `).join('');
}

window.remover = (id) => {
    const entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    const filtradas = entradas.filter(ent => ent.id !== id);
    localStorage.setItem('entradas', JSON.stringify(filtradas));
    renderizar();
};

// Renderizar ao carregar a página
renderizar();