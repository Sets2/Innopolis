"use strict"

// Упражнение 1
/**
 * Проверяет наличие свойств у объекта в параметре
 * @param {object} obj проверяемый объект
 * @returns {boolean} возвращает true если свойств у объекта нет
 */
function isEmpty(obj) {
	for (let i in obj) return false;
	return true;
}

let user = {};
console.log(isEmpty(user)); // true
user.age = 12;
console.log(isEmpty(user)); // false


// Упражнение 3
/**
 * Увеличивает значения всех свойств объекта на передаваемый процент
 * @param {object} obj объект имеющий произвольное количество свойств типа number
 * @param {number} percent число - процент для увеличения свойств объекта
 * @returns {number} сумма всех свойств объекта после увеличения
 */
function raiseSalary(obj, percent) {
	const ratio = (100 + percent) / 100;
	let sum = 0;
	for (let i in obj) {
		obj[i] = Math.floor(obj[i] * ratio);
		sum += obj[i];
	}
	return sum;
}

let salaries = {
	John: 100000,
	Ann: 160000,
	Pete: 130000,
};

const raisePercent = 5;
let budget = raiseSalary(salaries, raisePercent);

console.log(salaries);
console.log(budget);

