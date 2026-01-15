# 📓 Diário de Bordo PWA

Este é um **Aplicativo Web Progressivo (PWA)** desenvolvido para o registro de atividades diárias. O projeto foca em oferecer uma experiência próxima a um aplicativo nativo, com suporte a funcionamento offline, persistência de dados local e capacidade de instalação no dispositivo.

## 🚀 Funcionalidades

- **Registro de Atividades:** Adicione títulos e descrições para suas tarefas ou pensamentos diários.
- **Persistência Local:** Os dados são salvos no `localStorage`, garantindo que não se percam ao fechar o navegador.
- **Suporte Offline:** Graças ao Service Worker, o aplicativo carrega mesmo sem conexão com a internet.
- **Instalável:** Pode ser adicionado à tela inicial do celular ou à área de trabalho do computador através do botão "Instalar".
- **Design Responsivo:** Interface adaptável para celulares, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização com variáveis e foco em responsividade.
- **JavaScript (Vanilla):** Lógica de manipulação de DOM e armazenamento.
- **Web App Manifest:** Configurações de identidade do PWA.
- **Service Workers:** Estratégia de cache para funcionamento offline.

## 📦 Como rodar o projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Li-code1/diario-de-bordo.git](https://github.com/Li-code1/diario-de-bordo.git)

```

2. **Abrir o projeto:**
Como este é um PWA, os Service Workers exigem um servidor (mesmo que local) para funcionar por questões de segurança.
* Use a extensão **Live Server** do VS Code.
* Ou use o Python: `python -m http.server 8000`.


3. **Acessar no Navegador:**
Abra `http://localhost:5500` (ou a porta indicada).

## 📱 Instalação

Após abrir o link (especialmente na versão publicada via GitHub Pages), você verá um botão **"Instalar Aplicativo"**. Ao clicar, o navegador solicitará permissão para fixar o Diário de Bordo na sua lista de aplicativos.

## 📝 Licença

Este projeto foi desenvolvido para fins de prática e aprendizado. Sinta-se à vontade para usar e melhorar!
