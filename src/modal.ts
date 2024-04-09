import { ModalProps } from "./types";

export function Modal({ message }: ModalProps) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);
    const close = modal.querySelector('.close');
    close?.addEventListener('click', () => modal.remove());
}