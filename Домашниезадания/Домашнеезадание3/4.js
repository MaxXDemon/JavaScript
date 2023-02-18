"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const summ = (firstNum, secondNum) => firstNum + secondNum;

const multiplication = (firstNum, secondNum) => firstNum * secondNum;

const division = (firstNum, secondNum) => firstNum / secondNum;

function subtraction(firstNum, secondNum) {
    return firstNum >= secondNum ? firstNum - secondNum : secondNum - firstNum;
}

const firstNum = +prompt("Введите первое число:");
const secondNum = +prompt("Введите второе число:");

console.log(`Сумма данных чисел равна:${summ(firstNum, secondNum)}`);
console.log(`Произведение данных чисел равно:${multiplication(firstNum, secondNum)}`);
console.log(`Частное данных чисел равно:${division(firstNum, secondNum)}`);
console.log(`Разность данных чисел равна:${subtraction(firstNum, secondNum)}`);