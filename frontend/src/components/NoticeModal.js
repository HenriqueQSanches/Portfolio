import React from 'react';
import './NoticeModal.css';
import { FaInfoCircle } from 'react-icons/fa';

const NoticeModal = ({ open, onClose, message }) => {
  if (!open) return null;

  const linkedinUrl = 'https://www.linkedin.com/in/henrique-quitti-sanches-developer/';

  return (
    <div
      className="notice-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      onClick={onClose}
    >
      <div className="notice-modal" onClick={(e) => e.stopPropagation()}>
        <div className="notice-modal-header">
          <FaInfoCircle className="notice-modal-icon" />
          <h3 id="notice-modal-title">Informação</h3>
        </div>

        <p className="notice-modal-message">
          {message}
        </p>

        <div className="notice-modal-actions">
          <a className="btn btn-linkedin" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            Abrir LinkedIn
          </a>
          <button className="btn btn-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;


