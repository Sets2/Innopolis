"use strict"

// Упражнение 1
let a = '$100';
let b = '300$';

let summ = +a.slice(1) + parseInt(b);
console.log(summ);	// Должно быть 400

// Упражнение 2
let message2 = ' привет, медвед ';
message2 = message2.trim();// Решение должно быть написано тут
console.log(message2); // “Привет, медвед”

// Упражнение 3
let message3;
let ageS = prompt('Сколько вам лет?');
let age = +ageS;
if (age < 0 || ageS == null || isNaN(age))
	message3 = "Входные данные должны быть неотрицательным числом";
else if (age <= 3)
	message3 = 'младенец';
else if (age <= 11)
	message3 = 'ребенок!';
else if (age <= 18)
	message3 = 'подросток';
else if (age <= 40)
	message3 = 'познаёте жизнь';
else if (age <= 80)
	message3 = 'познали жизнь';
else message3 = "долгожитель";

console.log(message3);

// Упражнение 4
let message4 = 'Я работаю со строками как профессионал!';
let count = message4.split(' ').length;
console.log(count);
