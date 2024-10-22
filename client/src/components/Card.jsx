import { cards } from "../data/cards.js";
import { Heart, Star } from "lucide-react";
import "../styles/card.css";

export default function Card() {
	return (
		<main className="mx-10 flex justify-evenly">
			<div className="flex flex-wrap justify-evenly ml:justify-evenly ml:mx-2 my-6">
				{cards.map((item, index) => (
					<div className="flex rounded-lg flex-col sl:w-[300px] ml:w-[350px] mr-1" key={index}>
						<div className="relative left-[12px] lg:right-10 top-10 size-6 z-7 peer hover:scale-125 ease-in-out duration-200 cursor-pointer">
							<Heart className="text-white" />
						</div>
						<img src={item.icon} alt="" className="w-[100%] h-[300px] rounded-lg bg-cover" />
						<div className="my-2">
							<div className="flex justify-between">
								<span>{item.address}</span>
								<span className="flex flex-row items-center">
									{item.rating} <Star className="w-5" />
								</span>
							</div>
							<div className="text-gray-500 text-sm">{item.near}</div>
							<div className="text-gray-500 text-sm">{item.date}</div>
							<div className="font-bold">{item.price}</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
