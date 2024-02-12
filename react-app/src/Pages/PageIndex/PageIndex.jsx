// import './PageIndex.scss';
import styles from './PageIndex.module.scss';
import '../../scss/_container.scss';
import cn from "classnames";

import LinkComp from '../../components/LinkComp/LinkComp';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function PageIndex() {
	return (
		<>
			<Header />
			<div className={cn("container", "container_top_after-header", "container_bottom_before-footer", "container_items_strech")} >
				<div id="begin"></div>
				<main className={styles.index}>
					<div className={styles.item}>
						<p>Здесь должно быть содержимое главной страницы.</p>
						<p>Но в рамках курса главная страница  используется лишь</p>
						<p>в демонстрационных целях</p>
					</div>
					<div className={styles.item}>
						<LinkComp link={{ url: "/product", name: "Перейти на страницу товара" }} />
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default PageIndex;
