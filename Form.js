//ДЗ 10.5  реализовать класс для формы под названием Form

export class Form {
  constructor(formID){
    this.form = document.getElementById(formID);
  };

  getFormElements() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  };

  checkFormValidity() {
    if (!this.form.checkValidity()) {
      alert("Проверьте корректность заполнения полей!");
      return;
    };
  };

  resetFormData() {
    this.form.reset();
  }
};