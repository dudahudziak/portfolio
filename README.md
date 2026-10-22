# Portfólio Front-end

Portfólio pessoal feito com **React + Vite** e **CSS Modules**, com fundo preto e formas fluidas animadas.

**Versão online:** 
[https://portfolio-six-indol-84.vercel.app/]

## Seções
- **Início:** resumo profissional
- **Sobre mim:** apresentação, foto e contato
- **Projetos:** cards com descrição, tecnologias, links e detalhamento com imagens
- **Habilidades:** tecnologias e competências
- **Contato:** formulário e links profissionais

## Como rodar localmente
```bash
git clone https://github.com/dudahudziak/portfolio.git
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

- **Restaurante Estações:** sistema de pedidos dividido em três aplicações independentes (container, cardápio e pedido), integradas com Module Federation no Next.js. Os micros se comunicam por eventos do navegador. [Código](https://github.com/dudahudziak/cardapio-micro) | [Demo](https://cardapio-micro-x2dz.vercel.app/)
- **Diário de Bordo (PWA):** aplicativo para registrar atividades diárias que funciona offline e pode ser instalado, com service worker, manifest e dados salvos no localStorage. [Código](https://github.com/dudahudziak/diario-bordo) | [Demo](https://diario-bordo-indol.vercel.app/)
- **To do React Avançado:** lista de tarefas com Context API, hooks customizados e otimização de renderização (useMemo, useCallback e React.memo). [Código](https://github.com/dudahudziak/todo-react-avancado) | [Demo](https://todo-react-avancado-fawn.vercel.app/)

## Deploy
- **Vercel / Netlify:** importe o repositório. Build: `npm run build`, pasta de saída: `dist`.
- **GitHub Pages:** rode `npm run build` e publique a pasta `dist` (por exemplo com a action `actions/deploy-pages`).
