import React, { useEffect, useState } from "react";
import './Services.css';
import { FaCode, FaMobileAlt, FaRobot, FaServer, FaDatabase, FaPaintBrush, FaTools, FaRocket, FaWhatsapp } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import NoticeModal from '../../components/NoticeModal';

const Services = () => {
  const [whatsOpen, setWhatsOpen] = useState(false);
  const handleWhatsappClick = (e) => {
    e.preventDefault();
    setWhatsOpen(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Desenvolvimento Web Fullstack",
      description: "Criação de sistemas web completos do zero, desde o frontend até o backend, com arquitetura escalável e código limpo seguindo padrões SOLID e Clean Code.",
      features: [
        "Sites institucionais e landing pages",
        "Sistemas de gestão e dashboards",
        "E-commerce e marketplaces",
        "Plataformas web personalizadas"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "PHP", "Laravel"],
      color: "#4CAF50"
    },
    {
      id: 2,
      icon: <FaServer />,
      title: "Desenvolvimento de APIs RESTful",
      category: "Backend",
      description: "Criação de APIs robustas e escaláveis para integração entre sistemas, aplicativos mobile e plataformas web, com documentação completa e boas práticas de segurança.",
      features: [
        "APIs REST com autenticação JWT",
        "Integração com sistemas externos",
        "Documentação técnica completa",
        "Testes automatizados"
      ],
      technologies: ["Node.js", "Express", "NestJS", "PHP", "Laravel"],
      color: "#2196F3"
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: "Aplicações Web Responsivas",
      category: "Frontend",
      description: "Desenvolvimento de interfaces modernas, responsivas e intuitivas, garantindo uma experiência excepcional em qualquer dispositivo (desktop, tablet ou mobile).",
      features: [
        "Design responsivo mobile-first",
        "Performance otimizada (60fps)",
        "Acessibilidade (WCAG)",
        "SEO otimizado"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"],
      color: "#FF9800"
    },
    {
      id: 4,
      icon: <FaRobot />,
      title: "Automação de Processos",
      category: "Automação",
      description: "Desenvolvimento de automações inteligentes com Python para otimizar tarefas repetitivas, economizar tempo e reduzir custos operacionais em até 70%.",
      features: [
        "Web scraping e coleta de dados",
        "Automação de planilhas Excel",
        "OCR e processamento de documentos",
        "Bots e scripts personalizados"
      ],
      technologies: ["Python", "Selenium", "Pandas", "OCR"],
      color: "#9C27B0"
    },
    {
      id: 5,
      icon: <FaDatabase />,
      title: "Banco de Dados & Modelagem",
      category: "Database",
      description: "Modelagem, implementação e otimização de bancos de dados relacionais, garantindo performance, integridade e escalabilidade dos dados.",
      features: [
        "Modelagem de dados e normalização",
        "Otimização de queries SQL",
        "Migrations e seeders",
        "Backup e recuperação de dados"
      ],
      technologies: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"],
      color: "#F44336"
    },
    {
      id: 6,
      icon: <MdIntegrationInstructions />,
      title: "Integração de Sistemas",
      category: "Integrações",
      description: "Integração de sistemas legados com novas tecnologias, APIs de terceiros e serviços externos, garantindo comunicação eficiente entre plataformas.",
      features: [
        "Integração com APIs externas",
        "Webhooks e callbacks",
        "Sincronização de dados",
        "Migração de sistemas legados"
      ],
      technologies: ["REST API", "Webhooks", "Node.js", "PHP"],
      color: "#00BCD4"
    },
    {
      id: 7,
      icon: <FaTools />,
      title: "Manutenção & Suporte",
      category: "Suporte",
      description: "Manutenção contínua de sistemas existentes, correção de bugs, implementação de melhorias e suporte técnico especializado.",
      features: [
        "Correção de bugs e problemas",
        "Implementação de novas features",
        "Otimização de performance",
        "Documentação técnica"
      ],
      technologies: ["Git", "GitHub", "GitLab", "Jira"],
      color: "#607D8B"
    },
    {
      id: 8,
      icon: <FaRocket />,
      title: "Consultoria Técnica",
      category: "Consultoria",
      description: "Consultoria especializada para escolha de tecnologias, arquitetura de software, code review e boas práticas de desenvolvimento.",
      features: [
        "Análise de requisitos técnicos",
        "Escolha de stack tecnológico",
        "Code review e refatoração",
        "Arquitetura de software"
      ],
      technologies: ["Clean Code", "SOLID", "Design Patterns", "Metodologias Ágeis"],
      color: "#FFC107"
    }
  ];

  return (
    <div className="services-container" id="services-section">
      <br />
      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
      
      <h1>
        <FaPaintBrush className="services-icon" />&nbsp;
        <span className="highlight-blue">Serviços Oferecidos</span>
      </h1>
      
      <p className="services-subtitle">
        Soluções completas em desenvolvimento de software para seu negócio
      </p>

      <div className="services-cta">
        <p className="cta-text">
          💼 Trabalho com <span className="highlight-text">metodologias ágeis</span>, 
          garantindo entregas rápidas e de qualidade. Comprometido com 
          <span className="highlight-text"> Clean Code</span> e <span className="highlight-text">boas práticas</span>.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div 
              className="service-icon-wrapper" 
              style={{ backgroundColor: `${service.color}20`, borderColor: service.color }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
            </div>
            
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <span className="features-label">O que inclui:</span>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-tech">
                <span className="tech-label">Tecnologias:</span>
                <div className="tech-tags">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{ borderColor: service.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-action">
              <a 
                href="https://wa.me/5511988078402?text=Olá!%20Gostaria%20de%20contratar%20seus%20serviços" 
                target="_blank" 
                rel="noopener noreferrer"
                className="service-button"
                style={{ backgroundColor: service.color }}
                onClick={handleWhatsappClick}
              >
                <FaWhatsapp size={20} />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>💬 Vamos conversar sobre seu projeto?</h2>
        <p>Entre em contato para discutir como posso ajudar seu negócio a crescer com tecnologia</p>
        <div className="contact-buttons">
          <a 
            href="https://wa.me/5511988078402?text=Olá!%20Gostaria%20de%20contratar%20seus%20serviços" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
            onClick={handleWhatsappClick}
          >
            📱 WhatsApp
          </a>
          <a 
            href="https://www.linkedin.com/in/henrique-quitti-sanches-developer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn linkedin-btn"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>

      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '40px auto 20px' }} />

      <NoticeModal
        open={whatsOpen}
        onClose={() => setWhatsOpen(false)}
        message="No momento, não estou fazendo uso do WhatsApp; por gentileza chamar via Linkedin ou pelo email: qiwitech.sanches@gmail.com"
      />
    </div>
  );
};

export default Services;

