import './ColorButton.scss'

function ColorButton(props) {
	const { colorsButton, color, onColorChange } = props;
	const sel = colorsButton.alt === color ? "colorButton_selected" : "";

	return (
		<div className={`colorButton  ${sel}`} onClick={() => { onColorChange(colorsButton.alt) }} >
			<img className="colorButton__image" src={colorsButton.src} alt={colorsButton.alt} />
		</div>
	)
}

export default ColorButton