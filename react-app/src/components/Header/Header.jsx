import './Header.scss';
import '../../scss/_fonts.scss';
import '../../scss/_container.scss';
import Logo from '../Logo/Logo'

import { useSelector } from 'react-redux';

function Header() {
	const products = useSelector((store) => store.cart.products);
	const favorites = useSelector((store) => store.favorite.products);
	const checkBasket = products.length;
	const checkFavorite = favorites.length;

	return (
		<div className="header-container">
			<div className="container header_colored_standart">
				<header className="header header_colored_standart">
					{/* Logo */}
					<Logo />
					<div className="header__icons">
						<div className="header__icon header__icon-img icons__heart">
							<div className="header__icon-counter"
								style={{ visibility: checkFavorite ? "visible" : "hidden" }}>
								{checkFavorite}
							</div>
						</div>
						<div className="header__icon header__icon-img icons__cart">
							<div className="header__icon-counter"
								style={{ visibility: checkBasket ? "visible" : "hidden" }} >
								{checkBasket}
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	)
};

export default Header;