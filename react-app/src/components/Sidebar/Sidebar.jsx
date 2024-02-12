import './Sidebar.scss'
import Sale from '../Sale/Sale'
import Adv from '../Adv/Adv'

function Sidebar(props) {
	return (
		<aside className="sidebar">
			{/* <!-- sale card --> */}
			<Sale {...props} />
			{/* <!-- advertisement --> */}
			<Adv className="sidebar__adv" />
		</aside>
	)
}

export default Sidebar