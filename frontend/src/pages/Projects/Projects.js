import React, { useEffect } from "react";
import './Projects.css';
import { FaWhatsapp, FaRobot, FaChartLine, FaQrcode, FaHospital, FaTrophy, FaCode, FaDatabase } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      title: "Sistema de Atendimento ao Cliente",
      category: "Sistema Web Fullstack",
      company: "Zely",
      description: "Plataforma completa de atendimento integrada com WhatsApp, incluindo gestão de tickets, filas de atendimento, campanhas e automação de múltiplos canais. Sistema desenvolvido para alta disponibilidade e performance.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
      results: [
        "Atendimento multicanal integrado",
        "Automação de respostas e campanhas",
        "Gestão completa de tickets e filas"
      ],
      confidential: false,
      period: "2025"
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: "Automação com OCR para Processamento Financeiro",
      category: "Automação Python",
      description: "Sistema de automação com Python e OCR para leitura automática de códigos e códigos de barras, processamento de dados e geração de planilhas Excel. Otimizou drasticamente processos financeiros e administrativos.",
      technologies: ["Python", "OCR", "Excel", "Pandas"],
      results: [
        "Atende mais de 200 clientes",
        "70% de redução no tempo de processamento",
        "Automação completa de tarefas manuais"
      ],
      confidential: true,
      period: "2025"
    },
    {
      id: 3,
      icon: <FaCode />,
      title: "Migração de Sistema Legacy",
      category: "Modernização de Software",
      description: "Migração completa de sistema Visual Studio FOX (C#) para aplicação web moderna em PHP/CodeIgniter seguindo padrão MVC. Implementação de testes automatizados, versionamento Git e documentação técnica completa.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "Git", "MVC"],
      results: [
        "Sistema legado modernizado",
        "Arquitetura MVC implementada",
        "Documentação técnica completa",
        "Testes automatizados"
      ],
      confidential: true,
      period: "2025"
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Sistema de Gestão Financeira",
      category: "Sistema Web Fullstack",
      company: "cPortal",
      description: "Plataforma completa de gerenciamento financeiro com arquitetura DAO, dashboards interativos para visualização de receitas, despesas e lucros. Interface moderna e intuitiva para análise financeira em tempo real.",
      technologies: ["PHP", "ReactJS", "MySQL", "DAO Pattern"],
      results: [
        "Dashboards interativos",
        "Visualização em tempo real",
        "Análise financeira completa",
        "Otimização de investimentos"
      ],
      confidential: false,
      period: "2024"
    },
    {
      id: 5,
      icon: <FaHospital />,
      title: "Sistema para Clínica Oftalmológica",
      category: "Sistema de Gestão Médica",
      company: "cPortal",
      description: "Plataforma de gerenciamento para clínica oftalmológica com VueJS e Laravel, otimizando processos de atendimento, agendamento de consultas e realização de exames. Integração completa com banco de dados.",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP"],
      results: [
        "Otimização de atendimentos",
        "Gestão de agendamentos",
        "Controle de exames",
        "Melhoria na logística operacional"
      ],
      confidential: false,
      period: "2024"
    },
    {
      id: 6,
      icon: <FaQrcode />,
      title: "Sistema de Validação para Evento Netflix",
      category: "Sistema Web Mobile",
      company: "cPortal",
      description: "Aplicação web mobile de geração e validação de QR Code para evento da série Sintonia da Netflix. Sistema com autenticação Google, resultando em redução significativa de filas e melhor experiência do público.",
      technologies: ["PHP Slim", "ReactJS", "Google API", "MySQL"],
      results: [
        "Redução drástica em filas",
        "Validação instantânea de ingressos",
        "Alta satisfação do público",
        "Autenticação Google integrada"
      ],
      confidential: false,
      period: "2024"
    },
    {
      id: 7,
      icon: <FaTrophy />,
      title: "Sistema de Premiações para Eventos",
      category: "Sistema Web Fullstack",
      company: "cPortal",
      description: "Plataforma de gerenciamento de premiações com múltiplas integrações de API. Sistema robusto e confiável para entrega eficiente de prêmios durante eventos de grande porte.",
      technologies: ["Laravel", "Node.js", "TypeScript", "MySQL"],
      results: [
        "Múltiplas integrações de API",
        "Entrega eficiente de prêmios",
        "Alta confiabilidade em eventos",
        "Escalabilidade garantida"
      ],
      confidential: false,
      period: "2024"
    },
    {
      id: 8,
      icon: <FaDatabase />,
      title: "Sistemas Standalone com SQLite",
      category: "Aplicações Desktop",
      description: "Desenvolvimento de sistemas standalone com SQLite e geração de executáveis (.exe) para uso em ambiente local. Soluções práticas com alta taxa de adesão pelos usuários finais.",
      technologies: ["Python", "SQLite", "PyInstaller"],
      results: [
        "Soluções offline independentes",
        "Alta taxa de adesão",
        "Facilidade de distribuição",
        "Performance local otimizada"
      ],
      confidential: false,
      period: "2024"
    }
  ];

  return (
    <div className="projects-container" id="projects-section">
      <br />
      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
      
      <h1>
        <MdOutlineManageAccounts className="projects-icon" />&nbsp;
        <span className="highlight-blue">Projetos Desenvolvidos</span>
      </h1>
      
      <p className="projects-subtitle">
        Soluções completas desenvolvidas ao longo da minha trajetória profissional
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-icon-wrapper">
                <div className="project-icon">
                  {project.icon}
                </div>
              </div>
              {project.confidential && (
                <span className="confidential-badge">🔒 Confidencial</span>
              )}
            </div>
            
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              {project.company && (
                <p className="project-company">
                  <span className="company-icon">🏢</span> {project.company}
                </p>
              )}
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                <span className="tech-label">Stack:</span>
                <div className="tech-badges">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-results">
                <span className="results-label">Resultados:</span>
                <ul className="results-list">
                  {project.results.map((result, index) => (
                    <li key={index}>✓ {result}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-footer">
              <span className="project-period">{project.period}</span>
            </div>
          </div>
        ))}
      </div>

      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '40px auto 20px' }} />
    </div>
  );
};

export default Projects;

