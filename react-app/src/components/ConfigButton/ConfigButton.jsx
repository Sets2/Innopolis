import './ConfigButton.scss'

function ConfigButton(props) {
	const { configsButton, config, onConfigChange } = props;
	const sel = configsButton === config ? "configButton_selected" : "";
	return (
		<div className={`configButton  ${sel}`} onClick={() => { onConfigChange(configsButton) }}>
			{configsButton} Гб
		</div>
	)
}

export default ConfigButton