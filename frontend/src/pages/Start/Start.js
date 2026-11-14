import React, { useEffect } from 'react';
import './Start.css';
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

// Mensagem neutra que já vem escrita quando a pessoa abre o WhatsApp pelo portfólio
const WHATSAPP = "https://wa.me/5511930022870?text=" + encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.");

const Start = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="start-container">
      <div className="hero-badge">Disponível para projetos freelance</div>
      <h1>
        Olá, eu sou <span className="highlight">H</span><span className="highlight-white">en</span><span className="highlight">ri</span><span className="highlight-white">que Sanches!</span><FaReact className='reactIcon' size={40}/>
      </h1>
      <p className="hero-lead">
        Desenvolvedor Fullstack · <span className="highlight">Node.js</span>, <span className="highlight">TypeScript</span> e <span className="highlight">React</span> · sistemas web em produção, integrações e automação.
      </p>
      <div className="hero-cta">
        <a className="cta-btn cta-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
        <Link className="cta-btn cta-secondary" to="/projects">
          Ver projetos
        </Link>
        <a className="cta-btn cta-secondary" href="https://drive.google.com/file/d/1flmT6cRpQckHcH3icYzrmDIQSLzRLHB2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          Ver currículo
        </a>
      </div>
      <p>
        Sou desenvolvedor fullstack com <span className="highlight">quase 4 anos de experiência</span> construindo e mantendo sistemas web em produção, do banco de dados à interface. Hoje atuo em uma plataforma SaaS B2B do setor contábil e fiscal, entre o sistema legado e a nova arquitetura, com integrações de nota fiscal eletrônica, cobrança recorrente e Open Finance.
      </p>
      <p>
        Antes disso, desenvolvi uma plataforma de atendimento integrada ao WhatsApp, automações em Python com OCR, um sistema para clínica oftalmológica e validação de ingressos por QR Code para eventos. Por fora, entreguei um <Link className="inline-link" to="/projects">site de reservas com pagamento online</Link> que está no ar recebendo pedidos de verdade.
      </p>
      <p className="quote">
        Só considero uma entrega pronta depois de testar o fluxo real, de ponta a ponta.
        <span className="blink">|</span>
      </p>
      <span className="MeContate">Me Contate!</span>
      {/* REDES SOCIAIS */}
      <div className='socialMedia'>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/henrique-quitti-sanches-developer/" target="_blank" rel="noopener noreferrer">
          <GrLinkedin size={40} className='linkedinIcon' />
        </a>

        {/* WhatsApp */}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <SiWhatsapp size={40} className='whatsappIcon' />
        </a>

        {/* Currículo */}
        <a href="https://drive.google.com/file/d/1flmT6cRpQckHcH3icYzrmDIQSLzRLHB2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <IoNewspaperSharp size={40} className='curriculumIcon' />
        </a>

        {/* Github */}
        <a href="https://github.com/henriqueqsanches" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className='githubIcon'/>
        </a>
      </div>

    </div>
  );
};

export default Start;
