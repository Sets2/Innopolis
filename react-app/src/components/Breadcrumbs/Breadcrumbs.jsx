import './Breadcrumbs.scss'
import Link from '../LinkComp/LinkComp'

function Breadcrumbs(props) {
	const { breadcrumbs } = props;
	return (
		<div className="breadcrumbs">
			{breadcrumbs.map((item) => {
				return <div className="breadcrumbs__item" key={item.url + item.name}>
					<Link link={{ url: item.url, name: item.name, target: "", option: "" }} />
				</div>
			})}
		</div>
	)
}

export default Breadcrumbs
