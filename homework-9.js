import { Form } from "./Form.js";
import { Modal } from "./Modal.js";


// ДЗ 10.3 Создать структуру на мой выбор

class ComputerDevices {
  constructor(model, processor, memorySize, diskSpace){
    this.model = model;
    this.processor = processor;
    this.memorySize = memorySize;
    this.diskSpace = diskSpace;
  };
};

class SystemBlock extends ComputerDevices {
  constructor(model, processor, memorySize, diskSpace, formFactor ){
    super (model, processor, memorySize, diskSpace);
    this.formFactor = formFactor;
  };
  sale(){
    return (`Системный блок ${this.model} продан!`);
  }
};

class Notebook extends ComputerDevices {
  constructor(model, processor, memorySize, diskSpace, battery){
    super (model, processor, memorySize, diskSpace);
    this.battery = battery;
  };
  switchOn(){
    return (`Ноутбук ${this.model} включен!`);
  }
};

const  pcMiniTowerI7 = new SystemBlock('AM PC Mini-Tower i7-14700kf', 'Intel Core i7-14700kF', '32 ГБ DDR5', 'SSD M2 2000 ГБ', 'Mini-Tower');
pcMiniTowerI7.sale();
const macBookAir = new Notebook('Apple MacBook Air 15.3"', 'Apple M2', '8 ГБ LPDDR', 'SSD 512 ГБ', 'Литий-полимерный, ёмкость 66,5 Вт·ч');
macBookAir.switchOn();



/* ДЗ 10 пункты 4 и 5. Переделать код, используюя классы Modal и Form
   По нажатию на "Подписаться" выводить в консоль лог объект в виде:  {email: 'введенная почта'} */

const emailForm = new Form("subscribe-form");
emailForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailForm.checkFormValidity();
  const data = emailForm.getFormElements();
  console.log(data);
  emailForm.resetFormData();
});

const modalWindow = document.getElementById("modal");
const registrationBtn = document.getElementById("registration-button");
const closeBtn = document.getElementById("close-button");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
let user;

const modal = new Modal(modalWindow, closeBtn);
registrationBtn.addEventListener('click', ()=> {
  modal.openModal();
});

closeBtn.addEventListener('click', ()=> {
  if (modal.isModalFormOpen){
    modal.closeModal();
  }
});

const registrationForm = new Form("registration-form");
registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  registrationForm.checkFormValidity();
  const formElements = registrationForm.getFormElements();
  if (formElements.password === formElements["confirm-password"]) {
    registrationForm.currentDate = new Date().toLocaleDateString();
    const {...userData} = formElements;
    user = {...userData};
    delete user["confirm-password"]; 
    registrationForm.user = user;
    console.log(registrationForm.user);
    registrationForm.resetFormData();
    modal.closeModal();
  }
  else {
    alert ("Регистрация отклонена, введенный пароль не совпадает, повторите ввод пароля");
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  };
});