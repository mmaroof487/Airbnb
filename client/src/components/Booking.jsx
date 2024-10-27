import Titlebar from "./Titlebar";
import Footer from "./Footer";
import Alert from "./Alert";
import { MapPin, Calendar, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Booking() {
	const locate = useLocation();
	const log = locate.state?.log || false;
	const location = locate.state?.location;
	const url = locate.state?.url;
	const price = locate.state?.price;
	const date = locate.state?.date;
	const name = locate.state?.name;

	const [submit, setSubmit] = useState(false);
	const [confirm, setConfirm] = useState(false);
	function handleConfirm() {
		setConfirm((val) => {
			return !val;
		});
		setSubmit(false);
	}
	const content = (
		<div className="flex">
			<div className="w-1/2 flex justify-center items-center px-12">
				<div>
					<div className="text-4xl text-oyange mb-4">{name}</div>
					<img src={url} alt="" className="rounded-lg my-4 w-[695px]" />
					<span className="text-lg flex items-center gap-2">
						<MapPin className="inline-block" />
						{location} <span className="font-bold underline">@₹{price}/night</span> <Calendar className="inline-block" />
						from: {date}
					</span>
				</div>
			</div>
			<div className="w-1/2  flex justify-center items-center">
				<div className="w-[766px] rounded-2xl border-2 border-zinc-300 my-32">
					<div className="py-4 flex justify-center border-b-2 border-zinc-100 font-bold text-lg">Book your Airbnb!</div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<div className="flex gap-4 flex-col p-8">
							<span className="text-lg font-bold">Welcome to Airbnb Lessee!</span>
							<div>
								<input type="text" className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-4 py-3 px-4 " placeholder="Name" />
								<input type="text" className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-4 py-3 px-4 " placeholder="Email" />
								<input type="text" className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-4 py-3 px-4 " step={1000} placeholder="Phone Number" />
								<input type="text" className="outline-none w-full border-2 border-zinc-400 rounded-lg mb-4 py-3 px-4 " placeholder="UPI ID" />
							</div>
							<input
								type="submit"
								value="Book Now!"
								className="cursor-pointer w-full bg-oyange rounded-lg py-3 px-4 mb-4 text-white hover:bg-cream hover:text-oyange transition duration-200 ease-in "
								onClick={() => {
									setSubmit((val) => {
										return !val;
									});
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Titlebar log={log} />
			<div className="w-full h-1 border-t-2 border-zinc-200 mt-2"> </div>
			{confirm ? (
				<>
					<div className="w-full flex justify-center text-2xl text-green-700 gap-4 mt-8 -mb-8">
						<CircleCheckBig /> Your Booking is Confirmed! <small>Thank you for using Airbnb service</small>
					</div>
				</>
			) : (
				""
			)}
			{log ? (
				<>
					{submit ? (
						<>
							<div className="w-full h-screen absolute z-50 ">
								<div className="w-1/3 h-52 rounded-lg bg-zinc-100 absolute m-auto top-1/3 left-1/3 ">
									<div className="text-oyange flex justify-between px-4 pt-6">
										<div>Alert!</div>
									</div>
									<div className="w-full h-1 border-t-2 border-zinc-200 mt-1"> </div>
									<div className="px-4 py-6 text-oyange">You will be receiving a transaction request on your UPI, please proceed to payment for confirmation</div>
									<div className="text-end">
										<div
											className="bg-oyange text-white inline-block p-2 rounded-lg mx-4 cursor-pointer"
											onClick={() => {
												handleConfirm();
											}}>
											Confirm
										</div>
									</div>
								</div>
							</div>
							<div className="flex blur-sm">{content}</div>
						</>
					) : (
						<>
							<div className="flex ">{content}</div>

							<Footer />
						</>
					)}
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
