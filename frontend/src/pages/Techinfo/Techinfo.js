import React, { useState, useEffect } from "react";
import './Techinfo.css';
import Techmodal from '../../components/Techmodal';

/* Ícones das Tecnologias */
import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiJira } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Techinfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTech, setSelectedTech] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTechClick = (tech) => {
        setSelectedTech(tech);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTech(null);
    };

    const techData = {
        // Frontend
        html: { 
            title: "HTML5", 
            description: "Linguagem de marcação para construção de páginas web.", 
            experience: "Estruturação semântica de páginas web, criação de formulários complexos, validação de entradas, incorporação de mídia, e implementação de boas práticas de SEO e acessibilidade para garantir experiências inclusivas." 
        },
        css: { 
            title: "CSS3", 
            description: "Folhas de estilo em cascata para estilização de páginas web.", 
            experience: "Criação de layouts responsivos com Flexbox e Grid, animações e transições, design adaptativo com media queries, e organização de código CSS seguindo metodologias como BEM. Experiência em criar interfaces modernas e acessíveis." 
        },
        javascript: { 
            title: "JavaScript (ES6+)", 
            description: "Linguagem de programação essencial para desenvolvimento web moderno.", 
            experience: "Desenvolvimento com JavaScript moderno (ES6+), manipulação do DOM, programação assíncrona com Promises e async/await, consumo de APIs RESTful, e implementação de lógica complexa no frontend. Uso de arrow functions, destructuring, spread operator e módulos ES6." 
        },
        typescript: { 
            title: "TypeScript", 
            description: "Superset do JavaScript que adiciona tipagem estática.", 
            experience: "Desenvolvimento de aplicações robustas com TypeScript, criação de interfaces e types, uso de generics, e implementação de código type-safe. Experiência em migração de projetos JavaScript para TypeScript e configuração de ambientes de desenvolvimento." 
        },
        react: { 
            title: "React", 
            description: "Biblioteca JavaScript para construção de interfaces de usuário.", 
            experience: "Desenvolvimento de aplicações web complexas com React, criação de componentes reutilizáveis, gerenciamento de estado com hooks (useState, useEffect, useContext), React Router para navegação, e integração com APIs RESTful. Experiência em otimização de performance e boas práticas." 
        },
        nextjs: { 
            title: "Next.js", 
            description: "Framework React para aplicações web com renderização server-side.", 
            experience: "Desenvolvimento de aplicações com Next.js, implementação de SSR (Server-Side Rendering) e SSG (Static Site Generation), otimização de SEO, roteamento dinâmico, e API routes. Experiência em deploy e otimização de performance." 
        },
        vuejs: { 
            title: "Vue.js", 
            description: "Framework JavaScript progressivo para construir interfaces de usuário.", 
            experience: "Criação de aplicações com Vue.js, desenvolvimento de componentes reutilizáveis, gerenciamento de estado com Vuex, Vue Router para navegação, e integração com APIs. Conhecimento de composition API e options API." 
        },
        bootstrap: { 
            title: "Bootstrap", 
            description: "Framework CSS para desenvolvimento de interfaces responsivas.", 
            experience: "Desenvolvimento de interfaces responsivas com Bootstrap, customização de componentes, uso do sistema de grid, e criação de layouts modernos e mobile-first. Experiência em integração com projetos React e Vue." 
        },
        tailwind: { 
            title: "Tailwind CSS", 
            description: "Framework CSS utility-first para desenvolvimento rápido.", 
            experience: "Criação de interfaces modernas com Tailwind CSS, customização de temas, uso de utility classes, e otimização de builds. Experiência em configuração avançada e criação de design systems consistentes." 
        },
        
        // Backend
        nodejs: { 
            title: "Node.js", 
            description: "Runtime JavaScript para desenvolvimento backend.", 
            experience: "Desenvolvimento de aplicações backend com Node.js, criação de APIs RESTful, manipulação de arquivos, processamento assíncrono, e integração com bancos de dados. Experiência em arquitetura de microsserviços e otimização de performance." 
        },
        express: { 
            title: "Express.js", 
            description: "Framework minimalista para Node.js.", 
            experience: "Criação de APIs RESTful com Express, implementação de middlewares, autenticação JWT, validação de dados, tratamento de erros, e documentação de APIs. Experiência em arquitetura MVC e boas práticas de segurança." 
        },
        nestjs: { 
            title: "NestJS", 
            description: "Framework Node.js progressivo para aplicações escaláveis.", 
            experience: "Desenvolvimento de aplicações enterprise com NestJS, uso de decorators, injeção de dependências, criação de módulos, controllers e services. Experiência em implementação de arquitetura limpa e princípios SOLID." 
        },
        php: { 
            title: "PHP", 
            description: "Linguagem de programação para desenvolvimento web server-side.", 
            experience: "Desenvolvimento de aplicações web com PHP, criação de APIs RESTful, manipulação de sessões e cookies, integração com bancos de dados MySQL e PostgreSQL, e implementação de segurança web. Experiência com POO e padrões de design." 
        },
        laravel: { 
            title: "Laravel", 
            description: "Framework PHP moderno para desenvolvimento web ágil.", 
            experience: "Desenvolvimento de sistemas completos com Laravel, uso de Eloquent ORM, criação de APIs RESTful, implementação de autenticação e autorização, migrations, seeders, e jobs. Experiência em arquitetura MVC, service providers e boas práticas." 
        },
        python: { 
            title: "Python", 
            description: "Linguagem versátil para desenvolvimento e automação.", 
            experience: "Desenvolvimento de scripts para automação de processos, criação de APIs, web scraping com BeautifulSoup e Selenium, manipulação de dados, e integração com sistemas externos. Experiência em otimização de processos empresariais." 
        },
        
        // Databases
        mysql: { 
            title: "MySQL", 
            description: "Sistema de gerenciamento de banco de dados relacional.", 
            experience: "Modelagem e criação de bancos de dados MySQL, otimização de queries, implementação de índices, procedures e triggers, gerenciamento de relacionamentos complexos, e estratégias de backup. Experiência em normalização e performance tuning." 
        },
        postgresql: { 
            title: "PostgreSQL", 
            description: "Sistema de banco de dados relacional avançado e open-source.", 
            experience: "Desenvolvimento com PostgreSQL, criação de schemas complexos, uso de tipos de dados avançados, implementação de constraints e triggers, otimização de queries, e gerenciamento de transações. Experiência em migrations e backup strategies." 
        },
        sqlserver: { 
            title: "SQL Server", 
            description: "Sistema de gerenciamento de banco de dados da Microsoft.", 
            experience: "Conhecimento básico de SQL Server, criação de databases e tabelas, queries SQL, stored procedures, e manipulação de dados. Experiência em integração com aplicações .NET e ferramentas Microsoft." 
        },
        
        // Tools & DevOps
        github: { 
            title: "GitHub", 
            description: "Plataforma de hospedagem de código e colaboração.", 
            experience: "Controle de versão com Git e GitHub, gerenciamento de branches, pull requests, code review, GitHub Actions para CI/CD, e colaboração em projetos open-source. Experiência em workflows Git Flow e boas práticas de versionamento." 
        },
        gitlab: { 
            title: "GitLab", 
            description: "Plataforma DevOps completa para gerenciamento de código.", 
            experience: "Uso de GitLab para controle de versão, criação de pipelines CI/CD, automação de testes e deploy, merge requests, e revisão de código. Experiência em configuração de runners e estratégias de deployment." 
        },
        jira: { 
            title: "Jira", 
            description: "Ferramenta de gestão de projetos ágeis.", 
            experience: "Gerenciamento de projetos com metodologias ágeis (Scrum/Kanban), criação e acompanhamento de sprints, estimativas, burndown charts, e workflows customizados. Experiência em coordenação de equipes e planejamento de releases." 
        },
        selenium: { 
            title: "Selenium", 
            description: "Ferramenta para automação de navegadores e testes.", 
            experience: "Automação de processos web com Selenium, criação de scripts para testes automatizados, web scraping, e interação com páginas dinâmicas. Experiência em integração com Python e otimização de performance de scripts." 
        }
    };

    return (
        <div className="tech-container">
            <h1 className="techinfoTitle">
                T<span className="highlight">e</span>cnologias e Linguagens <span className="highlight">C</span><span className="highlight-white">onhecidas:</span>
            </h1>
            <p>Clique sobre as tecnologias para mais detalhes</p>
            <hr className="allIn" />
            
            <div className="tech-categories-wrapper">
                {/* Frontend */}
                <div className="tech-category-container">
                    <h2 className="category-title">Frontend</h2>
                    <div className="techSmart">
                        <TiHtml5 className="techHTML" onClick={() => handleTechClick(techData.html)} />
                        <FaCss3Alt className="techCSS" onClick={() => handleTechClick(techData.css)} />
                        <RiJavascriptFill className="techJavascript" onClick={() => handleTechClick(techData.javascript)} />
                        <SiTypescript className="techTypescript" onClick={() => handleTechClick(techData.typescript)} />
                        <RiReactjsFill className="techReactJS" onClick={() => handleTechClick(techData.react)} />
                        <SiNextdotjs className="techNextJS" onClick={() => handleTechClick(techData.nextjs)} />
                        <FaVuejs className="vueJS" onClick={() => handleTechClick(techData.vuejs)} />
                        <SiBootstrap className="techBootstrap" onClick={() => handleTechClick(techData.bootstrap)} />
                        <SiTailwindcss className="techTailwind" onClick={() => handleTechClick(techData.tailwind)} />
                    </div>
                </div>

                {/* Backend */}
                <div className="tech-category-container">
                    <h2 className="category-title">Backend</h2>
                    <div className="techSmart">
                        <FaNodeJs className="techNodeJS" onClick={() => handleTechClick(techData.nodejs)} />
                        <SiExpress className="techExpress" onClick={() => handleTechClick(techData.express)} />
                        <SiNestjs className="techNestJS" onClick={() => handleTechClick(techData.nestjs)} />
                        <FaPhp className="techPHP" onClick={() => handleTechClick(techData.php)} />
                        <FaLaravel className="techLaravel" onClick={() => handleTechClick(techData.laravel)} />
                        <FaPython className="techPython" onClick={() => handleTechClick(techData.python)} />
                    </div>
                </div>

                {/* Databases */}
                <div className="tech-category-container">
                    <h2 className="category-title">Databases</h2>
                    <div className="techSmart">
                        <SiMysql className="techMySQL" onClick={() => handleTechClick(techData.mysql)} />
                        <SiPostgresql className="techPostgreSQL" onClick={() => handleTechClick(techData.postgresql)} />
                        <FaDatabase className="techSQLServer" onClick={() => handleTechClick(techData.sqlserver)} />
                    </div>
                </div>

                {/* Tools & DevOps */}
                <div className="tech-category-container">
                    <h2 className="category-title">Tools & DevOps</h2>
                    <div className="techSmart">
                        <FaGithub className="techGitHub" onClick={() => handleTechClick(techData.github)} />
                        <FaGitlab className="techGitLab" onClick={() => handleTechClick(techData.gitlab)} />
                        <SiJira className="techJira" onClick={() => handleTechClick(techData.jira)} />
                        <SiSelenium className="techSelenium" onClick={() => handleTechClick(techData.selenium)} />
                    </div>
                </div>
            </div>

            <Techmodal isOpen={isModalOpen} onClose={closeModal} techDetails={selectedTech} />
        </div>
    );
};

export default Techinfo;
