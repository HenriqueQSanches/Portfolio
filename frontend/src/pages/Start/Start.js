import React, { useEffect, useState } from 'react';
import './Start.css';
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import NoticeModal from '../../components/NoticeModal';



const Start = () => {
  const [whatsOpen, setWhatsOpen] = useState(false);
  const handleWhatsappClick = (e) => {
    e.preventDefault();
    setWhatsOpen(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="start-container">
      <hr />
      <h1>
        Olá, eu sou <span className="highlight">H</span><span className="highlight-white">en</span><span className="highlight">ri</span><span className="highlight-white">que Sanches!</span><FaReact className='reactIcon' size={40}/>
      </h1>
      <p>
        Desenvolvedor Fullstack com mais de 2 anos de experiência na criação e implementação de sistemas web para diversos segmentos de mercado. Especializado em <span className="highlight">React</span>, <span className="highlight">Node.js</span>, <span className="highlight">TypeScript</span>, <span className="highlight">PHP</span> e <span className="highlight">Laravel</span>, com foco em soluções completas que otimizam processos e melhoram indicadores de negócio.
      </p>
      <p>
        Atuo no desenvolvimento de <span className="highlight">APIs RESTful</span>, automações e sistemas de gerenciamento, sempre comprometido com <span className="highlight">Clean Code</span>, <span className="highlight">SOLID</span> e boas práticas de desenvolvimento.
      </p>
      <p className="quote">
        "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge" - <span className='highlight'>Stephen Hawking</span>
        <span className="blink">|</span>
      </p>
      <hr />
      <span className="MeContate">Me Contate!</span>
      {/* REDES SOCIAIS */}
      <div className='socialMedia'>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/henrique-quitti-sanches-developer/" target="_blank" rel="noopener noreferrer">
          <GrLinkedin size={40} className='linkedinIcon' />
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/5511988078402?text=Te%20achei%20pelo%20seu%20portfolio%20feito%20em%20ReactJS" target="_blank" rel="noopener noreferrer" onClick={handleWhatsappClick}>
          <SiWhatsapp size={40} className='whatsappIcon' />
        </a>

        {/* Currículo */}
        <a href="https://drive.google.com/file/d/1UljvxjtsDT-VDyT3RofBwGEZn9YYG8E2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <IoNewspaperSharp size={40} className='curriculumIcon' />
        </a>

        {/* Github */}
        <a href="https://github.com/henriqueqsanches" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className='githubIcon'/>
        </a>
      </div>

      <NoticeModal
        open={whatsOpen}
        onClose={() => setWhatsOpen(false)}
        message="No momento, não estou fazendo uso do WhatsApp; por gentileza chamar via Linkedin ou pelo email: qiwitech.sanches@gmail.com"
      />
    </div>
  );
};

export default Start;
