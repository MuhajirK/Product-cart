
const STORAGE_KEY = 'usersData';
const usersContainer = document.querySelector('.user-cards-wrapper');
const usersTemplate = document.getElementById('user-cards-template');

function updateStatus() {
  const statusElement = document.getElementById('status-message');
  if (statusElement) {
    if (statusElement.style.display === 'none') {
      statusElement.style.display = 'inline-block';
    }
  }
}

function getLoadElement(display){
  const statusElement = document.getElementById('status-message');
  statusElement.style.display = display;
};

async function renderUsers(users) {
  getLoadElement('none');
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

      const promise = await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

      const response = await fetch('users-data.json');
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      };

      const data = await response.json();
      const users = data.users;
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      console.log('Данные сохранены в localStorage');

      renderUsers(users);

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    };
  };
};

document.addEventListener('DOMContentLoaded', () => {
  checkAndLoadData();
});

const removeAllCardsBtn = document.getElementById('remove-all-cards');
removeAllCardsBtn.addEventListener('click', () => {
  removeAllUserCards();
});

const removeCardBtn = document.getElementById('remove-card');
removeCardBtn.addEventListener('click', () => {
  removeUserCard();
});

const getCardsBtn = document.getElementById('get-cards');
getCardsBtn.addEventListener('click', () => {
  getUserCards();
});

function getUsersCardCount() {
  const cards = usersContainer.getElementsByClassName('user-card');
  return cards.length;
};

function getUserCardCnt() {
  let userInput = prompt('Выберите номер карточки пользователя');
  let cardCount = Number(userInput);
  let usersCardCnt = getUsersCardCount();
  if (isNaN(cardCount) || cardCount > usersCardCnt || cardCount <= 0) {
    alert('Карточки пользователя под таким номером не существует, повторите ввод');
  };
  return cardCount;
};

function removeAllUserCards() {
  if (!usersContainer) {
    console.error('Контейнер для карточек пользователей не найден');
    return;
  };

  const cards = usersContainer.getElementsByClassName('user-card');
  [...cards].forEach(card => card.remove());

  localStorage.removeItem(STORAGE_KEY);
  console.log('Все карточки пользователей удалены, данные из localStorage очищены');
};

function removeUserCardsFromDisplay() {
  if (!usersContainer) {
    console.error('Контейнер для карточек пользователей не найден');
    return;
  };

  const cards = usersContainer.getElementsByClassName('user-card');
  [...cards].forEach(card => card.remove());
};

async function removeUserCard() {
  if (!usersContainer) {
    console.error('Контейнер для карточек пользователей не найден');
    return;
  };

  const cards = [...usersContainer.getElementsByClassName('user-card')];
  const choisedCard = cards[getUserCardCnt()-1];
  const idElement = choisedCard.querySelector('.user-id');
  const idValueToRemove = idElement.textContent.replace('id: ', '').trim();
  const idValueToRemoveNum = Number(idValueToRemove);
  
  console.log('Карточка удаляется...')
  choisedCard.classList.add('removing');
  choisedCard.style.opacity = '0.5';
  choisedCard.style.transform = 'scale(0.95)';
  
  const promise = await new Promise(resolve => {
    setTimeout(resolve, 1500);
  });
  
  await choisedCard.remove();
  
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const users = await JSON.parse(storedData);
    const updatedUsers = users.filter(user => user.id !== idValueToRemoveNum);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUsers));
    console.log('localStorage обновлён: пользователь с ID', idValueToRemoveNum, 'удален');
  } catch (error) {
    console.log('Ошибка при обновлении localStorage:', error);
  };
};

function getUserCards(){
  removeUserCardsFromDisplay();
  getLoadElement('block');
  checkAndLoadData();
};