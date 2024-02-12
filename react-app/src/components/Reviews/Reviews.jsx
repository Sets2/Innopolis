import './Reviews.scss'
import '../../scss/_fonts.scss';
import Review from '../Review/Review'
import { useMemo } from "react";

function createReviewsBlock(reviews) {
	const rReviews = [];
	for (let i = 0; i < reviews.length; i++) {
		rReviews.push(<Review review={reviews[i]} key={reviews[i].id} />);
		if (i < reviews.length - 1) rReviews.push(<div className="separator" key={reviews[i].id + "s"} ></div>);
	}
	return rReviews;
}

function Reviews(props) {
	const { reviews } = props;

	// Функция createReviewsBlock формирует массив JSX элементов и зависит только от reviews
	// Формирование производится при каждом рендере компонента даже при отсутствии изменения reviews
	// Применение useMemo позволяет проивести формирование однократно и затем
	// при неизменном значении reviews получать результат без перерасчета
	const rReviews = useMemo(() => {
		return createReviewsBlock(reviews);
	}, [reviews]);

	return (
		<div className="reviews">
			<div className="reviews__header">
				<h3 className="font__h3">Отзывы</h3>
				<h3 className="reviews__counter font__h3"> 425 </h3>
			</div>
			<div className="reviews__items">
				{rReviews}
			</div>
		</div>
	)
}

export default Reviews




