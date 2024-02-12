import './Footer.scss';
import '../../scss/_fonts.scss';
import '../../scss/_container.scss';

import LinkComp from '../LinkComp/LinkComp'
import { useCurrentDate } from "@kundinos/react-hooks";

function Footer() {
	const currentDate = useCurrentDate({ every: "day" });
	const fullYear = currentDate.getFullYear();

	return (
		<footer className="footer-common">
			<div className="container">
				<div className="container__footer footer">
					<div className="footer__title">
						<div>
							<b>© ООО «<span className="footer__company">Мой</span>
								Маркет», 2008-{fullYear}</b>
						</div>
						<div>Для уточнения информации звоните по номеру
							<LinkComp link={{
								url: "tel:+79000000000", name: "+7 900 000 0000", target: "_self",
								option: ""
							}} />,<span className='footer__br'><br /></span>а предложения по сотрудничеству отправляйте на почту
							<LinkComp link={{ url: "mailto:partner@mymarket.com", name: " partner@mymarket.com", target: "_self", option: "" }} />
						</div>
					</div>
					<div className="footer_ref">
						<LinkComp link={{ url: "#begin", name: "Наверх", target: "_self" }} />
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;