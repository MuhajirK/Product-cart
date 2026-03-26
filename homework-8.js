import { productCards } from "./product-cards.js";


/* 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание */

const productsDescriptionsByTitle = productCards.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, []);


/* 5. Реализовать функцию, которая при старте страницы выводит сообщение для ввода,
       в зависимости от введенного количества выводятся карточки,  */

const productContainer = document.querySelector('.product-cart-wrapper');
const productTemplate = document.getElementById('product-card-template');
function getCardCount() {
  let userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  let resaultNumber = Number(userInput);
  if (isNaN(resaultNumber) || resaultNumber < 1 || resaultNumber > 5) {
      alert('Вы ввели неверные данные, введите целое число от 1 до 5');
      return getCardCount();
    };
  return resaultNumber;
};


/* 3, 5. Реализовать функцию создания шаблона для вывода продуктовых карточек */

const productsToRender = productCards.slice(0, getCardCount());
function renderProductCards(products) {
  products.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.product-cart__image').src = "images/" + product.image + ".png";
  productClone.querySelector('.product-cart__image').alt = product.title;
  productClone.querySelector('.product-cart__title').textContent = product.title;
  productClone.querySelector('.product-cart__descr').textContent = product.description;
  productClone.querySelector('.product-cart__price-value').textContent = `${product.price} ₽`;
  const compositionList = productClone.querySelector('.product-cart__composition');
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.className = 'product-cart__item';
        li.textContent = item;
      compositionList.appendChild(li);
    });
    productContainer.appendChild(productClone);
  });
}; 
renderProductCards(productsToRender);