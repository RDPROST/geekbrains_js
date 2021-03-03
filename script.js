"use strict";

//1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let transform = (num) => {
    const objNum = {};
    if (num < 0) {
        return num + " меньше заданного диапозона чисел";
    } else if (num > 999) {
        console.log(num + " больше заданного диапозона чисел");
        return objNum;
    } else {
        num = num + '';
        let arrNum = num.split('');
        while (arrNum.length < 3) {
            arrNum.unshift("0");
        }
        objNum['единицы'] = +arrNum[2];
        objNum['десятки'] = +arrNum[1];
        objNum['сотни'] = +arrNum[0];
        return objNum;
    }
}

// transform(245);


//Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

const cart = {
    items: [
        {
            name: "Футболка",
            size: "XS",
            price: 550
        },
        {
            name: "Майка",
            size: "XXS",
            price: 890
        },
        {
            name: "Брюки",
            size: "XL",
            price: 950
        },
        {
            name: "Свитшот",
            size: "XXL",
            price: 1550
        },
        {
            name: "Рубашка",
            size: "XXS",
            price: 920
        }
    ],
    countBasketPrice() {
        let total = 0;
        this.items.forEach(element => {
            total += element.price;
        });
        return total;
    }
};

//* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для
// корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных
// модулей сайта, но в разных местах давал возможность вызывать разные методы.
// Если я правильно понял то должно было выйти примерно так, по крайней мере сдам и посмотрю выполнение ДЗ


class Prod {
    constructor({name, size, price, img, color, discount = 0}) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.discount = discount;
    };

    getDisc() {
        return this.discount;
    };

    setDisc(discount) {
        this.discount = discount;
    };

    getPrice() {
        return this.price;
    };

    getTotal() {
        if (this.discount) {
            return this.price * (100 - this.discount) / 100;
        } else {
            return this.price;
        }
    };
}

const bug = new Prod({
    name: 'Рубашка',
    size: 'XS',
    price: 1140
});

// bug.setDisc(30);


// console.log("Новое посупление товара " + bug.name + " со скидкой " + bug.getDisc() + "%")
// console.log("Стоимсоть без скидки составляет: " + bug.getPrice() + "₽");
// console.log("Стоимость со скидной: " + bug.getTotal() + "₽");