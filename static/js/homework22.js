"use strict"

// Упражнение 1
/**
 * Принимает любой массив с элементами произвольных типов 
 * и возвращает сумму чисел в этом массиве
 * @param {object} массив с элементами произвольных типов
 * @returns {number} возвращает сумму элементов
 */
function getSumm(arr) {
	return arr.reduce((acc, item) => Number.isFinite(item) ? acc + item : acc, 0)
}

let arr1 = [1, 2, 10, 5];
console.log(getSumm(arr1)); // 18
let arr2 = ["a", {}, 3, 3, -2];
console.log(getSumm(arr2)); // 4


// Упражнение 3
/**
 * Добавляет элемент в массив cart при его отсутствии 
 * @param {number} идентификатор - элемент для массива
 * @returns {boolean} true если элемент добавлен, иначе false
 */
function addToCart(id) {
	if (cart.includes(id)) return false
	else {
		cart.push(id);
		return true;
	}
}
/**
 * Удаляет элемент из массива cart при его наличии
 * @param {number} идентификатор - элемент для массива
 * @returns {boolean} true если элемент удален, иначе false
 */
function removeFromCart(id) {
	let result = cart.findIndex(item => item == id);
	if (result < 0) return false
	else {
		cart.splice(result, 1);
		return true;
	}
}
// В корзине один товар
let cart = [4884];
// Добавили товар
addToCart(3456);
console.log(cart); // [4884, 3456]
// Повторно добавили товар
addToCart(3456);
console.log(cart); // [4884, 3456]
// Удалили товар
removeFromCart(4884);
console.log(cart); // [3456]