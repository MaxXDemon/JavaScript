let numberTask = Number(prompt('Введите номер задачи?', '1 или 2'));

switch (numberTask) {
    case (1):
        const temperatureCelsius = 36.6
        const temperatureFahrenheit = 9 / 5 * temperatureCelsius + 32;
        console.log(`Температура по цельсию:  ${temperatureCelsius}, Температура по фарингейту: ${temperatureFahrenheit}.`);
        alert(`Температура по цельсию:${temperatureCelsius}, 
Температура по фарингейту: ${temperatureFahrenheit}.`);
        break;

    case (2):

        const userName = prompt('Как Вас зовут?', 'user');
        const admin = userName;
        console.log(`Привет ${admin}!`);
        alert(`Привет ${admin}!`)
        break;
    default: alert("Такой задачи нет")
}


