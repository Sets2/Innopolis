import './Configs.scss'
import '../../scss/_fonts.scss';
import ConfigButton from '../ConfigButton/ConfigButton'
import { memo } from "react";

function Configs(props) {
	const { configs, config, onConfigChange } = props;
	return (
		<>
			<h5 className="font__h5">Конфигурация памяти: {config}Гб</h5>
			<div className="configs">
				{
					configs.map((item) => {
						return <ConfigButton configsButton={item} key={item} config={config} onConfigChange={onConfigChange} />
					})
				}
			</div>
		</>)
}

export default memo(Configs);

