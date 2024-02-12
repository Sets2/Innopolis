import './Comparison.scss'
import '../../scss/_fonts.scss';

function Comparison(props) {
	const { comparison } = props;
	return (
		<>
			<h5 className="font__h5" >Сравнение моделей</h5 >
			<table className="cmp-table">
				<thead>
					<tr className="cmp-table__tr">
						{
							comparison.header.map((item) => {
								return <th className="cmp-table__th" key={item}> {item}</th>
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						comparison.rows.map((item, index) => {
							return <tr className="cmp-table__tr" key={index}>
								{item.map((item) => {
									return <td className="cmp-table__td" key={item}> {item}</td>
								})}
							</tr>
						})
					}
				</tbody>
			</table>
		</>)
}

export default Comparison