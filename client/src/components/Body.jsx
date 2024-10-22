import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import "../styles/body.css";

export default function Body(prop) {
	prop.setHome(true);
	return (
		<div className="px-6">
			<Navbar />
			<Card />
		</div>
	);
}
