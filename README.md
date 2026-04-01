# 💼 Portfólio Profissional - Henrique Sanches

<div align="center">
  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

**Portfólio interativo desenvolvido com React para showcase de projetos e experiência profissional**

[🌐 Ver Portfólio Online](#) • [📧 Contato](mailto:henrique.sanches.oficial@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/henrique-quitti-sanches-developer/)

</div>

---

## 📋 Sobre o Projeto

Portfólio web moderno e responsivo desenvolvido para apresentar minha trajetória como **Desenvolvedor Fullstack**, destacando projetos, tecnologias dominadas, reconhecimentos profissionais e experiência de mais de 2 anos no mercado.

### ✨ Destaques

- 🎨 **Design Moderno** - Interface elegante com animações suaves e otimizadas
- 📱 **Totalmente Responsivo** - Adaptado para desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Animações com 60fps e carregamento rápido
- 🎯 **SEO Friendly** - Estrutura otimizada para mecanismos de busca
- 🌈 **Tema Personalizado** - Identidade visual única com paleta roxa/lilás

---

## 🚀 Funcionalidades

### 🏠 Página Inicial
- Apresentação profissional com mais de 2 anos de experiência
- Destaque para tecnologias principais (React, Node.js, TypeScript, PHP, Laravel)
- Links diretos para redes sociais e currículo

### 👨‍💻 Sobre Mim
- Cards interativos organizados por categorias:
  - 💼 Experiência Profissional
  - 💻 Metodologias & Práticas (Clean Code, SOLID, Ágil)
  - 💡 Versatilidade Técnica
  - 🎮 Além do Código (hobbies e interesses)

### 🛠️ Tecnologias
Seção organizada por categorias com **20+ tecnologias**:
- **Frontend**: HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Vue.js, Bootstrap, Tailwind CSS
- **Backend**: Node.js, Express, NestJS, PHP, Laravel, Python
- **Databases**: MySQL, PostgreSQL, SQL Server
- **Tools & DevOps**: Git, GitHub, GitLab, Jira, Selenium

### 🏆 Reconhecimentos
Destaque para **5 projetos de impacto**:
- 🤖 Automação de Processos com OCR (200+ clientes)
- 🎬 Sistema para Evento Netflix (Sintonia)
- 🔄 Migração de Sistema Legacy
- 💰 Sistema de Gestão Financeira
- 🏥 Sistema para Clínica Oftalmológica

### 📂 Projetos
Showcase de **8 projetos profissionais** incluindo:
- Sistema de Atendimento (Zely) - WhatsApp integrado
- Sistemas Web Fullstack (cPortal)
- Automações e APIs
- Aplicações Desktop

Cada projeto apresenta:
- Stack tecnológico completo
- Descrição detalhada
- Resultados e impacto
- Badge de confidencialidade quando aplicável

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca JavaScript para UI
- **React Router DOM** - Navegação entre páginas
- **Framer Motion** - Animações suaves e transições

### Styling
- **CSS3** - Estilização personalizada
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Animations** - Efeitos visuais otimizados

### Ícones & Assets
- **React Icons** - Biblioteca de ícones (FontAwesome, Simple Icons, Material Design)

### Performance
- Otimizações CSS para 60fps
- Lazy loading de componentes
- Animações com GPU acceleration
- Código limpo e minificado

---

## 📦 Instalação e Uso

### Pré-requisitos
```bash
Node.js >= 14.0.0
npm ou yarn
```

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio/frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
# ou
yarn start
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

O build otimizado estará na pasta `build/`.

---

## 📁 Estrutura do Projeto

```
frontend/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navegação principal
│   │   ├── Navbar.css
│   │   ├── Techmodal.js       # Modal de tecnologias
│   │   └── Techmodal.css
│   ├── pages/
│   │   ├── Start/             # Página inicial
│   │   ├── About/             # Sobre mim
│   │   ├── Techinfo/          # Tecnologias
│   │   ├── Awards/            # Reconhecimentos
│   │   └── Projects/          # Projetos
│   ├── App.js                 # Componente principal
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## 🎨 Paleta de Cores

```css
/* Cor Principal */
--primary: #CFA2E0;        /* Roxo/Lilás */
--primary-dark: #9d6fb8;   /* Roxo escuro */

/* Background */
--bg-dark: #1f1f1f;        /* Fundo escuro */
--bg-card: rgba(31, 31, 31, 0.9); /* Card escuro */

/* Text */
--text-primary: #ffffff;   /* Branco */
--text-secondary: rgba(255, 255, 255, 0.85); /* Branco opaco */
```

---

## 🔧 Customização

### Alterar Cores
Edite as variáveis de cor nos arquivos CSS de cada componente.

### Adicionar Projetos
1. Abra `src/pages/Projects/Projects.js`
2. Adicione um novo objeto no array `projects`
3. Inclua: título, descrição, tecnologias, resultados e ícone

### Modificar Tecnologias
1. Abra `src/pages/Techinfo/Techinfo.js`
2. Edite o objeto `techData`
3. Adicione os ícones necessários nos imports

---

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- 🖥️ **Desktop**: > 1200px
- 💻 **Laptop**: 768px - 1200px
- 📱 **Tablet**: 480px - 768px
- 📱 **Mobile**: < 480px

---

## ⚡ Performance

### Otimizações Implementadas
- ✅ Animações com `transform` e `opacity` (GPU accelerated)
- ✅ Remoção de `backdrop-filter: blur()` pesados
- ✅ Transições reduzidas de 0.3-0.6s para 0.2s
- ✅ Lazy loading de rotas
- ✅ Código minificado em produção
- ✅ Assets otimizados

**Resultado**: 60fps em animações, carregamento < 2s

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Henrique Sanches** - Desenvolvedor Fullstack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henrique-quitti-sanches-developer/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/henriqueqsanches)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:henrique.sanches.oficial@gmail.com)

---

## 🙏 Agradecimentos

- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [React Router](https://reactrouter.com/) - Roteamento
- Comunidade React por todo o suporte

---

<div align="center">
  
**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Desenvolvido com 💜 por [Henrique Sanches](https://github.com/henriqueqsanches)

</div>
