function newObject(my_num, max_num) {
    if (my_num <= max_num) {
        hundreds = Math.floor(my_num / 100 % 10);
        tens = Math.floor(my_num / 10 % 10);
        units = my_num % 10;
        return ({'единицы': units, 'десятки': tens, 'сотни': hundreds});

    } else {
        return('Введенное число больше запрошенного интервала (от 0 до 999).');
    }
}
console.log(newObject(369, 999))

// Задание 2 было выполнено ранее