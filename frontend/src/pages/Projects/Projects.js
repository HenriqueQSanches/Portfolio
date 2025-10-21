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
      description: "Plataforma de atendimento integrada com WhatsApp. Gestão de tickets, filas, campanhas e automação multicanal com alta disponibilidade.",
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
      description: "Automação inteligente com OCR para leitura de códigos de barras, processamento de dados e geração automática de planilhas Excel.",
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
      description: "Migração de sistema Visual Studio FOX (C#) para aplicação web PHP/CodeIgniter com padrão MVC, testes automatizados e versionamento Git.",
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
      description: "Plataforma financeira com arquitetura DAO e dashboards interativos. Análise em tempo real de receitas, despesas e lucros.",
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
      description: "Plataforma médica com VueJS e Laravel para gestão de atendimentos, agendamentos e exames oftalmológicos.",
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
      description: "App mobile de QR Code para evento da série Sintonia da Netflix. Validação instantânea com autenticação Google.",
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
      description: "Plataforma de premiações com múltiplas integrações de API. Entrega eficiente e confiável para eventos de grande porte.",
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
      description: "Aplicações desktop standalone com SQLite e executáveis (.exe) para uso local offline.",
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

