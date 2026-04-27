import { Cafe } from "./Cafe.js";
import { Drink } from "./Drink.js";
import { Tea } from "./Drink.js";
import { Coffee } from "./Drink.js";
import { MilkShake } from "./Drink.js";
import { Juice } from "./Drink.js";

const cafe = new Cafe('Ат-тур', 'ул. Зеленая, 2');
console.log(cafe.getCafeInfo());
const tea = new Tea('Mahmood', 'Средний', 70, 85 , 'черный', 'две ложки');
const coffee = new Coffee('Капучино', 'Большой', 170, 65, 'одна ложка', 'Коровье молоко', 'турка');
cafe.orderDrink(coffee);
cafe.orderDrink(tea);