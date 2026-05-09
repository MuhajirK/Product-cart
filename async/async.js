// ДЗ 13. 
const STORAGE_KEY = 'usersData';
const usersContainer = document.querySelector('.user-cards-wrapper');
const usersTemplate = document.getElementById('user-cards-template');
const removeAllCardsBtn = document.getElementById('remove-all-cards');
const removeCardBtn = document.getElementById('remove-card');
const getCardsBtn = document.getElementById('get-cards');

removeAllCardsBtn.addEventListener('click', () => {
  removeAllUserCards();
});

removeCardBtn.addEventListener('click', () => {
  removeUserCard();
});

getCardsBtn.addEventListener('click', () => {
  getUserCards();
});

function setLoadDisplayStyle(display){
  const statusElement = document.getElementById('status-message');
  statusElement.style.display = display;
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


// Заполнение карточек пользователей

async function renderUsers(users) {
  setLoadDisplayStyle('none');
  users.forEach(user => {
    const userClone = usersTemplate.content.cloneNode(true);
    userClone.querySelector('.user-id').textContent = `id: ${user.id}`; 
    userClone.querySelector('.user-name').textContent = `Имя: ${user.name}`;
    userClone.querySelector('.user-surname').textContent = `Фамилия: ${user.surname}`;
    userClone.querySelector('.user-age').textContent = `${user.age} лет`;
    userClone.querySelector('.user-email').textContent = `email:  ${user.email}`;
    usersContainer.appendChild(userClone);
  });
};


// Проверка данных в localStorage и вывод данных с задержкой

async function checkAndLoadData() {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData !== null) {
    console.log('Данные найдены в localStorage');
    const users = JSON.parse(storedData);
    renderUsers(users);
  }
  else {
    console.log('Данных нет в localStorage, выполняем запрос...');

    try {

      await delay(1500);

      const response = await fetch('users-data.json');
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      };

      const users = await response.json();
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      console.log('Данные сохранены в localStorage');

      renderUsers(users);

    } catch (error) {
        console.log('Ошибка при загрузке данных:', error);
    };
  };
};

document.addEventListener('DOMContentLoaded', () => {
  checkAndLoadData();
});

function getUsersCardCount() {
  const cards = usersContainer.getElementsByClassName('user-card');
  return cards.length;
};

function getInputCardCnt() {
  let userInput = prompt('Выберите номер карточки пользователя');
  let cardNumber = Number(userInput);
  if (isNaN(cardNumber) || cardNumber > getUsersCardCount() || cardNumber <= 0) {
    alert('Карточки пользователя под таким номером не существует, повторите ввод');
    return null;
  };
  return cardNumber;
};

function removeAllUserCards() {
  if (getUsersCardCount() > 0){
  removeUserCardsfromDisplay();
  clearLocalStorage();
  }
  else{
    console.log('Карточек пользователей не обнаружено');
  };
};

function removeUserCardsfromDisplay() {
  if (getUsersCardCount() > 0){
    if (!usersContainer) {
      console.log('Контейнеры для карточек пользователей не найден');
      return;
    };
    const cards = usersContainer.getElementsByClassName('user-card');
    [...cards].forEach(card => card.remove());
  };
};

function clearLocalStorage(){ 
  localStorage.removeItem(STORAGE_KEY);
  console.log('Все карточки пользователей удалены, данные из localStorage очищены');
};

async function removeUserCard(){
  if (!usersContainer) {
    console.error('Контейнер для карточек пользователей не найден');
    return;
  };
  const cardValue = getInputCardCnt();
  if (cardValue === null){
    console.error('Контейнер для карточек пользователей не найден');
    return;
  }; 
  const cards = [...usersContainer.getElementsByClassName('user-card')];
  const choisedCard = cards[cardValue-1];
  const idElement = choisedCard.querySelector('.user-id');
  const idValueToRemoveNum = Number(idElement.textContent.replace('id: ', '').trim());
  console.log('Карточка удаляется...');
  await delay(1000);
  choisedCard.remove();
  
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const users = JSON.parse(storedData);
    const updatedUsers = users.filter(user => user.id !== idValueToRemoveNum);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
    console.log('localStorage обновлён: пользователь с ID', idValueToRemoveNum, 'удален');
  } catch (error) {
    console.error('Ошибка при обновлении localStorage:', error);
  };
};

function getUserCards(){
  removeUserCardsfromDisplay();
  setLoadDisplayStyle('block');
  checkAndLoadData();
};