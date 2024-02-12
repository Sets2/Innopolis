"use strict"

// Упражнение 1
for (let i = 0; i <= 20; i = i + 2) {
	console.log(i);
}

// Упражнение 2
let message2 = "";
let summ = 0;
for (let i = 1; i <= 3; i++) {
	let aS = prompt('Введите ' + i + '-е число');
	let a = +aS;

	if (aS == null || isNaN(a)) {
		message2 = "Ошибка, вы ввели не число";
		break;
	}

	summ += a;
}
if (message2) console.log(message2)
else console.log(summ);

// Упражнение 3
function getNameOfMonth(month) {
	let m = ["январь", "февраль", "март", "апрель", "май", "июнь",
		"июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	return m[month];
}

for (let i = 0; i <= 11; i++) {
	if (i === 9) continue;
	console.log(getNameOfMonth(i));
}

// Упражнение 4
// В прошлом в JavaScript не было лексического окружения на уровне блоков кода.
// «immediately - invoked function expressions» (аббревиатура IIFE),
// что означает функцию, запускаемую сразу после объявления.
//
// (function() {
// let message = "Hello";
// alert(message); // Hello
// }) ();
// Здесь создаётся и немедленно вызывается Function Expression.
// Так что код выполняется сразу же и у него есть свои локальные переменные.
// Это не то, что мы должны использовать сегодня, но, так как вы можете встретить это в старых скриптах