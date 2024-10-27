import Navbar from "./Navbar.jsx";
import Titlebar from "./Titlebar.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

export default function Body() {
	const location = useLocation();
	const log = location.state?.logged || false;

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
			});
		} catch (e) {
			console.log(e);
		}
	}

	const [tax, setTax] = useState(false);

	return (
		<>
			<Titlebar home={true} log={log} />
			<div className="px-6">
				<Navbar setTax={setTax} />
				{/* <Card tax={tax} visibility={visibility} card={card} /> */}
				<div className="flex flex-wrap justify-between">
					{card.map((val, index) => (
						<Card key={index} url={val.url} name={val.name} location={val.location} price={val.price} date={val.date} tax={tax} visibility={visibility} num={index} logged={log} />
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
			<Footer home={true} />
		</>
	);
}
