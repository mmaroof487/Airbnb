import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Body(prop) {
	const [visibility, setVisibility] = useState(false);
	const [card, setCard] = useState([]);
	useEffect(() => {
		getPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	async function getPost() {
		try {
			axios.get("http://localhost:3000/").then((res) => {
				setCard(res.data);
				console.log(card);
			});
		} catch (e) {
			console.log(e);
		}
	}

	prop.setHome(true);
	const [tax, setTax] = useState(false);

	return (
		<div className="px-6">
			<Navbar setTax={setTax} />
			{/* <Card tax={tax} visibility={visibility} card={card} /> */}
			<div className="flex flex-wrap justify-between">
				{card.map((val, index) => (
					<Card key={index} url={val.url} name={val.name} location={val.content} price={val.price} date={val.date} tax={tax} visibility={visibility} num={index} />
				))}
			</div>
			<div
				className="flex justify-between mb-4"
				onClick={() => {
					setVisibility((val) => {
						return !val;
					});
				}}>
				<span className="m-auto rounded-lg bg-black py-2 px-4 inline-block text-white cursor-pointer"> See {visibility ? "more ↓" : "less ↑"}</span>
			</div>
		</div>
	);
}
