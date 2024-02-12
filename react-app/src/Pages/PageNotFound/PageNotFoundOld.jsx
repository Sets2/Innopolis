import './PageNotFound.scss';
import '../../scss/_container.scss';
import '../../scss/_fonts.scss';
import LinkComp from '../../components/LinkComp/LinkComp';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function PageNotFound() {
	return (
		<>
			<Header />
			<div className="container container_top_after-header container_bottom_before-footer container_items_strech" >
				<div id="begin"></div>
				<main className="notfound">
					<div className="notfound__item notfound__item_font_big">404</div>
					<h1 className="notfound__item">Мы не можем найти страницу, которую вы ищете.</h1>
					<div className="notfound__item">
						<p>Страница, которую вы запросили, не найдена в базе данных.</p>
						<p>Скорее всего вы попали на ошибочную ссылку или опечатались при вводе URL</p>
					</div>
					<div className="notfound__item">
						<LinkComp link={{ url: "/", name: "Перейти на главную страницу" }} />
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default PageNotFound;
