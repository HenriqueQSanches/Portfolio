import React, { useEffect } from "react";
import './Projects.css';
import { FaWhatsapp, FaRobot, FaChartLine, FaQrcode, FaHospital, FaTrophy, FaCode, FaDatabase, FaCalendarCheck, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      // Projeto real, no ar, com autorização do dono para o portfólio (nov/2026)
      id: 9,
      featured: true,
      icon: <FaCalendarCheck />,
      title: "Site de Reservas com Pagamento Online",
      category: "Projeto real, no ar",
      company: "Nathalia Perissato Brigaderia",
      description: "Site de reservas para a campanha de Natal de uma brigaderia artesanal. O cliente escolhe os produtos, a data de entrega ou de retirada e paga o sinal online. Por trás, um painel onde o dono acompanha os pedidos e controla datas, limites e cupons.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL (Supabase)", "Mercado Pago", "Cloudflare"],
      results: [
        "No ar desde novembro de 2026, com pagamentos reais por Pix e cartão",
        "Limite de vagas por data e por produto, sem vender além do limite mesmo com pedidos ao mesmo tempo",
        "Pagamento confirmado sozinho pelo aviso automático do Mercado Pago",
        "Painel com pedidos, limites por dia, datas, cupons de desconto e planilha"
      ],
      link: "https://reservas-natal.nathaliaperissato.workers.dev",
      images: [
        { src: "/images/projetos/brigaderia-vitrine-desktop.png", alt: "Vitrine do site no computador, com as datas de entrega e retirada e os panetones" },
        { src: "/images/projetos/brigaderia-vitrine-celular.png", alt: "Vitrine no celular" },
        { src: "/images/projetos/brigaderia-produto-celular.png", alt: "Produto com foto, descrição e preço no celular" },
        { src: "/images/projetos/brigaderia-pagamento-celular.png", alt: "Resumo com cupom de desconto e escolha entre sinal, metade ou valor total" }
      ],
      confidential: false,
      period: "2026"
    },
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
        "Leitura de códigos de barras e geração de planilhas sem trabalho manual"
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
        "Receitas, despesas e lucros em tempo real",
        "Análise financeira completa"
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
        "Validação instantânea de ingressos na entrada",
        "Leitura de QR Code pelo celular",
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
        "Entrega de prêmios em eventos de grande porte"
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
        "Distribuição simples em um único executável"
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
          <div key={project.id} className={`project-card${project.featured ? " featured" : ""}`}>
            {/* Prints do projeto: o primeiro (computador) em cima, os de celular lado a lado. Clicar abre em tamanho real. */}
            {project.images && (
              <div className="project-gallery">
                {project.images.map((img, index) => (
                  <a
                    key={img.src}
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`gallery-item${index === 0 ? " gallery-main" : ""}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </a>
                ))}
              </div>
            )}

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
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver site no ar <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '40px auto 20px' }} />
    </div>
  );
};

export default Projects;

