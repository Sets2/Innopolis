"use strict"

document.addEventListener("DOMContentLoaded", afterLoad);

function afterLoad() {
	const formSelector = ".feedback";
	const inputSelector = ".input-fields__norm";
	const inputErrorSelector = ".feedback__error";
	const cartButtonSelector = ".sale__basket";
	const productNameSelector = ".product__name";
	const cartChoiseClass = "sale__basket_choise";
	const cartCounterSelector = ".header__icon-counter_cart-visible";
	const applicantForm = document.querySelector(formSelector);
	const inputList = applicantForm.querySelectorAll(inputSelector);
	const cartButton = document.querySelector(cartButtonSelector);
	const productName = document.querySelector(productNameSelector).textContent;
	const cartConter = document.querySelector(cartCounterSelector);

	let timeoutId;
	let cart = {};

	initStored();
	const valids = initValids();
	showCartButton();
	showCartCounter();
	applicantForm.addEventListener("submit", onFormSubmit);
	applicantForm.addEventListener("input", onFormInput);
	applicantForm.addEventListener("change", onFormChange);
	cartButton.addEventListener("click", onCartButtonClick);

	function onCartButtonClick(event) {
		cart[productName] = (cart[productName] > 0) ? 0 : 1;
		if (cart[productName] == 0) delete cart[productName];
		saveCart(productName);
		showCartButton();
		showCartCounter();
	}

	function showCartCounter() {
		const count = Object.keys(cart).length;
		cartConter.textContent = count;
		cartConter.style.visibility = count ? "visible" : "hidden";
	}

	function showCartButton() {
		if (cart[productName]) {
			cartButton.classList.add(cartChoiseClass);
		} else {
			cartButton.classList.remove(cartChoiseClass);
		}
	}

	function saveCart(name) {
		if (Object.keys(cart).length == 0)
			localStorage.removeItem("cart")
		else
			localStorage.setItem("cart", JSON.stringify(cart));
	}

	function onFormSubmit(event) {
		if (!checkValidity()) {
			event.preventDefault();
			showFormError();
		} else removeStored();
	}

	function initValids() {
		const valids = {
			"feedback__fio": {
				valid_func: function (value) {
					if (value.trim() === "") return "Вы забыли указать имя и фамилию"
					if (value.length < 2) return "Имя не может быть короче 2-х символов"
					return ""
				}
			},
			"feedback__estimation": {
				valid_func: function (value) {
					if (value.trim() === "" || +value < 1 || +value > 5) return "Оценка должна быть от 1 до 5"
					return ""
				}
			}
		};
		for (let item of inputList) {
			const itemName = item.getAttribute("name");
			if (valids[itemName]) {
				valids[itemName].item = item;
				valids[itemName].error_item = item.parentElement.querySelector(inputErrorSelector);
				valids[itemName].error_text = "";
			}
		};
		return valids;
	}

	function checkValidity() {
		let state = true;
		for (let i in valids) {
			valids[i].error_text = valids[i].valid_func(valids[i].item.value);
			if (valids[i].error_text) state = false;
		};
		return state;
	}

	function showFormError() {
		let flagOne = true;
		for (let i in valids) {
			valids[i].error_item.textContent = valids[i].error_text;
			if (flagOne && valids[i].error_text) {
				valids[i].error_item.style.visibility = "visible";
				flagOne = false;
			} else valids[i].error_item.style.visibility = "hidden";
		}
	}

	function onFormInput(event) {
		const { name, value } = event.target;
		if (valids[name]?.error_text) {
			valids[name].error_item.style.visibility = "hidden";
			valids[name].error_text = "";
		}
		clearTimeout(timeoutId);
		timeoutId = setTimeout(function () {
			localStorage.setItem(name, value);
		}, 1000);
	}

	function onFormChange(event) {
		const { name, value } = event.target;
		clearTimeout(timeoutId);
		localStorage.setItem(name, value);
	}

	function initStored() {
		let stored = "";
		for (let item of inputList) {
			stored = localStorage.getItem(item.getAttribute("name"));
			if (stored) item.value = stored;
		};
		stored = localStorage.getItem("cart");
		if (stored) cart = JSON.parse(stored);
	}

	function removeStored() {
		for (let item of inputList)
			localStorage.removeItem(item.getAttribute("name"));
	}
}