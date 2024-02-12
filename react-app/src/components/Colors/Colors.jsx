import './Colors.scss'
import '../../scss/_fonts.scss';
import ColorButton from '../ColorButton/ColorButton'
import { memo } from "react";

function Colors(props) {
	const { colors, color, onColorChange } = props;
	return (
		<>
			<h5 className="font__h5">Цвет товара: {color}</h5>
			<div className="colors">
				{
					colors.map((item) => {
						return <ColorButton colorsButton={item} key={item.alt} color={color} onColorChange={onColorChange} />
					})
				}
			</div>
		</>)
}

// export default Colors;
export default memo(Colors);
