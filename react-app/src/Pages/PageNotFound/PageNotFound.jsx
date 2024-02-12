import styled from "styled-components";
import './PageNotFound.scss';
import '../../scss/_container.scss';
import '../../scss/_fonts.scss';

import LinkComp from '../../components/LinkComp/LinkComp';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Container = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	padding: 0 50px;
	height: 100%;
	margin-top: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;

	@media screen and (max-width: 1499px) {
		padding: 0 15px;
	}

	@media screen and (max-width: 1499px) {
		padding-bottom: 80px;
	}
`

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`
const Item = styled.div`
	text-align: center;
`
const ItemBig = styled(Item)`
	text-align: center;
	font-size: 8rem;
	letter-spacing: 10px;
`
function PageNotFound() {
	return (
		<>
			<Header />
			<Container>
				<div id="begin"></div>
				<Main>
					<ItemBig>404</ItemBig>
					<Item>Мы не можем найти страницу, которую вы ищете.</Item>
					<Item className="notfound__item">
						<p>Страница, которую вы запросили, не найдена в базе данных.</p>
						<p>Скорее всего вы попали на ошибочную ссылку или опечатались при вводе URL</p>
					</Item>
					<Item className="notfound__item">
						<LinkComp link={{ url: "/", name: "Перейти на главную страницу" }} />
					</Item>
				</Main>
			</Container>
			<Footer />
		</>
	);
}

export default PageNotFound;
