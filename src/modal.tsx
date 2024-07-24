import { ModalProps } from "./types";
import React, { ReactElement } from "react";

export const Modal: React.FC<ModalProps> = ({
  message,
  title,
  buttonText,
  isOpen,
  toggleOpen,
}: ModalProps): ReactElement => {
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
      gap: 30px;
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

  return (
    <>
      {isOpen && (
        <>
          <style>{modalStyles}</style>
          <div
            className="modal-react-komponent-overlay"
            onClick={() => toggleOpen()}
          ></div>
          <div className="modal-react-komponent">
            <div className="modal-react-komponent-content">
              <h2 className="modal-react-komponent-title">{title}</h2>
              <p className="modal-react-komponent-message">{message}</p>
            </div>
            <button
              className="modal-react-komponent-close-btn"
              onClick={() => toggleOpen()}
            >
              {buttonText}
            </button>
          </div>
        </>
      )}
    </>
  );
};
