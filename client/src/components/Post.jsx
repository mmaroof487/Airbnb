import Titlebar from "./Titlebar";
import Footer from "./Footer";
import Alert from "./Alert";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Post() {
	const locate = useLocation();
	const log = locate.state?.log || false;

	console.log(log);
	async function create(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/post", {
					user,
					contact,
					name,
					location,
					url,
					price,
					date,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (e) {
			console.log(e);
		}
	}

	const [user, setUser] = useState("");
	const [contact, setContact] = useState("");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [url, setUrl] = useState("");
	const [price, setPrice] = useState("");
	const [date, setDate] = useState("");

	const content = (
		<>
			<div className="w-1/3 flex justify-center items-center">
				<div>
					<div className="text-4xl text-oyange">AIRBNB IT,</div>{" "}
					<div className="text-2xl">
						You can earn money of your properties <br /> you own and dont use
					</div>
					<small>
						At an estimate of ₹3615 per night you could earn upto <span className="font-bold underline">₹109457</span>{" "}
					</small>
				</div>
			</div>
			<div className="w-2/3  flex justify-center ">
				<div className="w-[766px] rounded-2xl border-2 border-zinc-300 my-8">
					<div className="py-4 flex justify-center border-b-2 border-zinc-100 font-bold text-lg">Airbnb Your Home!</div>
					<form action="/post" onSubmit={create} method="post">
						<div className="flex gap-4 flex-col p-8 pb-4">
							<span className="text-lg font-bold">Welcome to Airbnb Lessor!</span>
							<div>
								<input
									type="text"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									placeholder="Your Name"
									value={user}
									onChange={(e) => {
										setUser(e.target.value);
									}}
								/>
								<input
									type="text"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									placeholder="Contact information"
									value={contact}
									onChange={(e) => {
										setContact(e.target.value);
									}}
								/>
								<input
									type="text"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									placeholder="Airbnb Name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
								<textarea
									className="outline-none w-full h-24 border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 resize-none"
									placeholder="Address"
									value={location}
									onChange={(e) => {
										setLocation(e.target.value);
									}}
								/>
								<input
									type="text"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									placeholder="Image url"
									value={url}
									onChange={(e) => {
										setUrl(e.target.value);
									}}
								/>
								<input
									type="number"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									step={1000}
									placeholder="Price per night"
									value={price}
									onChange={(e) => {
										setPrice(e.target.value);
									}}
								/>
								<input
									type="text"
									className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-3 py-3 px-4 "
									placeholder="Date"
									value={date}
									onChange={(e) => {
										setDate(e.target.value);
									}}
								/>
							</div>
							<input type="submit" value="Continue" className="cursor-pointer w-full bg-oyange rounded-lg py-3 px-4 text-white hover:bg-cream hover:text-oyange transition duration-200 ease-in" />
						</div>
					</form>
				</div>
			</div>
		</>
	);

	return (
		<>
			<Titlebar log={log} />
			<div className="w-full h-1 border-t-2 border-zinc-200 mt-2"> </div>
			{log ? (
				<>
					<div className="flex">{content}</div>
					<Footer />
				</>
			) : (
				<>
					<Alert />
					<div className="flex blur-sm">{content}</div>
				</>
			)}
		</>
	);
}
