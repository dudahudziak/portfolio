# Portfólio Front-end

Portfólio pessoal feito com **React + Vite** e **CSS Modules**, com fundo preto e formas fluidas animadas.

🔗 **Versão online:** _cole aqui o link do deploy_

## Seções
- **Início:** resumo profissional
- **Sobre mim:** apresentação, foto e contato
- **Projetos:** cards com descrição, tecnologias, links e detalhamento com imagens
- **Habilidades:** tecnologias e competências
- **Contato:** formulário e links profissionais

## Como rodar localmente
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npm run dev      # abre em http://localhost:5173
```
Outros comandos: `npm run build` (gera a pasta `dist`) e `npm run preview`.

## Como personalizar
Edite **`src/data/portfolio.js`** (nome, textos, projetos, habilidades, links).
Coloque sua foto em `public/foto.jpg` e as capturas de tela dos projetos em `public/projetos/`.

## Estrutura
```
src/
├── components/   # um componente + um .module.css por pasta
├── data/         # todo o conteúdo do portfólio
├── hooks/        # useActiveSection, useContactForm
├── App.jsx
└── main.jsx
```

## Projetos apresentados
- **Projeto 1:** _descrição breve_
- **Projeto 2:** _descrição breve_
- **Projeto 3:** _descrição breve_

## Deploy
- **Vercel / Netlify:** importe o repositório. Build: `npm run build`, pasta de saída: `dist`.
- **GitHub Pages:** rode `npm run build` e publique a pasta `dist` (por exemplo com a action `actions/deploy-pages`).
