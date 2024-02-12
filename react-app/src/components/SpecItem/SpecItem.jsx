import './SpecItem.scss'
import LinkComp from '../LinkComp/LinkComp'

function SpecItem(props) {
	const { spec } = props;
	const rValue = spec.link.url ? <LinkComp link={spec.link} /> : <><b>{spec.value}</b> </>;
	return (
		<li className="specItem"> {spec.name} <span className='specItem__name'> </span> {rValue}</li>
	)
}

export default SpecItem