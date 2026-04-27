// ДЗ11.4 Создать класс Cafe для заказа напитков

export class Cafe {
  constructor(name, address){
    this.name = name;
    this.address = address;
  };

  getCafeInfo(){
    return(`Кафе ${this.name}, Адрес: ${this.address}`);
  };

  orderDrink(drink){
    const preparationInfo = drink.prepareDrink();
    console.log(preparationInfo);
  };
};