"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const maxNumber = (firstNumber, secondNumber, thirdNumber) =>
    Math.max(firstNumber, secondNumber, thirdNumber);

const firstNumber = +prompt("Введите первое число (N1):");
const secondNumber = +prompt("Введите второе число (N2):");
const thirdNumber = +prompt("Введите третье число(N3):");
alert(`"Максимальное значение среди чисел N1, N2, N3 равно ${maxNumber(firstNumber, secondNumber, thirdNumber)}"`);