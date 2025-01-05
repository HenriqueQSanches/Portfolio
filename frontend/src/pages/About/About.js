import React, { useEffect } from "react";
import './About.css';
import { FaRocket } from "react-icons/fa";


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
      <p className="about-text">
        Acredito que a essência do trabalho de um desenvolvedor está em fornecer soluções e aprimorar processos com as melhores ferramentas tecnológicas disponíveis. Embora eu tenha afinidade com algumas linguagens específicas, destaco-me pela versatilidade em adaptar-me a diferentes linguagens e ambientes, sempre com foco em eficiência e inovação.
      </p>
      <hr />
      <p className="about-text">
        Minha principal habilidade é a capacidade de entender profundamente os problemas e identificar soluções tecnológicas adequadas, seja em FrontEnd, BackEnd, Automação de Tarefas ou Análise de Dados.
      </p>
      <p className="about-hobbies">
        Fora do trabalho, sou fascinado por <span className="highlight">livros de fantasia</span>, <span className="highlight">astronomia</span>, <span className="highlight">astrofísica</span>, <span className="highlight">tecnologia</span> e o <span className="highlight">estudo de linguagens de programação</span>. Também adoro <span className="highlight">jogos</span>, <span className="highlight">filmes</span> e <span className="highlight">séries</span> — sempre buscando inspiração em histórias e descobertas.
      </p>
      <hr style={{ width: '80%', height: '3px', backgroundColor: '#CFA2E0', border: 'none', margin: '20px auto' }} />
    </div>
  );
};

export default About;
