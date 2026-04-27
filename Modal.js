// ДЗ 10.4 Создать класс Modal
// ДЗ 12 Исправление кода, переиспользование кнопки для закрытия.

export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.openButton = document.getElementById(buttonId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen();
    this.#closeModalByCloseButton();
  };

  isModalFormOpen() {
    return this.modal.classList.contains('modal-form-showed');
  };

  openModal() {
    this.modal.classList.add('modal-form-showed');
    this.overlay.classList.add('overlay-showed');
    if (this.shouldCloseOnOverlay){
      this.overlay.addEventListener('click', this.#handleOnClickOverlay);
    };
  };

  #initOpen() {
    this.openButton.addEventListener('click', () => {
      this.openModal();
    });
  };

  closeModal() {
    this.modal.classList.remove('modal-form-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.#handleOnClickOverlay);
    }
  };

  #handleOnClickOverlay = () => {
      this.closeModal();
    };

  #closeModalByCloseButton() {
    const closeBtn = this.modal.querySelector('#close-button');
    closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
  };
};