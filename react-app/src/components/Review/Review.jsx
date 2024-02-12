import './Review.scss'
import '../../scss/_fonts.scss';
import { useMemo } from "react";

function createStarBlock(rating) {
	const rStars = [];
	let i = 1;
	for (i = 1; i <= rating; i++)
		rStars.push(<img className="review__star" src="/media/images/star.svg" alt="Полная" key={i} />)
	for (let j = i; j <= 5; j++)
		rStars.push(<img className="review__star" src="/media/images/star-empty.svg" alt="Пустая" key={j} />)
	return rStars;
}

function Review(props) {
	const { review } = props;

	// Функция createStarBlock формирует массив JSX элементов и зависит только от review.rating
	// Формирование производится при каждом рендере компонента даже при отсутствии изменения review.rating
	// Применение useMemo позволяет проивести формирование однократно и затем
	// при неизменном значении review.rating получать результат без перерасчета
	const rStars = useMemo(() => {
		return createStarBlock(review.rating);
	}, [review.rating]);

	return (
		<div className="review">
			<img className="review__img" src={review.photo}
				alt="фото пользователя" />
			< div className="review__content" >
				<h4 className="font__h4">{review.name}</h4>
				<div className="review__estimation">
					{rStars}
				</div>
				<div className="review__items">
					<div className="review__item">
						<div><b>Опыт использования:</b>{review.experience}</div>
					</div>
					<div className="review__item">
						<div><b>Достоинства:</b></div>
						<div>{review.advantage}</div>
					</div>
					<div className="review__item">
						<div><b>Недостатки:</b></div>
						<div>{review.disadvantages}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review;



