// ДЗ11.3 Создать класс Drink и его подклассы

export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo(){
    return (`${this.name}, размер: ${this.size}, цена: ${this.price}, температура: ${this.#temperature}`);
  };

  getTemperature(){
    return this.#temperature;
  };

  setTemperature(newTemp){
    this.#temperature = newTemp;
  };

  #makeDrink(){
    const info = this.getInfo();
    return (`Приготовить напиток: ${info})`);
  };

  serveDrink(){
    return this.#makeDrink();
  };
};

export class Tea extends Drink {
  constructor(name, size, price, temperature, type, sugarLevel){
    super(name, size, price, temperature);
    this.type = type;
    this.sugarLevel = sugarLevel;
  };
  prepareDrink() {
    return this.serveDrink();
  };
};

export class Coffee extends Drink {
  constructor(name, size, price, temperature, sugarLevel, milkType, preparationMethod){
    super(name, size, price, temperature);
    this.sugarLevel = sugarLevel;
    this.milkType = milkType;
    this.preparationMethod = preparationMethod;
  };
  prepareDrink(){
    return this.serveDrink();
  };
};

export class MilkShake extends Drink {
  constructor(name, size, price, temperature, consistency, flavorings ){
    super(name, size, price, temperature);
    this.consistency = consistency;
    this.flavorings = flavorings;
  };
  prepareDrink() {
    return this.serveDrink();
  };
};

export class Juice extends Drink {
  constructor(name, size, price, temperature, type, rawMaterias){
    super(name, size, price, temperature);
    this.type = type;
    this.rawMaterias = rawMaterias;
  };
  prepareDrink() {
    return this.serveDrink();
  };
};