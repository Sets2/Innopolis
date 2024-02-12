import { createSlice } from "@reduxjs/toolkit";
import { initStored } from '../utils/localStoreUtil'

export const cartSlice = createSlice({
	name: "cart",
	// Начальное состояние хранилища, товаров нет
	initialState: {
		products: initStored("cart"),
	},
	// Все доступные методы
	reducers: {
		// Добавить товар, первый параметр это текущее состояние
		// А второй параметр имеет данные для действия
		addProduct: (prevState, action) => {
			const product = action.payload;
			const hasInCart = prevState.products.some(
				(prevProduct) => prevProduct === product);
			if (hasInCart) return prevState;
			return {
				...prevState,
				// Внутри action.payload информация о добавленном товаре
				// Возвращаем новый массив товаров вместе с добавленным
				products: [...prevState.products, action.payload],
			};
		},
		removeProduct: (prevState, action) => {
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
export const { addProduct, removeProduct } = cartSlice.actions

// И сам редуктор тоже
export default cartSlice.reducer;
