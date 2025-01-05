import React, { useEffect } from 'react';
import './Techmodal.css';

const Techmodal = ({ isOpen, onClose, techDetails }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{techDetails.title}</h2>
        <p>{techDetails.description}</p>
        <hr></hr>
        <h3>Conhecimentos:</h3>
        <p className='experienceDescription'>{techDetails.experience}</p>
      </div>
    </div>
  );
};

export default Techmodal;