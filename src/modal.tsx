import * as React from 'react';
import { ModalProps } from "./types";
import './modal.css';

export default function Modal({ message, title }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  React.useEffect(() => {
    if (isModalOpen) {
      const overlay = document.createElement('div');
      overlay.classList.add('modal-react-komponent-overlay');
      document.body.appendChild(overlay);

      const modal = document.createElement('div');
      modal.classList.add('modal-react-komponent');
      modal.innerHTML = `
        <div class="modal-react-komponent-content">
          <h2 class="modal-react-komponent-title">${title}</h2>
          <p class="modal-react-komponent-message">${message}</p>
        </div>
        <button class="modal-react-komponent-close-btn">Fermer</button>
      `;
      document.body.appendChild(modal);

      const close = modal.querySelector('.modal-react-komponent-close-btn');
      
      const closeModalHandler = () => {
        modal.remove();
        overlay.remove();
        closeModal();
      };
      close?.addEventListener('click', closeModalHandler);

      overlay.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
        closeModal();
      });

      return () => {
        modal.remove();
        overlay.remove();
      };
    }
  }, [isModalOpen, message, title]);

  return { openModal };
}
