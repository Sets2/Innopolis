import './Descs.scss'
import '../../scss/_fonts.scss';

function Descs(props) {
	const { descs } = props;
	return (
		<>
			<h5 className="font__h5" >Описание</h5 >
			<div className="descs">
				{
					descs.html.map((item) => {
						return <div key={item} dangerouslySetInnerHTML={{ __html: item }} />
					})
				}
				{
					descs.text.map((item) => {
						return <p key={item}> {item} </p>
					})
				}
			</div>
		</>)
}

export default Descs