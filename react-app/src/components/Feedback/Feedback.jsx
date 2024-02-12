import './Feedback.scss'
import { useState } from 'react'

function Feedback(props) {
	const [firstError, setFirstError] = useState("");
	[valids["feedback__fio"].state, valids["feedback__fio"].setState] = useState(initStored("feedback__fio"));
	[valids["feedback__estimation"].state, valids["feedback__estimation"].setState] = useState(initStored("feedback__estimation"));
	[valids["feedback__text"].state, valids["feedback__text"].setState] = useState(initStored("feedback__text"));

	function handleFormChange(e) {
		valids[e.target.name].setState(e.target.value);
		if (firstError === e.target.name) {
			setFirstError("");
		}
		clearTimeout(timeoutId);
		timeoutId = setTimeout(function () {
			localStorage.setItem(e.target.name, e.target.value);
		}, 1000);
	}
	function handleFormBlur(e) {
		clearTimeout(timeoutId);
		localStorage.setItem(e.target.name, e.target.value);
	}
	function handleFormSubmit(e) {
		if (!checkValidity()) e.preventDefault();
		else removeStored();
		showFormError(setFirstError);
	}
	return (
		<form className="feedback" noValidate onSubmit={handleFormSubmit}>
			<h5 className="feedback__title font__h5">Добавить свой отзыв</h5>
			<div className="feedback__container">
				<div className="feedback__row1">
					<div className="feedback__fio-wrapper">
						<input type="text" name="feedback__fio" className="feedback__fio input-fields__norm"
							placeholder="Имя и фамилия" required minLength="2"
							value={valids["feedback__fio"].state}
							onChange={handleFormChange} onBlur={handleFormBlur} />
						{/* <span className={"feedback__error" + ((firstError !== 'feedback__fio') ? ' css__display_hidden' : '')}> */}
						<span className="feedback__error" style={{ visibility: firstError === 'feedback__fio' ? "visible" : "hidden" }} >
							{valids["feedback__fio"].errorText}
						</span>
					</div>
					<div className="feedback__estimation-wrapper" >
						<input type="number" name="feedback__estimation"
							className="feedback__estimation input-fields__norm" placeholder="Оценка" required
							min="1" max="5"
							value={valids["feedback__estimation"].state}
							onChange={handleFormChange} onBlur={handleFormBlur} />
						<span className="feedback__error" style={{ visibility: firstError === 'feedback__estimation' ? "visible" : "hidden" }}>
							{valids["feedback__estimation"].errorText}
						</span>
					</div >
				</div >
				<textarea name="feedback__text" className="feedback__text input-fields__norm"
					placeholder="Текст отзыва"
					value={valids["feedback__text"].state}
					onChange={handleFormChange} onBlur={handleFormBlur}>
				</textarea>
				<button className="feedback__add">Отправить отзыв</button>
			</div >
		</form >
	)
}
export default Feedback

let timeoutId;
const valids = {
	"feedback__fio": {
		valid_func: function (value) {
			if (value.trim() === "") return "Вы забыли указать имя и фамилию"
			if (value.length < 2) return "Имя не может быть короче 2-х символов"
			return ""
		},
		errorText: ""
	},
	"feedback__estimation": {
		valid_func: function (value) {
			if (value.trim() === "" || +value < 1 || +value > 5) return "Оценка должна быть от 1 до 5"
			return ""
		},
		errorText: ""
	},
	"feedback__text": {
		valid_func: undefined,
		errorText: ""
	},
}

function initStored(name) {
	let stored = localStorage.getItem(name);
	return (stored ? stored : "");
}

function removeStored() {
	for (let item of Object.keys(valids))
		localStorage.removeItem(item);
}

function checkValidity() {
	let state = true;
	for (let i of Object.keys(valids)) {
		if (!valids[i].valid_func) continue;						 // Невалидируемое поле пропускаем
		valids[i].errorText = valids[i].valid_func(valids[i].state);
		if (valids[i].errorText) state = false;
	};
	return state;
}

function showFormError(setFirstError) {
	let flagOne = true;
	for (let i of Object.keys(valids)) {
		if (!valids[i].valid_func) continue;						// Невалидируемое поле пропускаем
		if (flagOne && valids[i].errorText) {
			setFirstError(i);
			flagOne = false;
		}
	}
	if (flagOne) setFirstError("");
}

