import { usersPosts } from "./comments.js";


/* 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersAboveFive = numbers.filter(number => number >= 5);


/* 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.)
      проверить, есть ли в массиве какая-то определенная сущность. */

const computerDevices = [
  'Монитор',
  'Клавиатура',
  'Мышь',
  'Системный блок',
  'Камера'
];
const isContainsMouse = computerDevices.includes ('Мышь');


/* 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
      Два вышеуказанных массива с помощью этой функции перевернуть. */

function getReversedArray(array){
  return array.reverse();
}
getReversedArray(numbers);
getReversedArray(computerDevices);


/* 6. Внедрить переменную из comments.js */

usersPosts;


/* 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com" */

const commentsContainedEmail = usersPosts.filter(
  comment => (comment.email.includes('.com'))
);
console.log(commentsContainedEmail);


/* 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
      а те, у кого id больше 5, имели postId: 1 */

const postsByUsersId = usersPosts.filter(post => ({
  ...post, postId: post.id <= 5 ? 2 : 1
}));


/* 9. Перебрать массив, что бы объекты состояли только из айди и имени */

const postsWithIdAndName = usersPosts.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  }
});


/* 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
       если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

const addIsInvalid = usersPosts.map(comment => ({
  ...comment, Isinvalid: comment.body.length > 180
}));


/* 11. Используя метод массива reduce вывести массив почт */


const eMailsWithReduce = usersPosts.reduce(
  (acc, comment) => [...acc, comment.email],
  []
);


/* провернуть тоже самое с помощью метода map */

const emailsWithMap = usersPosts.map(comments => comments.email);


/* 12.перебрав массив с задания №11, привести его к строке при помощи методов toString() и join()*/

const emailsByToString = eMailsWithReduce.toString();
const emailsByJoin = eMailsWithReduce.join(", ");