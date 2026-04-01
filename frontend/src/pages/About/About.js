import React, { useEffect } from "react";
import './About.css';
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container" id="about-section">
      <br></br>
      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
      
      <h1>
        <FaRocket className="rocket-icon" />&nbsp;
        <span className="highlight-blue">Um pouco sobre mim!</span>
      </h1>

      <div className="about-cards-wrapper">
        {/* Card Experiência */}
        <div className="about-card">
          <div className="card-icon-wrapper">
            <MdWork className="card-icon" />
          </div>
          <h3 className="card-title">Experiência Profissional</h3>
          <p className="card-text">
            Desenvolvedor Fullstack com <span className="highlight">mais de 3 anos de experiência</span> em sistemas web, plataformas <span className="highlight">SaaS</span> e <span className="highlight">automação</span> para diferentes segmentos. Já entreguei soluções de <span className="highlight">gestão financeira</span>, aplicações para <span className="highlight">clínicas</span>, plataformas de atendimento com <span className="highlight">WhatsApp</span>, automações administrativas e sistemas de validação para eventos — sempre com foco em resultado e operação estável.
          </p>
        </div>

        {/* Card Metodologias */}
        <div className="about-card">
          <div className="card-icon-wrapper">
            <FaCode className="card-icon" />
          </div>
          <h3 className="card-title">Metodologias & Práticas</h3>
          <p className="card-text">
            Trabalho com <span className="highlight">metodologias ágeis</span>, code reviews e boas práticas de engenharia, com <span className="highlight">Clean Code</span>, <span className="highlight">SOLID</span> e arquitetura <span className="highlight">MVC</span>. Costumo conduzir projetos do conceito e requisitos até deploy e manutenção, priorizando código escalável e fácil de evoluir.
          </p>
        </div>

        {/* Card Habilidades */}
        <div className="about-card">
          <div className="card-icon-wrapper">
            <FaLightbulb className="card-icon" />
          </div>
          <h3 className="card-title">Versatilidade Técnica</h3>
          <p className="card-text">
            Stack principal alinhada ao mercado: <span className="highlight">TypeScript</span>, <span className="highlight">Node.js</span>, <span className="highlight">React</span>, <span className="highlight">PHP</span>, <span className="highlight">Laravel</span>, <span className="highlight">Python</span>, <span className="highlight">PostgreSQL</span>, <span className="highlight">MySQL</span> e <span className="highlight">APIs REST</span>. Versatilidade para atuar em <span className="highlight">frontend</span>, <span className="highlight">backend</span>, integrações e automação conforme a necessidade do produto.
          </p>
        </div>

        {/* Card Hobbies */}
        <div className="about-card about-hobbies-card">
          <div className="card-icon-wrapper">
            <FaUsers className="card-icon" />
          </div>
          <h3 className="card-title">Além do Código</h3>
          <p className="card-text">
            Fascinado por <span className="highlight">livros de fantasia</span>, <span className="highlight">astronomia</span>, <span className="highlight">astrofísica</span> e o <span className="highlight">estudo de linguagens de programação</span>. Adoro <span className="highlight">jogos</span>, <span className="highlight">filmes</span> e <span className="highlight">séries</span> — sempre buscando inspiração em histórias e descobertas.
          </p>
        </div>
      </div>

      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
    </div>
  );
};

export default About;
