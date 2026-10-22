export const profile = {
  name: 'Eduarda Vitória Hudziak',
  role: 'Desenvolvedora Front-end',
  summary:
    'Gosto de transformar ideias em interfaces claras, responsivas e acessíveis, e de entender o porquê de cada solução que construo.',
  photo: '/eu.jpeg', 
  location: 'Serra Negra, SP',
  email: 'vitoriahudziak@outlook.com',
  about: [
    'Prazer, Eduarda! Sou paranaense, tenho 23 anos e sou desenvolvedora Front-End (futura desenvolvedora Full Stack Phyton). Descobri a programação trabalhando como designer e assistente de marketing e me apaixonei pela área.',
  'No curso da EBAC, aprendi a construir interfaces completas, desde HTML, CSS e JavaScript até React, Next.js e TypeScript. Também estudei design responsivo (Sass, Bootstrap e Tailwind), testes unitários e de integração, qualidade de código, PWAs, performance, micro frontends, cloud e DevOps, sempre trabalhando com Git. Estou buscando uma vaga junior, para que eu possa desenvolver meus conhecimentos e construir uma carreira sólida.',
  ],
  formspreeId: 'xoejgron',
  links: [
    { label: 'GitHub', url: 'https://github.com/dudahudziak' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/eduarda-vit%C3%B3ria-hudziak-b4a713239/' },
  ],
};

export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export const projects = [
  {
    id: 'restaurante-estacoes',
    title: 'Restaurante Estações: Micro Frontends',
    description: 'Sistema de pedidos dividido em três aplicações independentes que se integram em tempo de execução.',
    details:
      'Problema: dividir um sistema em partes que possam ser desenvolvidas e publicadas separadamente. ' +
    'O que fiz: criei um container e dois micros (cardápio e pedido) com Module Federation. Os micros se comunicam por eventos do navegador, com um contrato de eventos em comum, sem importar código um do outro. ' +
    'Desafio resolvido: quando um micro cai, a biblioteca não gera erro e a coluna fica vazia sem aviso. Criei o carregarMicro para detectar essa falha e exibir uma mensagem clara. ' +
    'O que aprendi: arquitetura de micro frontends, comunicação desacoplada e tratamento de falhas.',
  tech: ['Next.js', 'React', 'Module Federation', 'CSS Modules'],
    images: ['/projetos/restaurante.png'],
  repo: 'https://github.com/dudahudziak/cardapio-micro',
    demo: 'https://cardapio-micro-x2dz.vercel.app/',
  },
  {
     id: 'diario-de-bordo',
  title: 'Diário de Bordo (PWA)',
  description: 'Aplicativo para registrar atividades diárias que funciona offline e pode ser instalado.',
  details:
    'Problema: criar um app que continue útil sem internet e que o usuário possa instalar como aplicativo. ' +
    'O que fiz: CRUD de entradas com persistência no localStorage, service worker com cache do app shell (cache-first) e manifest para instalação, além do aviso de conexão online/offline. ' +
    'O que aprendi: ciclo de vida do service worker, estratégias de cache e como testar um PWA no Lighthouse.',
  tech: ['JavaScript', 'PWA', 'Service Worker', 'localStorage'],
  images: ['/projetos/diario.png'],
  repo: 'https://github.com/dudahudziak/diario-bordo',
  demo: 'https://diario-bordo-indol.vercel.app/',
  },
  {
  id: 'todo-react-avancado',
  title: 'To do React Avançado',
  description: 'Lista de tarefas com estado global, filtros e dados que persistem ao recarregar a página.',
  details:
    'Problema: gerenciar o estado de uma lista sem repassar props por vários níveis e sem renderizações desnecessárias. ' +
    'O que fiz: centralizei o estado na Context API e criei hooks customizados (useLocalStorage, useInput, useTodos). O filtro e os contadores usam useMemo, as ações usam useCallback e cada item usa React.memo, então só o item alterado é renderizado de novo. ' +
    'Desafio resolvido: o useLocalStorage trata erros de leitura e escrita, e o app continua funcionando em memória se o armazenamento estiver indisponível. ' +
    'O que aprendi: estado global, otimização de renderização e criação de hooks reutilizáveis.',
  tech: ['React', 'Context API', 'Hooks customizados', 'Vite'],
  images: ['/projetos/todo.png'],
  repo: 'https://github.com/dudahudziak/todo-react-avancado',
  demo: 'https://todo-react-avancado-fawn.vercel.app/',
},
];

export const skills = [
  {
    group: 'Linguagens e base da web',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Programação orientada a objetos', 'Web APIs e HTTP'],
  },
  {
    group: 'Front-end e frameworks',
    items: ['React', 'Next.js', 'Recoil', 'Sass', 'Bootstrap', 'Tailwind CSS', 'CSS Modules', 'BEM'],
  },
  {
    group: 'Qualidade e testes',
    items: ['Testes unitários', 'Testes de integração', 'Linting e formatação'],
  },
  {
    group: 'Performance e arquitetura',
    items: ['Hooks e Context API', 'Otimização de renderização', 'PWA', 'Micro frontends', 'Web design responsivo'],
  },
  {
    group: 'Ferramentas e processos',
    items: ['Git e GitHub', 'Gerenciamento de pacotes', 'Cloud e DevOps', 'Pipelines de CI/CD', 'Metodologias ágeis'],
  },
  {
    group: 'Competências',
    items: ['Resolução de problemas', 'Trabalho em equipe', 'Comunicação', 'Aprendizado contínuo'],
  },
];
