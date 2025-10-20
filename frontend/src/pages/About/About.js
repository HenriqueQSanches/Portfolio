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
            Desenvolvedor Fullstack com <span className="highlight">mais de 2 anos de experiência</span> na criação de soluções tecnológicas completas. Implementei sistemas de <span className="highlight">gerenciamento financeiro</span>, aplicações para <span className="highlight">clínicas</span>, <span className="highlight">automações de processos</span> e soluções que resultaram em otimização operacional.
          </p>
        </div>

        {/* Card Metodologias */}
        <div className="about-card">
          <div className="card-icon-wrapper">
            <FaCode className="card-icon" />
          </div>
          <h3 className="card-title">Metodologias & Práticas</h3>
          <p className="card-text">
            Trabalho com <span className="highlight">metodologias ágeis</span> e desenvolvimento orientado a testes, sempre comprometido com <span className="highlight">Clean Code</span> e <span className="highlight">SOLID</span>. Capacidade de trabalhar em projetos completos do conceito à implementação, garantindo soluções eficientes e escaláveis.
          </p>
        </div>

        {/* Card Habilidades */}
        <div className="about-card">
          <div className="card-icon-wrapper">
            <FaLightbulb className="card-icon" />
          </div>
          <h3 className="card-title">Versatilidade Técnica</h3>
          <p className="card-text">
            Versatilidade em adaptar-me a diferentes linguagens e ambientes, com foco em entender profundamente os problemas e identificar as melhores soluções, seja em <span className="highlight">Frontend</span>, <span className="highlight">Backend</span>, <span className="highlight">APIs RESTful</span> ou <span className="highlight">Automação</span>.
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
