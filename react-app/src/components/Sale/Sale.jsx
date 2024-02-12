import './Sale.scss'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from "../../redusers/cart-redueser";
import { addFavorite, removeFavorite } from "../../redusers/favorite-reducer";
import { saveStorage } from "../../utils/localStoreUtil"

function Sale(props) {
	const { productName } = props;
	const products = useSelector((store) => store.cart.products);
	const favorites = useSelector((store) => store.favorite.products);
	const dispath = useDispatch();
	const checkBasket = products.length;
	const checkFavorite = favorites.length;

	function handlClickFavorite(e) {
		if (checkFavorite > 0) {
			dispath(removeFavorite(productName))
			saveStorage("favorite", favorites.filter((prevProduct) => {
				return prevProduct !== productName
			}));
		}
		else {
			dispath(addFavorite(productName));
			saveStorage("favorite", [...favorites, productName]);
		}
	}

	function handlClickBasket(e) {
		if (checkBasket > 0) {
			dispath(removeProduct(productName))
			saveStorage("cart", products.filter((prevProduct) => {
				return prevProduct !== productName
			}));
		}
		else {
			dispath(addProduct(productName));
			saveStorage("cart", [...products, productName]);
		}
	}
	return (
		<div className="sale">
			<div className="sale__header">
				<div className="sale__cost">
					<div className="sale__old">
						<div className="sale__oldprice">75 990₽</div>
						<div className="sale__discount">-8%</div>
					</div>
					<div className="sale__newprice">67 990₽</div>
				</div>
				<div className={"sale__favourites" + ((checkFavorite > 0) ? ' sale__favourites_checked' : '')}
					onClick={handlClickFavorite}>
				</div>
			</div>
			<div className="sale__delivery">
				<div>Самовывоз в четверг, 1 сентября <b>— бесплатно</b></div>
				<div>Курьером в четверг, 1 сентября <b>— бесплатно</b></div>
			</div>
			<div className={"sale__basket" + ((checkBasket > 0) ? ' sale__basket_checked' : '')}
				onClick={handlClickBasket}>
				{(checkBasket > 0) ? 'Товар уже в корзине' : 'Добавить в корзину'}
			</div>
		</div>
	)
}

export default Sale
