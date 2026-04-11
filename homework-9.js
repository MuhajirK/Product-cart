/*4. По нажатию на "Подписаться" выводить в консоль лог объект в виде:  {email: 'введенная почта'} */

const emailForm = document.querySelector(".subscribe-form");
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  emailForm.reset();
});


/*5, 6 открываем модальное окно */

const modal = document.querySelector(".modal");
const registrationBtn = document.getElementById("registration-button");
const closeBtn = document.querySelector(".close-button");

const openForm = registrationBtn.addEventListener('click', ()=> {
  modal.classList.add("modal-show");
});

const closeForm = closeBtn.addEventListener('click', ()=> {
  modal.classList.remove("modal-show");
});

const passwordInput= document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const regForm = document.querySelector(".registration-form");
let user;

regForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  const formValues = Object.fromEntries(formData.entries());
  if (!regForm.checkValidity()) {
    alert("Проверьте корректность заполнения полей!");
    return;
  };
  console.log(formValues["confirm-password"], formValues.password);
  if (formValues["confirm-password"] === formValues.password) {
    modal.classList.remove("modal-show");
    currentDate = new Date().toLocaleDateString();
    const { ...userData} = formValues;
    user = userData;
    console.log(user);
    regForm.reset();
  }
  else {
    alert ("Регистрация отклонена, введенный пароль не совпадает, повторите ввод пароля");
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  };

});



