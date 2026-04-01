import React, { useEffect } from 'react';
import './Start.css';
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



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
        Fullstack Developer · <span className="highlight">Node.js</span>, <span className="highlight">TypeScript</span>, <span className="highlight">React</span>, <span className="highlight">PHP</span> e <span className="highlight">Laravel</span> · plataformas <span className="highlight">SaaS</span>, <span className="highlight">APIs</span> e <span className="highlight">automação</span>.
      </p>
      <div className="hero-cta">
        <a className="cta-btn cta-primary" href="https://wa.me/5511930022870?text=Te%20achei%20pelo%20seu%20portfolio%20feito%20em%20ReactJS" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
        <a className="cta-btn cta-secondary" href="https://drive.google.com/file/d/1flmT6cRpQckHcH3icYzrmDIQSLzRLHB2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          Ver currículo
        </a>
      </div>
      <p>
        Desenvolvedor Fullstack com <span className="highlight">mais de 3 anos de experiência</span> na criação de sistemas web, plataformas <span className="highlight">SaaS</span> e soluções de <span className="highlight">automação</span> que otimizam processos e reduzem custos operacionais. Atuo do levantamento de requisitos e da arquitetura até a <span className="highlight">implementação e manutenção em produção</span>, com <span className="highlight">TypeScript</span>, <span className="highlight">Node.js</span>, <span className="highlight">React</span>, <span className="highlight">PHP</span>, <span className="highlight">Laravel</span> e <span className="highlight">Python</span>.
      </p>
      <p>
        Ao longo da trajetória, participei da entrega de sistemas de <span className="highlight">gestão financeira</span>, soluções para <span className="highlight">clínicas</span>, plataformas de atendimento integradas ao <span className="highlight">WhatsApp</span>, automações com <span className="highlight">Python</span> e OCR, e sistemas de validação para eventos de grande porte. Também desenvolvo <span className="highlight">APIs RESTful</span> e integrações, com <span className="highlight">PostgreSQL</span>, <span className="highlight">MySQL</span>, <span className="highlight">Clean Code</span>, <span className="highlight">SOLID</span> e arquitetura <span className="highlight">MVC</span>.
      </p>
      <p className="quote">
        "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge" - <span className='highlight'>Stephen Hawking</span>
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
        <a href="https://wa.me/5511930022870?text=Te%20achei%20pelo%20seu%20portfolio%20feito%20em%20ReactJS" target="_blank" rel="noopener noreferrer">
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
