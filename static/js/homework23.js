"use strict"

//
// Упражнение 1
//
function countdown(count) {
	let i = count;
	setTimeout(function run() {
		if (i > 0) {
			console.log(`Осталось ${i--}`);
			setTimeout(run, 1000);
		}
		else console.log("Время вышло!");
	}, 1000);
}

let inputStr = prompt("Введите число");
let number = +inputStr;
if (inputStr === null || inputStr === "" || !Number.isFinite(number) || number < 0)
	console.log("Введенное значение не является неотрицательным числом")
else countdown(number);

//
// Упражнение 1 дополнительное
//
function countdownP(inputStr) {
	return new Promise((resolve, reject) => {
		let number = +inputStr;
		if (inputStr === null || inputStr === "" || !Number.isFinite(number) || number < 0)
			reject("параметр не является неотрицательным числом");
		else
			setTimeout(function run() {
				if (number > 0) {
					console.log(`Осталось ${number--}`);
					setTimeout(run, 1000);
				}
				else resolve("Время вышло!");
			}, 1000);
	});
}
let inputStr1 = prompt("Введите число");
countdownP(inputStr1).then(console.log, console.log);

//
// Упражнение 2
//
let timeStart = Date.now();

let promise = fetch("https://reqres.in/api/users");
promise
	// Сначала ответ нужно перевести в формат JSON
	.then(function (response) {
		return response.json();
	})
	// И только вот здесь мы узнаем что нам прислал бэкенд
	.then(function (response) {
		let users = response.data;
		let mes = "";
		mes = `Получили пользователей: ${users.length}\n`;
		users.forEach(user => {
			mes += `- ${user.first_name} ${user.last_name}(${user.email})\n`;
		});
		console.log(mes);
	})
	// Выполнится только в случае ошибки
	.catch(function (err) {
		console.log("Ошибка выполнения: " + err);
	})
	.then(function () { console.log(`Время выполнения кода ${Date.now() - timeStart} мс`) });
