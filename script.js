// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//

// TASK 1

function Tegs(name, action, nameOfAtt, actionAtt) {
    this.name = name;
    this.action = action;
    this.attribute = {nameOfAtt: nameOfAtt, actionAtt: actionAtt};

}

let newTagA = new Tegs('a', 'встановлює посилання',
    'accskey', 'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.');
console.log(newTagA);

 let newTegDiv = new Tegs('div', 'призначений для виділення фрагмента документа з метою зміни виду вмісту',
     'title', 'Додає підказку до вмісту.');
console.log(newTegDiv);

let newTagSpan = new Tegs('span', 'призначений для визначення малих елементів документа',
    'dir', 'Задає напрямок і відображення тексту - зліва направо або справа наліво');
console.log(newTagSpan);

let newTagForm = new Tegs('form', ' встановлює форму на веб-сторінці',
    'action', 'Адреса програми або документа, який обробляє дані форми');
console.log(newTagForm);

let tegs = {
    newTagForm,
    newTagSpan,
    newTegDiv,
    newTagA
};

console.log(tegs);

// TASK 2
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ] }


class Teg {
    constructor(name, action, nameOfAttribute, actionOfAttribute) {
        this.name = name;
        this.action = action;
        this.Attribute = {nameOfAttribute: nameOfAttribute, actionOfAttribute: actionOfAttribute};
        this.Attribute1 = {actionOfAttribute: actionOfAttribute, nameOfAttribute: nameOfAttribute};
    }
}

let tagInClassA = new Teg ('a', 'встановлює посилання', 'href',
    'Задає адресу документа, на який слід перейти', 'rel', 'Відносини між посилаються і поточним документами');
console.log(tagInClassA);

let tagInClassDiv = new Teg('div', 'призначений для виділення фрагмента документа з метою зміни виду вмісту',
    'align', 'Задає вирівнювання вмісту тега div',
    'title', 'Додає підказку до вмісту');
console.log(tagInClassDiv);

let tagInClassOption = new Teg('option', 'визначає окремі пункти списку, що створюється за допомогою select',
    'label', 'Вказівка ​​мітки пункту списку',
    'selected', 'Заздалегідь встановлює певний пункт списку виділеним');
console.log(tagInClassOption);
//

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// TASK 3
let driver = {
    name: 'Vasya',
    age: 20,
    skills : 2
};

let car = {
    model: 'Audi',
    maker: 'AudiMotors',
    year: 2020,
    maxSpeed: 300,
    formatEngine: 2000,
    drive: () => {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
    },
    info: () => {
        console.log(car);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed *= newSpeed;
        console.log(this.maxSpeed);
    },
    changeYear: function (newValue) {
        this.year *= newValue;
        console.log(this.year)
    },
    addDriver: function (driver) {
        let newCarObject = Object.assign(driver,car);
        console.log(newCarObject);
    }

};

car.info();
car.increaseMaxSpeed(30);
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість,об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

//TASK 4

function Car(model,maker,year,maxSpeed,formatEngine) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.formatEngine = formatEngine;
    this.drive = () => {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
    };
    this.info = () => {
        console.log(Car);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed *= newSpeed;
        console.log(this.maxSpeed);
    };
    this.changeYear = function (newValue) {
        this.year *= newValue;
        console.log(this.year);
    };
    this.addDriver = function (driver) {
        let newCarObject = Object.assign(driver,car);
        console.log(newCarObject);
    }
}

let buildCar = new Car('Tesla','TeslaMotors', 2019, 400, 30000);
console.log(buildCar);
buildCar.increaseMaxSpeed(2000);
buildCar.addDriver(driver);
//

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// TASK 5

class Cars {
    constructor(model,maker,year,maxSpeed,formatEngine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.formatEngine = formatEngine;
    };

    drive () {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
    };
    info () {
        console.log(Car);
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed *= newSpeed;
        console.log(this.maxSpeed);
    };
    changeYear (newValue) {
        this.year *= newValue;
        console.log(this.year);
    };
    addDriver (driver) {
        let newCarObject = Object.assign(driver,car);
        console.log(newCarObject);
    }

}

let buildClassCar = new Cars('Ferrari', 'ExorNV', 2020, 400, 3000);
console.log(buildClassCar);
buildClassCar.drive();
//

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// TASK 6

class SuperClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}
class Cinderella extends SuperClass {
    constructor(name,age,footSize) {
        super(name,age);
        this.footSize = footSize;
    }


}

let cinderela1 = new Cinderella ('olia', 20, 37);
let cinderela2 = new Cinderella ('Anna', 19, 33);
let cinderela3 = new Cinderella ('Ola', 18, 36);
let cinderela4 = new Cinderella ('Anastasia', 22, 35);
let cinderela5 = new Cinderella ('Nina', 23, 38);
let cinderela6 = new Cinderella ('Diana', 24, 39);
let cinderela7 = new Cinderella ('Vika', 21, 31);
let cinderela8 = new Cinderella ('Alina', 16, 32);
let cinderela9 = new Cinderella ('Elia', 17, 40);
let cinderela10 = new Cinderella ('Suzi', 20, 41);

let cinderellases = [cinderela1,cinderela2,cinderela3,cinderela4,
    cinderela5,cinderela6,cinderela7,cinderela8,cinderela9,cinderela10];
console.log(cinderellases);

class Prinсe extends SuperClass{
    constructor(name,age, footPrinсess) {
        super(name,age);
        this.footPrincess = footPrinсess;
    }
}

let princeCot1 = new Prinсe('Vasya', 19, 33);

for (const find of cinderellases) {
    if (princeCot1.footPrincess === find.footSize) {
        console.log('Prince ' + princeCot1.name + ' found ' +  find.name + 'princess');
    }
}
//

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// TASK 7

function  Cinderella2(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinder = new Cinderella2('Lilia', 19, 37);
let cinder2 = new Cinderella2 ('Anna', 19, 33);
let cinder3 = new Cinderella2 ('Ola', 18, 36);
let cinder4 = new Cinderella2 ('Anastasia', 22, 35);
let cinder5 = new Cinderella2 ('Nina', 23, 38);
let cinder6 = new Cinderella2 ('Diana', 24, 39);
let cinder7 = new Cinderella2 ('Vika', 21, 31);
let cinder8 = new Cinderella2 ('Alina', 16, 32);
let cinder9 = new Cinderella2 ('Elia', 17, 40);
let cinder0 = new Cinderella2 ('Suzi', 20, 41);

let cinderelas = [cinder0,cinder9,cinder8,cinder7,
    cinder6,cinder5,cinder4,cinder3,cinder2,cinder];

function Prince2 (name,age,footPrincess) {
    this.name = name;
    this.age = age;
    this.footPrincess = footPrincess;
}

let prince0 = new Prince2('Victor', 24, 35);

for (const cinderelaElement of cinderelas) {
    if(prince0.footPrincess === cinderelaElement.footSize){
        console.log('Prince ' + prince0.name + ' found ' +  cinderelaElement.name + ' princess. \n' +
            'And they lived happily ever after. End');
    }
}

// Happy END


    // Тобі треба зробити компютерний клуб з горою компів.
    // Має бути загальний клас компа від якого всі будуть наслідуватись.
    // Мають бути стаціонрані компи, ноутбуки, ультрабуки, моноблоки і так далі.
    // В деяких компів має бути метод який оновляє йому хартеристики. Деякі компи мають бути з жостики параметрами,
    // типу ультрабуків в яких ти не можеш нічого міняти.
    // На кожному компі можна пограти ігри.
    // Гра також має бути створена як клас з жанорм і симтемними вимогами.
    // Гру ти передаєш як аргумент в метод. І якшо гра занадто важка для компа,
    // ти маєш бачити шо її не запустити тут. Якшо вона 1 в 1 як комп, то має бути повідомлення,
    // що гра лагає. Якшо все чудово, то ти будеш грати в неї без проблем.
    // Ну і мають бути компи на яких заборонено грати ігри.
    // Наприклад моноблоки або сервери, які використовуються тільки для роботи



class Computer {
    constructor(name, year, company, power,) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.power = power;
    }

}
class Game {
    constructor(power,ganre,year) {
        this.power = power;
        this.ganre = ganre;
        this.year = year;
    }
}

// let game = new Game(3000,'shi-fi',2018);
// let gameNew = new Game(300,'horror',2010);
// let gamepad = new Game(10000,'strilialka', 2019);
let gameHard = new Game(30000,'GTA',2020);
//let arrayGame = [game,gameNew,gamepad,gameHard];
console.log(gameHard);


class Notebook  extends  Computer {
    constructor(name,year,company,power) {
        super(name,year,company,power);
    }
    changeBehavior(newYear,newCompany) {
        this.year += newYear;
        this.company = newCompany;
        console.log(this.year, newCompany);
    }
}

let notebookHp = new Notebook('HP',2019,'|h/p',3000);


class Ultabook extends  Computer {
    constructor(name,year,company,power) {
        super(name,year,company,power);
    }
}

let ultabook = new Ultabook('Asus',2020,'AsUs',400000);

class Monoblock  extends Computer {
    constructor(name,year,company,power) {
        super(name,year,company,power);
    }
}

let monoblock = new Monoblock('Apple',2017,'Apple',300);

class Laptop extends Computer {
    constructor(name,year,company,power) {
        super(name,year,company,power);
    }

}

let laptop = new Laptop('Acer', 2010,'Acer',10000);


let comps = [laptop,ultabook,notebookHp,monoblock];

for (const count of comps) {
    if (gameHard.power == count.power) {
        console.log('Система ' + count.name + ' лагає ти не можеш грати гру! або ноут для роботи');
    }
    else if (monoblock) {
        console.log('Ноут: ' + monoblock.name + ' для роботи!');
    }
    else if (gameHard.power > count.power) {
        console.log('Мала потужність у ' + count.name);
    }
     else if (gameHard < count.power){
        console.log('Грай на ' + count.name);
    }
}




