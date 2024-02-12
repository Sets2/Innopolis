import '../../scss/_fonts.scss';
import './Logo.scss'
import { Link } from 'react-router-dom'

function Logo() {

	return (
		<Link className="logo" to="/" >
			<h1 className="font__h1" >
				<img className="logo__img" src="/media/images/favicon.svg" alt="логотип компании" />
				<span className="logo__company">Мой</span>Маркет
			</h1>
		</Link >
	)
}

export default Logo


