import React, { useEffect } from "react";
import "./Experiences.css";
import { FaBriefcase, FaChartLine, FaUsers, FaLayerGroup, FaCalendarAlt } from "react-icons/fa";

const Experiences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { id: 1, label: "Experiência profissional", value: "Quase 4 anos" },
    { id: 2, label: "Empresas e contratos", value: "6 experiências" },
    { id: 3, label: "Base atendida (WKL)", value: "200+ clientes" },
    { id: 4, label: "Atuação atual", value: "SaaS B2B" }
  ];

  const experiences = [
    {
      company: "Quali IT",
      role: "Desenvolvedor Fullstack (PJ)",
      period: "Abr 2026 - atual",
      summary:
        "Alocado em cliente do setor contábil e fiscal (SaaS B2B), atuando em duas frentes: evolução da nova plataforma e sustentação do sistema em produção.",
      impact: [
        "Modernização incremental de monólito legado (Node.js e MongoDB) para nova arquitetura em NestJS, Prisma e PostgreSQL, substituindo funcionalidades por partes, sem parar o sistema.",
        "Migração de grande volume de dados de produção de MongoDB para PostgreSQL, com cargas que podem rodar de novo sem duplicar nem corromper dados.",
        "Telas completas em Next.js e React, com dashboard, filtros, exportação CSV e download de documentos.",
        "Sustentação de produção: investigação e correção de chamados de clientes em emissão de nota fiscal eletrônica (NFS-e), cobrança e conciliação bancária, da leitura de logs e banco até a correção validada no fluxo real.",
        "Adaptações da emissão de NFS-e para a Reforma Tributária (IBS, CBS e NFS-e Nacional) e integrações com cobrança recorrente, Open Finance e CRM.",
        "Acompanhamento de deploys por pipeline GitLab CI e diagnóstico em Kubernetes pelo Rancher (pods, logs e configuração de ambiente)."
      ],
      stack: ["Node.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Next.js", "React", "Docker", "Kubernetes", "GitLab CI"]
    },
    {
      company: "Zely",
      role: "Desenvolvedor Fullstack Pl (PJ)",
      period: "Abr 2025 - Out 2025 · 7 meses",
      location: "São Paulo, Brasil",
      summary:
        "Evolução de plataforma de atendimento integrada ao WhatsApp, com foco em automação de suporte, gestão de tickets e comunicação multicanal.",
      impact: [
        "Desenvolvimento fullstack com React, Node.js e TypeScript para funcionalidades críticas do produto.",
        "Implementação de gestão de tickets e filas com distribuição automática de demandas.",
        "Integração com WhatsApp e APIs externas para centralização do atendimento.",
        "Uso de PostgreSQL e Redis para operações de alta demanda e performance consistente."
      ],
      stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "REST APIs", "Git"]
    },
    {
      company: "WKL Consultoria e Informática",
      role: "Desenvolvedor Fullstack (Temporário)",
      period: "Fev 2025 - Mar 2025 · 2 meses",
      location: "São Paulo, Brasil",
      summary:
        "Modernização de sistema legado e automações para processos administrativos e financeiros de clientes do setor jurídico.",
      impact: [
        "Automações com Python e OCR para leitura de códigos e redução de tarefas manuais.",
        "Rotinas para processamento de dados e geração automática de planilhas para base superior a 200 clientes.",
        "Migração de sistema legado (Visual Fox/C#) para aplicação web em PHP/CodeIgniter com arquitetura MVC.",
        "Documentação técnica e boas práticas para garantir manutenção e evolução contínua."
      ],
      stack: ["Python", "OCR", "PHP", "CodeIgniter", "MySQL", "Git", "MVC"]
    },
    {
      company: "Workana",
      role: "Desenvolvedor Fullstack",
      period: "Jan 2024 - Mar 2025 · 1 ano e 3 meses",
      location: "Remoto",
      summary:
        "Atuação como desenvolvedor independente no ciclo completo de sistemas web, automações e integrações para diferentes segmentos.",
      impact: [
        "Entrega de sistemas com React, Node.js, PHP/Laravel e bancos PostgreSQL/MySQL.",
        "Automação de processos repetitivos com Python para ganho operacional dos clientes.",
        "Gestão de escopo, prazos e arquitetura técnica do início até entrega final.",
        "Aplicações standalone com SQLite e executáveis (.exe) para uso local."
      ],
      stack: ["React", "Node.js", "PHP", "Laravel", "Python", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      company: "cPortal",
      role: "Desenvolvedor Fullstack (PJ)",
      period: "Ago 2024 - Fev 2025 · 7 meses",
      location: "São Bernardo do Campo, SP, Brasil",
      summary:
        "Desenvolvimento de sistemas web e aplicações mobile com foco em soluções escaláveis, seguras e orientadas ao negócio.",
      impact: [
        "Sistema de gestão financeira com dashboards para receitas, despesas e indicadores.",
        "Plataforma para clínica oftalmológica com agendamentos, pacientes e gestão administrativa.",
        "Sistema web mobile de validação por QR Code para evento oficial da série Sintonia (Netflix).",
        "Sistema de premiações para eventos com integrações em múltiplas APIs."
      ],
      stack: ["React", "Vue.js", "Node.js", "TypeScript", "PHP", "Laravel", "MySQL", "APIs"]
    },
    {
      company: "SCORP Tecnologia",
      role: "Desenvolvedor Fullstack (Estágio)",
      period: "Jan 2023 - Fev 2024 · 1 ano e 2 meses",
      location: "Santo André, SP, Brasil",
      summary:
        "Desenvolvimento de soluções web para presença digital e gestão de clientes, com foco em backend e experiência de usuário.",
      impact: [
        "Construção de site institucional com performance e responsividade.",
        "Backend em PHP para autenticação, gerenciamento de dados e regras de negócio.",
        "Módulo de chamados para registro e acompanhamento de solicitações de clientes.",
        "Integração com banco SQL para armazenamento estruturado e controle de dados."
      ],
      stack: ["PHP", "SQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <div className="experiences-container">
      <hr style={{ width: "80%", height: "3px", backgroundColor: "#CFA2E0", border: "none", margin: "20px auto" }} />

      <h1>
        <FaBriefcase className="experiences-icon" /> <span className="highlight-blue">Experiências Profissionais</span>
      </h1>
      <p className="experiences-subtitle">
        Trajetória com foco em produtos reais, sistemas escaláveis e entregas orientadas a resultado.
      </p>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.id}>
            <span className="highlight-value">{item.value}</span>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <article className="experience-card" key={exp.company + index}>
            <header className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <p className="company-name">{exp.company}</p>
              </div>
              <div className="period-box">
                <FaCalendarAlt />
                <span>{exp.period}</span>
              </div>
            </header>

            {exp.location && <p className="experience-location">{exp.location}</p>}
            <p className="experience-summary">{exp.summary}</p>

            <div className="impact-section">
              <p className="impact-title"><FaChartLine /> Principais entregas e impacto</p>
              <ul>
                {exp.impact.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="stack-section">
              <p className="impact-title"><FaLayerGroup /> Stack aplicada</p>
              <div className="stack-tags">
                {exp.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="recruiter-note">
        <FaUsers />
        <p>
          Como trabalho: busco a causa raiz de verdade, comparando o caso que funciona com o que falha; só considero uma entrega pronta depois de testar o fluxo real, de ponta a ponta; e documento decisões e investigações para que o conhecimento não se perca.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
