"use strict"
// Класс на основе слекторов формы и input-полей обеспечивает сохранение значений в localstore
class Form {
	constructor(sForm, sInput) {
		this.formSelector = sForm;
		this.inputSelector = sInput;
	};
	applicantForm;
	inputList;
	timeoutId;
	base_init() {
		this.applicantForm = document.querySelector(this.formSelector);
		this.inputList = this.applicantForm.querySelectorAll(this.inputSelector);
		this.stored_init();
	};
	listner_init() {
		this.applicantForm.addEventListener("submit", this.handleFormSubmit.bind(this), false);
		this.applicantForm.addEventListener("input", this.onInput.bind(this), false);
		this.applicantForm.addEventListener("change", this.onChange.bind(this), false);
	};
	stored_init() {
		let stored = "";
		for (let item of this.inputList) {
			stored = localStorage.getItem(item.getAttribute("name"));
			if (stored) item.value = stored;
		}
	};
	stored_remove() {
		for (let item of this.inputList)
			localStorage.removeItem(item.getAttribute("name"));
	};
	onInput(event) {
		const { name, value } = event.target;
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(function () {
			localStorage.setItem(name, value);
		}, 1000)
	};
	onChange(event) {
		const { name, value } = event.target;
		clearTimeout(this.timeoutId);
		localStorage.setItem(name, value);
	}
	handleFormSubmit(event) {
		this.stored_remove();
		alert("Форма успешно отправлена!");
	}
};

// Класс реализует дополнительный функционал по валидации на основе 
// объектов {имя поля, { valid_func: f() } и селектора inputError полей }
class AddReviewForm extends Form {
	constructor(sForm, sInput, sErrorInput) {
		super(sForm, sInput);
		this.inputErrorSelector = sErrorInput;
		this.valids = {};
	};
	listner_init() {
		this.applicantForm.addEventListener("submit", this.handleFormSubmit.bind(this), false);
		this.applicantForm.addEventListener("input", this.onInput.bind(this), false);
		this.applicantForm.addEventListener("change", this.onChange.bind(this), false);
	};
	valid_add(name, func) {
		this.valids[name] = { "valid_func": func };
	}
	valids_init() {
		for (let item of this.inputList) {
			const itemName = item.getAttribute("name");
			if (this.valids[itemName]) {
				this.valids[itemName].item = item;
				this.valids[itemName].error_item = item.parentElement.querySelector(this.inputErrorSelector);
				this.valids[itemName].error_text = "";
			}
		};
	}
	checkValidity() {
		let state = true;
		for (let i in this.valids) {
			this.valids[i].error_text = this.valids[i].valid_func(this.valids[i].item.value);
			if (this.valids[i].error_text) state = false;
		};
		return state;
	}

	showError() {
		let flagOne = true;
		for (let i in this.valids) {
			this.valids[i].error_item.textContent = this.valids[i].error_text;
			if (flagOne && this.valids[i].error_text) {
				this.valids[i].error_item.style.visibility = "visible";
				flagOne = false;
			} else this.valids[i].error_item.style.visibility = "hidden";
		}
	}
	onInput(event) {
		super.onInput(event);
		const { name, value } = event.target;
		if (this.valids[name]?.error_text) {
			this.valids[name].error_item.style.visibility = "hidden";
			this.valids[name].error_text = "";
		}
	};
	handleFormSubmit(event) {
		if (!this.checkValidity()) {
			event.preventDefault();
			this.showError();
		} else super.handleFormSubmit(event);
	}

};

document.addEventListener("DOMContentLoaded", afterLoad);

function afterLoad() {
	const form = new AddReviewForm(".feedback", ".input-fields__norm", ".feedback__error");
	form.base_init();
	form.valid_add("feedback__fio", function (value) {
		if (value.trim() === "") return "Вы забыли указать имя и фамилию"
		if (value.length < 2) return "Имя не может быть короче 2-х символов"
		return ""
	});
	form.valid_add("feedback__estimation", function (value) {
		if (value.trim() === "" || +value < 1 || +value > 5) return "Оценка должна быть от 1 до 5"
		return ""
	});
	form.valids_init();
	form.listner_init();
}