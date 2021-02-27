"use strict";

//////////////////////// Задача 1 ////////////////////////

let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 ++ перед переменной означает что мы к переменной а прибавляем единицу
d = b++; alert(d);           // 1 ++ после переменной, что мы прибавляем единицу, но выводим предыдущее значение переменной
c = (2+ ++a); alert(c);      // 5 в первом примере мы прибавили единицу в переменную а ее значение стало равно В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5
d = (2+ b++); alert(d);      // 4 во втором примере мы прибавили единицу в переменную b ее значение стало равно В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4
alert(a);                    // 3 прибавили единицу в примере 1 и примере 3
alert(b);                    // 3 прибавили единицу в примере 2 и примере 4

//////////////////////// Задача 2 ////////////////////////

let a = 2;
let x = 1 + (a *= 2); // будет равно 5 так как это сокращенный оператор. Полная версия: x = 1 + (a = a * 2);

//////////////////////// Задача 3 ////////////////////////

let a = -2;
let b = 5;

if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

//////////////////////// Задача 4 ////////////////////////

let ch = 11;
switch (ch) {
    case 1:
        console.log("Ваше число 1");
        break;
    case 2:
        console.log("Ваше число 2");
        break;
    case 3:
        console.log("Ваше число 3");
        break;
    case 4:
        console.log("Ваше число 4");
        break;
    case 5:
        console.log("Ваше число 5");
        break;
    case 6:
        console.log("Ваше число 6");
        break;
    case 7:
        console.log("Ваше число 7");
        break;
    case 8:
        console.log("Ваше число 8");
        break;
    case 9:
        console.log("Ваше число 9");
        break;
    case 10:
        console.log("Ваше число 10");
        break;
    case 11:
        console.log("Ваше число 11");
        break;
    case 12:
        console.log("Ваше число 12");
        break;
    case 13:
        console.log("Ваше число 13");
        break;
    case 14:
        console.log("Ваше число 14");
        break;
    case 15:
        console.log("Ваше число 15");
        break;

}

//////////////////////// Задача 5 ////////////////////////

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

//////////////////////// Задача 6 ////////////////////////

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сумма":
            return sum(arg1, arg2);
        case "вычитание":
            return sub(arg1, arg2);
        case "умножение":
            return mul(arg1, arg2);
        case "деление":
            return div(arg1, arg2);
    }
}

//////////////////////// Задача 7 ////////////////////////

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null === 0); //false пустота не равно нулю
console.log(null >= 0); //true Неастрогое неравенство преобразует вот и выходит по этому

//////////////////////// Задача 8 ////////////////////////

function power(val, pow) {
    if (val === 0) {
        return 0;
    } else if (pow === 0) {
        return 1;
    } else if (pow < 0) {
        return power(1 / val, -pow)
    } else {
        return val * power(val, pow - 1)
    }
}