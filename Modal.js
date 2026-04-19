// ДЗ 10.4 Создать класс Modal

export class Modal {
  constructor(modalID, closeButtonID){
    this.modalID = modalID;
    this.closeButtonID = closeButtonID;
  }

  isModalFormOpen(){
    return this.modalID.style.display === 'flex';
  };

  openModal(){
    this.modalID.style.display = 'flex';
  };

  closeModal(){
    this.modalID.style.display = 'none';
  };

  closeModalByCloseIcon(){
    this.closeButtonID.addEventlistener('click', () => {
      this.closeModalForm();
    })
  }
};