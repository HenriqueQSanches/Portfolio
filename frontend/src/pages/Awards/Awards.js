import React, { useEffect } from "react";
import './Awards.css';
import { FaTrophy, FaAward, FaRocket, FaStar } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";

const Awards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const awards = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Automação de Processos Administrativos",
      company: "WKL Consultoria e Informática",
      description: "Desenvolvimento de solução em Python com OCR para leitura e processamento automático de códigos e códigos de barras, otimizando drasticamente o tempo de processamento manual.",
      color: "#4CAF50"
    },
    {
      id: 2,
      icon: <FaStar />,
      title: "Implementação de Sistema para Evento Netflix",
      company: "cPortal",
      description: "Desenvolvimento de sistema de geração e validação de QR Code para a série Sintonia da Netflix, reduzindo tempo de fila e aumentando a satisfação do público no evento.",
      color: "#E50914"
    },
    {
      id: 3,
      icon: <MdWorkspaces />,
      title: "Migração de Sistema Legacy",
      company: "WKL Consultoria e Informática",
      description: "Migração completa de um sistema Visual Studio FOX (C#) para aplicação web em PHP/CodeIgniter, permitindo aumento no valor dos contratos e melhor experiência dos usuários.",
      color: "#FF9800"
    },
    {
      id: 4,
      icon: <FaAward />,
      title: "Otimização em Sistema de Gestão Financeira",
      company: "cPortal",
      description: "Criação de um sistema de gerenciamento financeiro com PHP, ReactJS e MySQL que otimizou a análise financeira e gerou novos investimentos para a empresa.",
      color: "#2196F3"
    },
    {
      id: 5,
      icon: <FaTrophy />,
      title: "Transformação Digital em Clínica Oftalmológica",
      company: "cPortal",
      description: "Implementação de sistema de gerenciamento com VueJS e Laravel que otimizou os atendimentos, exames e agendamentos médicos, melhorando a logística operacional da clínica.",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="awards-container" id="awards-section">
      <br />
      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
      
      <h1>
        <FaTrophy className="trophy-icon" />&nbsp;
        <span className="highlight-blue">Reconhecimentos e Prêmios</span>
      </h1>
      
      <p className="awards-subtitle">
        Projetos e conquistas que marcaram minha trajetória profissional
      </p>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div 
            key={award.id} 
            className="award-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="award-icon-wrapper" style={{ backgroundColor: `${award.color}20`, borderColor: award.color }}>
              <div className="award-icon" style={{ color: award.color }}>
                {award.icon}
              </div>
            </div>
            
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <p className="award-company">
                <span className="company-label">Associado a:</span> {award.company}
              </p>
              <p className="award-description">{award.description}</p>
            </div>

            <div className="award-badge" style={{ backgroundColor: award.color }}>
              <FaStar size={12} />
            </div>
          </div>
        ))}
      </div>

      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '40px auto 20px' }} />
    </div>
  );
};

export default Awards;

