import './Specs.scss'
import '../../scss/_fonts.scss';
import SpecItem from '../SpecItem/SpecItem'

function Specs(props) {
	const { specs } = props;
	return (
		<>
			<h5 className="font__h5" > Характеристики товара</h5 >
			<ul className="specs">
				{
					specs.map((item) => {
						return <SpecItem spec={item} key={item.name} />
					})
				}
			</ul>
		</>)
}

export default Specs