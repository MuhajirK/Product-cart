// Объявляем переменные для обращения к элементам 
const recolorFirstCartButton = document.getElementById('recolor-first-cart-button');
const recolorAllCartsButton = document.getElementById('recolor-all-carts-button');
const firstProductCart = document.querySelector('.product-cart');
const productCarts = document.querySelectorAll('.product-cart');

// Объявляем переменные, присваиваем цвета
const blueHashColor = '#0000FF';
const greenHashColor = '#15d312';

// Перекрашиваем первую карточку в синий цвет
recolorFirstCartButton.addEventListener('click', () => {
  firstProductCart.style.backgroundColor = blueHashColor;
});

// Перекрашиваем все карточки в зеленый цвет
recolorAllCartsButton.addEventListener('click', () => {
  productCarts.forEach(
    card => card.style.backgroundColor = greenHashColor
  );
});

// Переход на сайт Google
const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

// Объявление функции для переходана сайт Google
function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer) {
    window.open("https://Google.com");
  } else {
    console.log('Пользователь отменил переход на сайт Google');
  }
}

// Вывод текста контента в косоль
const textTitle = document.querySelector('.choice-product');
textTitle.addEventListener('mouseover', () => {
  console.log(textTitle.textContent);
});

// Перекраска кнопки
const recolorButton = document.getElementById('recolor-button');
recolorButton.addEventListener('click', () => {
  recolorButton.classList.toggle('aqua-color-button');
});