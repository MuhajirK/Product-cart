/* 3. Создайте объект на основе ваших данных. */

const person = {
  firstname: "Мухаджир",
  lastName: "Карниев",
  mail: "Karniev@yandex.ru",
  job: "ООО ПИИТ",
  position: "Консультант 1С",
  hobby: "Frontend developer student",
  age: "42",
  country: "Россия",
  city: "Астрахань",
  gender: "Мужской"
};


/* 4. Создайте объект, который будет хранить данные об автомобиле 
Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. */

const car = {
  brand: "Ford",
  model: "F-150",
  year: 2009,
  color: "серебристый",
  transmission: "ручная",
};
car.owner = person;


/* 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
 Она проверяет, есть ли в объекте свойство "максимальная скорость" */

const addMaxSpeed = carObject => {
  if (carObject.maxSpeed === undefined) {
    carObject.maxSpeed = 250;
  };
};
addMaxSpeed(car);


/* 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта */

function getObjectValue(objectName, objectValue) {
  return(objectName[objectValue]);
};
getObjectValue(car, 'brand');


/* 7. Создать массив, который содержит названия продуктов (просто строки) */

const products = ['творог','молоко','йогурт','сметана'];


/* 8. Создать массив, состоящий из объектов, где объект представляет собой книгу и добавить еще одну книгу в конец списка.*/

const books = [
  {
    name: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    releaseDate: 1966,
    coverColor: "Тёмно‑зелёная",
    genre: "Роман"
  },
  {
    name: "Властелин колец",
    author: "Джон Р. Р. Толкин",
    releaseDate: 1954,
    coverColor: "Тёмно‑зелёная",
    genre: "Фэнтези"
  },
  {
    name: "Маленький принц",
    author: "Антуан де Сент‑Экзюпери",
    releaseDate: 1943,
    coverColor: "Желтая",
    genre: "Сказка"
  },
  {
    name: "Три товарища",
    author: "Эрих Мария Ремарк",
    releaseDate: 1936,
    coverColor: "Серая",
    genre: "Роман"
  }
];
books.push({
  name: "Дюна",
  author: "Фрэнк Герберт",
  releaseDate: 1965,
  coverColor: "Оранжевая",
  genre: "Научная фантастика"
});


/* 9. Создать еще один массив, состоящих из книг, но относящийся к определенной вселенной и объединить эти два массива в один */

const universeTolkin = [
  {
    name: "Братство кольца",
    author: "Джон Р. Р. Толкин",
    releaseDate: 1986,
    coverColor: "Тёмно‑зелёная",
    genre: "Фэнтези"
  },
  {
    name: "Две крепости",
    author: "Джон Р. Р. Толкин",
    releaseDate: 2008,
    coverColor: "Серая",
    genre: "Фэнтези"
  },
  {
    name: "Возвращение короля",
    author: "Джон Р. Р. Толкин",
    releaseDate: 2001,
    coverColor: "Желтая",
    genre: "Фэнтези"
  }
];
const combineBooksArray = [...books, ...universeTolkin];


/* 10. Используя метод массива — map написать функцию, которая принимает массив сущностей с задания №9.
Добавляем новое свойство для объекта "isRare (это редкий)" в зависимости от года выпуска книги */

function getRareProperty(allBooks) {
  return allBooks.map(book => {
    const year = book.releaseDate;
    year < 2000 ? isRare = true : isRare = false;
    return {...book, isRare};
  });
};