import { createSlice } from "@reduxjs/toolkit";
import { initStored } from '../utils/localStoreUtil'

export const favoriteSlice = createSlice({
	name: "favorite",
	// Начальное состояние хранилища, товаров нет
	initialState: {
		products: initStored("favorite"),
	},
	// Все доступные методы
	reducers: {
		// Добавить товар, первый параметр это текущее состояние
		// А второй параметр имеет данные для действия
		addFavorite: (prevState, action) => {
			const product = action.payload;
			const hasInfavorite = prevState.products.some(
				(prevProduct) => prevProduct === product);
			if (hasInfavorite) return prevState;
			return {
				...prevState,
				// Внутри action.payload информация о добавленном товаре
				// Возвращаем новый массив товаров вместе с добавленным
				products: [...prevState.products, action.payload],
			};
		},
		removeFavorite: (prevState, action) => {
			const product = action.payload;
			return {
				...prevState,
				products: prevState.products.filter((prevProduct) => {
					return prevProduct !== product;
				})
			};
		}
	},
});
// Экспортируем наружу все действия
export const { addFavorite, removeFavorite } = favoriteSlice.actions

// И сам редуктор тоже
export default favoriteSlice.reducer;
