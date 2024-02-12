import './PageProduct.scss';
import '../../scss/_fonts.scss';
import '../../scss/_container.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Images from '../../components/Images/Images'
import Colors from '../../components/Colors/Colors'
import Configs from '../../components/Configs/Configs'
import Specs from '../../components/Specs/Specs'
import Descs from '../../components/Descs/Descs'
import Comparison from '../../components/Comparison/Comparison'
import Reviews from '../../components/Reviews/Reviews'
import Feedback from '../../components/Feedback/Feedback'
import Sidebar from '../../components/Sidebar/Sidebar'

import { product } from '../../data/data'
import { breadcrumbs } from '../../data/data'
import { useState, useCallback } from 'react'

function PageProduct() {
	const [color, setColor] = useState(product.color);
	const [config, setConfig] = useState(product.config);

	// Функции handleColorChange и handleConfigChange без применения useCallback
	// пересоздаются при каждом рендере компонента PageProduct
	// Так как они передаются в качестве параметров-колбэков на событие onClick
	// в компонентах Colors и Configs, то данные компоненты будут всегда перерендерится при 
	// любом рендере в родительском компоненте даже при отсутствии изменений внутри этих компонентов.
	// Применение useCallback позволяет создать функцию в данном случае однократно и затем
	// получать ссылку на нее
	// Для предотвращения перерендеринга дочерних компонентов, при неизменяющихся props
	// возвращаемые компоненты обернуты в функцию React.memo()

	const handleColorChange = useCallback((color) => {
		setColor(color);
	}, []);

	const handleConfigChange = useCallback((config) => {
		setConfig(config);
	}, []);

	return (
		<>
			<Header />
			<div className="container container_colored_standart container_top_after-header container_bottom_before-footer" >
				<div id="begin"></div>
				{/* <!--  Breadcrumbs --> */}
				<nav className="container__breadcrumbs">
					<Breadcrumbs breadcrumbs={breadcrumbs} />
				</nav>
				{/* <!-- MAIN --> */}
				<main className="poduct">
					{/* <!-- Title product --> */}
					<h2 className="product__name font__h2">{product.name}, {color}, {config}Гб</h2>
					{/* <!-- Photo gallery product --> */}
					<div className="product__images">
						<Images images={product.images} />
					</div>
					{/* <!-- container-characteristics --> */}
					<div className="product__characteristics">
						<div className="characteristics">
							{/* <!-- Color selection --> */}
							<section className="characteristics__item">
								<Colors colors={product.colors} color={color} onColorChange={handleColorChange} />
							</section>
							{/* <!-- Memory selection --> */}
							<section className="characteristics__item">
								<Configs configs={product.configs} config={config} onConfigChange={handleConfigChange} />
							</section>
							{/* <!-- Product specifications --> */}
							<section className="characteristics__item">
								<Specs specs={product.specifications} />
							</section>
							{/* <!-- description --> */}
							<section className="characteristics__item">
								<Descs descs={product.description} />
							</section>
							{/* <!-- comparison --> */}
							<section className="characteristics__item characteristics__item_comparison">
								<Comparison comparison={product.comparison} />
							</section>
							{/* <!-- reviews --> */}
							<section className="characteristics__reviews">
								<Reviews reviews={product.reviews} />
							</section>
							{/* <!-- feedback --> */}
							<div className="characteristics__feedback" >
								<Feedback />
							</div>
						</div>
						<Sidebar productName={product.name} />
					</div >

				</main >
			</div >
			<Footer />
		</>
	);
}

export default PageProduct;
