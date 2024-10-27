import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(prop) {
	const [click, setClick] = useState(false);

	const card = (
		<div className="flex flex-wrap flex-col justify-evenly ml:justify-evenly ml:mx-2 my-6">
			<div className="flex rounded-lg flex-col sl:w-[300px] ml:w-[350px] mr-1">
				<div className="relative left-[12px] lg:right-10 top-10 size-6 z-7 peer ">
					<Heart className="text-white hover:text-red-500   hover:scale-125 ease-in-out duration-200 cursor-pointer" />
				</div>
				<img
					src={prop.url}
					alt={prop.url}
					className="w-[100%] h-[300px] rounded-lg bg-cover"
					onClick={() => {
						setClick((val) => {
							return !val;
						});
					}}
				/>
				<div className="my-2">
					<div className="flex justify-between">
						<span>{prop.name}</span>
						<span className="flex flex-row items-center">
							<Star className="w-5 hover:text-red-500" />
						</span>
					</div>
					{click ? (
						<div className=" flex justify-between items-start mt-[4px]">
							<div className="flex flex-col ">
								<Link to={"/booking"} state={{ log: prop.logged, name: prop.name, url: prop.url, location: prop.location, date: prop.date, price: prop.price }}>
									<div className="cursor-pointer bg-oyange rounded-lg py-2 px-4 inline-block text-white text-center hover:bg-cream hover:text-oyange transition duration-200 ease-in">Book now</div>
								</Link>
								<div className="text-sm">
									at ₹{prop.price}/night on {prop.date}
								</div>
							</div>
							<div className="flex flex-col">
								<div>
									<Star className="w-5 inline-block hover:text-red-500" />
									<Star className="w-5  inline-block hover:text-red-500" />
									<Star className="w-5  inline-block hover:text-red-500" />
									<Star className="w-5  inline-block hover:text-red-500" />
									<Star className="w-5  inline-block hover:text-red-500" />
								</div>
								<div className="text-zinc-700 text-sm">Rate this airbnb?</div>
							</div>
						</div>
					) : (
						<div>
							<div className="text-gray-500 text-sm">{prop.location}</div>
							<div className="text-gray-500 text-sm">{prop.date} </div>
							<div className="font-bold">₹{prop.tax ? Math.round(prop.price / 1.12) : prop.price} /night</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
	return <>{prop.visibility ? (prop.num > 7 ? "" : card) : card}</>;
}
