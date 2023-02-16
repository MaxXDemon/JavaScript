function TaskOne() {
    const num1 = prompt('Введите первое число');
    if (num1 <= 1) {
        alert("Введенное число меньше или равно 1");
    } else {
        alert("Введенное число НЕ меньше и НЕ равно 1");
    }

    const num2 = prompt('Введите второе число');
    if (num2 >= 3) {
        alert("Введенное число больше или равно 3");
    } else {
        alert("Введенное число НЕ больше и НЕ равно 3");
    }

}

function TaskTwo() {
    let test = true;
    (test === true) ? console.log('+++') : console.log('---');

    console.log("КОД: let test = true; (test === true) ? console.log('+++') : console.log('---');");

    alert('GO в консоль посмотрим :)');


}

function TaskThree() {
    const day = Number(prompt('Введите число от 1 до 31'));
    switch (true) {
        case (day >= 1 && day <= 10):
            alert('Введенное число попадает в первую декаду');
            break;
        case (day > 10 && day <= 20):
            alert('Введенное число попадает во вторую декаду');
            break;
        case (day > 20 && day <= 31):
            alert('Введенное число попадает в третью декаду');
            break;
        default: alert('Нарушено условие ввода, прочтиите внимательно условие и попробуйте снова');
            break;
    }
}

function TaskFour() {
    let number = Number(prompt('Введите любое число:'));


    if (typeof number === "number" && !isNaN(number)) {
        number = number % 1000;
        const hundreds = parseInt(number / 100, 10);
        number = number % 100;
        const tens = parseInt(number / 10, 10);
        number = number % 10;
        const units = parseInt(number / 1, 10);
        alert(`В данном числе: ${hundreds} сотен ${tens} десяток ${units} единиц`);

    } else alert('Вы ввели не число');
}

