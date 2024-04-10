import { ModalProps } from "./types";
import './modal.css';

export function Modal({ message, title }: ModalProps) {
  const openModal = () => {
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

    const closeModalHandler = () => {
      modal.remove();
      overlay.remove();
    };

    const close = modal.querySelector('.modal-react-komponent-close-btn');
    close?.addEventListener('click', closeModalHandler);

    overlay.addEventListener('click', () => {
      modal.remove();
      overlay.remove();
    });
  };

  return { openModal };
}
