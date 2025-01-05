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
import { SiDjango } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiJira } from "react-icons/si";

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
        html: { 
            title: "HTML5", 
            description: "Linguagem de marcação para construção de páginas web.", 
            experience: "Estruturação de páginas com HTML5, criação de formulários, validação básica de entradas, incorporação de mídia (imagens e vídeos), e boas práticas de SEO e acessibilidade." 
        },
        css: { 
            title: "CSS3", 
            description: "Folhas de estilo em cascata para estilização de páginas web.", 
            experience: "Criação de layouts responsivos com Flexbox e Grid, estilização de elementos com propriedades básicas e avançadas, uso de transições e animações, e boas práticas de organização de código CSS. Familiaridade com media queries e design adaptativo." 
        },
        javascript: { 
            title: "JavaScript", 
            description: "Linguagem de programação para desenvolvimento web e muito mais.", 
            experience: "Manipulação do DOM para criação de interatividade, uso de funções e estruturas de controle (loops, condicionais), manipulação de arrays e objetos com métodos nativos, consumo de APIs com `fetch` e tratamento de dados assíncronos com Promises e `async/await`. Conhecimento básico de ES6, como arrow functions, destructuring, e spread operator." 
        },
        react: { 
            title: "React", 
            description: "Biblioteca JavaScript para construção de interfaces de usuário.", 
            experience: "Criação de componentes reutilizáveis, gerenciamento de estado com hooks, uso de React Router para navegação, e integração com APIs RESTful. Conhecimento de conceitos como props, state, e ciclo de vida de componentes." 
        },
        vuejs: { 
            title: "Vue.js", 
            description: "Framework JavaScript progressivo para construir interfaces de usuário.", 
            experience: "Criação de componentes reutilizáveis, gerenciamento de estado com Vuex, uso de Vue Router para navegação, e integração com APIs RESTful. Conhecimento de diretivas, mixins, e ciclo de vida de componentes." 
        },
        php: { 
            title: "PHP", 
            description: "Linguagem de programação para desenvolvimento web do lado do servidor.", 
            experience: "Desenvolvimento de aplicações web com PHP, manipulação de banco de dados com MySQL, criação de APIs RESTful, e uso de frameworks como Laravel. Conhecimento de conceitos como sessões, cookies, e segurança web." 
        },
        python: { 
            title: "Python", 
            description: "Linguagem de programação de propósito geral, fácil de aprender e poderosa.", 
            experience: "Desenvolvimento de scripts para automação, manipulação de dados com bibliotecas como Pandas, criação de APIs com Flask e Django, e uso de bibliotecas para machine learning como Scikit-learn. Conhecimento de conceitos como listas, dicionários, e compreensão de listas." 
        },
        java: { 
            title: "Java", 
            description: "Linguagem de programação popular para desenvolvimento de aplicações empresariais.", 
            experience: "Desenvolvimento de aplicações básicas com Java, uso de bibliotecas padrão, manipulação de arquivos, e criação de interfaces gráficas simples com Swing. Conhecimento de conceitos de orientação a objetos como herança, polimorfismo, e encapsulamento." 
        },
        laravel: { 
            title: "Laravel", 
            description: "Framework PHP para desenvolvimento ágil de aplicações web.", 
            experience: "Criação de aplicações web com Laravel, uso de Eloquent ORM para manipulação de banco de dados, desenvolvimento de rotas e controladores, e implementação de autenticação básica. Conhecimento de Blade templates e migrações de banco de dados." 
        },
        django: { 
            title: "Django", 
            description: "Framework web Python para construção de aplicações robustas.", 
            experience: "Desenvolvimento de aplicações web com Django, uso de ORM para manipulação de banco de dados, criação de views e templates, e implementação de autenticação. Conhecimento de migrações de banco de dados e administração do Django." 
        },
        selenium: { 
            title: "Selenium", 
            description: "Ferramenta para automação de navegadores para testes.", 
            experience: "Automação de testes de interface de usuário com Selenium, criação de scripts de teste para navegação e interação com páginas web, e uso de WebDriver para controle de navegadores. Conhecimento básico de XPath e seletores CSS para localização de elementos." 
        },
        mysql: { 
            title: "MySQL", 
            description: "Sistema de gerenciamento de banco de dados relacional.", 
            experience: "Criação e manipulação de bancos de dados MySQL, uso de SQL para consultas, inserções, atualizações e exclusões de dados, e implementação de relacionamentos entre tabelas. Conhecimento de índices, chaves primárias e estrangeiras, e backups de banco de dados." 
        },
        ubuntu: { 
            title: "Ubuntu", 
            description: "Sistema operacional Linux de código aberto baseado no Debian.", 
            experience: "Uso de Ubuntu para desenvolvimento e administração de sistemas, instalação e configuração de software, uso de linha de comando para tarefas básicas, e gerenciamento de pacotes com APT. Conhecimento de permissões de arquivos e scripts de shell." 
        },
        gitlab: { 
            title: "GitLab", 
            description: "Plataforma DevOps para gerenciamento de repositórios Git.", 
            experience: "Uso de GitLab para controle de versão, criação e gerenciamento de repositórios, uso de pipelines CI/CD para automação de testes e deploy, e colaboração em projetos com merge requests e revisão de código. Conhecimento de Git básico como commits, branches, e merges." 
        },
        jira: { 
            title: "Jira", 
            description: "Ferramenta de gestão de projetos e controle de tarefas.", 
            experience: "Uso de Jira para gerenciamento de projetos ágeis, criação e acompanhamento de tarefas, uso de boards Kanban e Scrum, e geração de relatórios de progresso. Conhecimento de workflows, sprints, e backlog grooming." 
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
                        <RiReactjsFill className="techReactJS" onClick={() => handleTechClick(techData.react)} />
                        <FaVuejs className="vueJS" onClick={() => handleTechClick(techData.vuejs)} />
                    </div>
                </div>

                {/* Backend */}
                <div className="tech-category-container">
                    <h2 className="category-title">Backend</h2>
                    <div className="techSmart">
                        <FaPhp className="techPHP" onClick={() => handleTechClick(techData.php)} />
                        <FaPython className="techPython" onClick={() => handleTechClick(techData.python)} />
                        <FaJava className="techJava" onClick={() => handleTechClick(techData.java)} />
                        <FaLaravel className="techLaravel" onClick={() => handleTechClick(techData.laravel)} />
                        <SiDjango className="techDjango" onClick={() => handleTechClick(techData.django)} />
                    </div>
                </div>

                {/* Ferramentas */}
                <div className="tech-category-container">
                    <h2 className="category-title">Ferramentas</h2>
                    <div className="techSmart">
                        <SiSelenium className="techSelenium" onClick={() => handleTechClick(techData.selenium)} />
                        <SiMysql className="techMySQL" onClick={() => handleTechClick(techData.mysql)} />
                        <FaUbuntu className="techUbuntu" onClick={() => handleTechClick(techData.ubuntu)} />
                        <FaGitlab className="techGitLab" onClick={() => handleTechClick(techData.gitlab)} />
                        <SiJira className="techJira" onClick={() => handleTechClick(techData.jira)} />
                    </div>
                </div>
            </div>

            <Techmodal isOpen={isModalOpen} onClose={closeModal} techDetails={selectedTech} />
        </div>
    );
};

export default Techinfo;
