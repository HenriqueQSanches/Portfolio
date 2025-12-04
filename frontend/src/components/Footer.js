import React, { useState } from 'react';
import './Footer.css';
import { FaHeart, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import NoticeModal from './NoticeModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [whatsOpen, setWhatsOpen] = useState(false);
  const handleWhatsappClick = (e) => {
    e.preventDefault();
    setWhatsOpen(true);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Main Section */}
        <div className="footer-main">
          <h2 className="footer-title">
            Vamos criar algo <span className="highlight">incrível</span> juntos?
          </h2>
          <p className="footer-subtitle">
            Estou sempre aberto a novos projetos, oportunidades e colaborações.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <a href="mailto:qiwitech.sanches@gmail.com" className="footer-email">
            <FaEnvelope /> qiwitech.sanches@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a 
            href="https://www.linkedin.com/in/henrique-quitti-sanches-developer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/henriqueqsanches" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://wa.me/5511988078402?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link whatsapp"
            aria-label="WhatsApp"
            onClick={handleWhatsappClick}
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Henrique Sanches. Todos os direitos reservados.
          </p>
          <p className="footer-made-with">
            Feito com <FaHeart className="heart-icon" /> por Henrique S.
          </p>
        </div>
      </div>

      <NoticeModal
        open={whatsOpen}
        onClose={() => setWhatsOpen(false)}
        message="No momento, não estou fazendo uso do WhatsApp; por gentileza chamar via Linkedin ou pelo email: qiwitech.sanches@gmail.com"
      />
    </footer>
  );
};

export default Footer;

