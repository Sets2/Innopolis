import './Images.scss'

function Images(props) {
	const { images } = props;
	return (
		<div className="images">
			{
				images.map((item) => {
					return (
						<div className='images__wrapper' key={item.alt}>
							<img className="images__item" src={item.src} alt={item.alt} />
						</div>
					)
				})
			}
		</div>
	)
}

export default Images
