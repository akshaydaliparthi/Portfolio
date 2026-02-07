import React from 'react';
import './BookDemoModal.css';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title gradient-text">Book a Demo</h2>
        <p className="modal-subtitle">Choose your preferred way to connect</p>
        
        <div className="contact-options">
          <a 
            href="mailto:akshaydaliparthi05@gmail.com?subject=Book%20a%20Demo%20Session"
            className="contact-option"
          >
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email Me</h3>
              <p>akshaydaliparthi05@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+918897886704"
            className="contact-option"
          >
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h3>Call Me</h3>
              <p>+91 8897886704</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;
