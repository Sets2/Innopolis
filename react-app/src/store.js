import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartRedueser from "./redusers/cart-redueser";
import favoriteReducer from "./redusers/favorite-reducer";

const logger = (store) => (next) => (action) => {
	// console.log("action", action);
	// Функция next применяет действие к хранилищу
	// и возвращает новое состояние хранилища
	let result = next(action);
	// Выводим в консоль новое состояние
	// console.log("next state", store.getState());
	return result;
};

// let counter = 0;
const funcCounter = (store) => (next) => (action) => {
	// Функция next применяет действие к хранилищу
	// и возвращает новое состояние хранилища
	let result = next(action);
	// console.log(`Количество обработанных действий: ${++counter}`);
	return result;
};

export const store = configureStore({
	reducer: {
		cart: cartRedueser,
		favorite: favoriteReducer
	},
	middleware: [...getDefaultMiddleware(), logger, funcCounter]
});