"use strict";

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let max_num = 100;
let num = 0;

while (num <= max_num) {
    let flag = true;
    let i = 2; // указал двойку что бы уменьшить количество кода по решению этой задачи
    while (i < num) {
        if (num % i === 0) {
            flag = false;
            break;
        }
        i++;
    }
    if (num === 0 || num === 1) {
    } else if (flag === true) console.log("Простое число:",num);
    num++;
}
// другого варианты реализации не вижу пока что


//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i <= 9; console.log("Цифры без тела цикла:",i++)) {
}

// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.
// Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let cart = [
    ["Футболка", "XS", 550],
    ["Майка", "XXS", 890],
    ["Брюки", "XL", 950],
    ["Свитшот", "XXL", 1550],
    ["Рубашка", "XXS", 920]
];

function countBasketPrice(...arr) {
    let all = 0;
    for (let i = 0; i < arr.length; i++) {
        all = all + cart[arr[i]][2];
    }

    return "Ваша стоимость корзины составила: " + all;
}

countBasketPrice(0, 1, 2, 3, 4);
// Обустроил работу как по id товара можно добавить массив который будет внутри
// вызываемой фунции а в этот массив пушить новые данные корзины


// *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let x = "";
for (let i = 0; i < 20; i++) {
    console.log(x += "x")
}