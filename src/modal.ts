import { ModalProps } from "./types";

export const Modal = ({ message, title }: ModalProps) => {
  const modalStyles = `
    :root {
      --modal-react-komponent-bg-color: #fefefe;
      --modal-react-komponent-close-btn-bg-color: #E1E9FF;
      --modal-react-komponent-close-btn-border-color: #B8BAF8;
      --modal-react-komponent-close-btn-hover-bg-color: #C1D0FF;
      --modal-react-komponent-shadow-color: rgba(0, 0, 0, 0.2);
      --modal-react-komponent-text-button-color: #5B5BD6;
    }

    .modal-react-komponent-overlay {
      background-color: var(--modal-react-komponent-shadow-color);
      backdrop-filter: blur(5px);
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
    }

    .modal-react-komponent {
      background-color: var(--modal-react-komponent-bg-color);
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      font-family: "Montserrat", sans-serif;
      justify-content: space-between;
      left: 50%;
      min-height: 150px;
      min-width: 300px;
      padding: 20px;
      position: fixed;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
    }

    .modal-react-komponent-title {
      font-size: 18px;
      margin-top: 0;
    }

    .modal-react-komponent-message {
      font-size: 14px;
      margin-bottom: 0;
    }

    .modal-react-komponent-close-btn {
      background-color: var(--modal-react-komponent-close-btn-bg-color);
      border-radius: 4px;
      border: 1px solid var(--modal-react-komponent-close-btn-border-color);
      color: var(--modal-react-komponent-text-button-color);
      cursor: pointer;
      font-size: 12px;
      margin-left: auto;
      margin-top: 20px;
      padding: 8px 16px;
      transition: background-color 0.5s;
      width: fit-content;
    }

    .modal-react-komponent-close-btn:hover {
      background-color: var(--modal-react-komponent-close-btn-hover-bg-color);
    }

    @media (max-width: 500px) {
      .modal-react-komponent {
        min-width: 250px;
      }
    }
  `;

  const openModal = () => {
    // Créer une balise style
    const styleElement = document.createElement('style');

    // Ajouter le CSS au contenu de la balise style
    styleElement.textContent = modalStyles;

    // Ajouter la balise style au head du document
    document.head.appendChild(styleElement);

    // Création de l'overlay
    const overlay = document.createElement('div');
    overlay.classList.add('modal-react-komponent-overlay');
    document.body.appendChild(overlay);

    // Création du modal
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

    // Fonction pour fermer le modal
    const closeModalHandler = () => {
      modal.remove();
      overlay.remove();
    };

    // Ajout d'un écouteur d'événement pour le bouton de fermeture
    const close = modal.querySelector('.modal-react-komponent-close-btn');
    close?.addEventListener('click', closeModalHandler);

    // Ajout d'un écouteur d'événement pour fermer le modal lors du clic sur l'overlay
    overlay.addEventListener('click', () => {
      modal.remove();
      overlay.remove();
    });
  };

  return { openModal };
};