import './Adv.scss'
import cn from "classnames";

function Adv(props) {
	const { className } = props;
	return (
		<div className={cn("advertisement", className)}>
			<div className="advertisement__header">Реклама</div>
			<div className="advertisement__list">
				<iframe className="advertisement__item" src="/ads.html" title='Реклама блок1'></iframe>
				<iframe className="advertisement__item" src="/ads.html" title='Реклама блок2'></iframe>
			</div>
		</div>)
}

export default Adv