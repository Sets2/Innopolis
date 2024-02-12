import "./LinkComp.scss"
import { Link } from 'react-router-dom'

function LinkComp(props) {
	const { url, name, target, option } = props.link;
	const opt = option?.includes("b") ? "linkcomp_font_bold" : "";
	// Link не работает для внешних ссылок, параметр target используем только для внешних ссылок
	if (target)
		return <a className="linkcomp" href={url}
			target={target} rel="noreferrer">
			<span className={opt}>{name}</span>
		</a>
	else
		return <Link className="linkcomp" to={url}>
			<span className={opt}> {name} </span>
		</Link>;

}

export default LinkComp
