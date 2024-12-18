import {
	Search,
	SlidersHorizontal,
	Snowflake,
	House,
	Trees,
	Flame,
	Sailboat,
	Waves,
	Accessibility,
	CableCar,
	Mountain,
	Coffee,
	LandPlot,
	BedDouble,
	TreePalm,
	Castle,
	TowerControl,
} from "lucide-react";
// import { data } from "../data/data.js";
import "../styles/navbar.css";

export default function Navbar(prop) {
	return (
		<>
			<div className="text-sm w-fit rounded-Yxl justify-evenly m-auto mt-3 mist  hidden ml:flex">
				<div className="flex flex-col rounded-Yxl bover border-r-2 border-gray-300 px-3 py-2 pl-5">
					<label htmlFor="first">Where</label>
					<input type="text" id="first" className=" w-56 rounded-Yxl px-2 bg-transparent outline-none cursor-pointer" placeholder="Search destinations" readOnly />
				</div>

				<div className="flex flex-col rounded-Yxl bover border-r-2 border-gray-300 px-3 py-2">
					<label htmlFor="second">Check in</label>
					<input type="text" id="second" className=" w-32 rounded-Yxl px-2 bg-transparent outline-none cursor-pointer" placeholder="Add dates" readOnly />
				</div>

				<div className="flex flex-col rounded-Yxl bover border-r-2 border-gray-300 px-3 py-2">
					<label htmlFor="third">Check out</label>
					<input type="text" id="third" className=" w-32 rounded-Yxl px-2 bg-transparent outline-none cursor-pointer" placeholder="Add dates" readOnly />
				</div>

				<div className="flex flex-row items-center rounded-Yxl bover px-3 py-2">
					<div className="flex flex-col">
						<label htmlFor="fourth">Who</label>
						<input type="text" id="fourth" className=" w-56 rounded-Yxl px-2 bg-transparent outline-none cursor-pointer" placeholder="Add guests" readOnly />
					</div>
					<div className="bg-oyange size-12 p-3 rounded-full cursor-pointer text-white hover:bg-cream hover:text-oyange transition duration-200 ease-in">
						<Search />
					</div>
				</div>
			</div>

			{/* responsive */}

			<div className="flex flex-row items-center  ml:hidden">
				<div className="w-5/6 mt-4 mx-5 rounded-Yxl m-auto mist">
					<div className="flex flex-row items-center rounded-Yxl bover">
						<div className="size-12 p-3 mx-3 rounded-full">
							<Search />
						</div>
						<div className="flex flex-col gap-1 my-1 text-xs">
							<label htmlFor="fourth">Anywhere</label>
							<input type="text" id="fourth" className=" w-44 rounded-Yxl focus:outline-0 outline-none bg-transparent" placeholder="Add dates . Add guests" />
						</div>
					</div>
				</div>
				<div className="inline-block p-2 rounded-full mist mt-4 ring-1 ring-gray-400">
					<SlidersHorizontal />
				</div>
			</div>

			<div className="w-full h-2 border-b-2 my-6 border-zinc-200"></div>

			<div className="px-2 h-14 flex items-center gap-5 justify-between font-bold text-xs overflow-hidden lg:gap-0 lg:justify-evenly lg:overflow-auto">
				<div className="flex flex-row">
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Snowflake />
						<span className=" text-gray-600">Artic</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<House />
						<span className=" text-gray-600">House</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Trees />
						<span className=" text-gray-600">Forest</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Flame />
						<span className=" text-gray-600">Trending</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Sailboat />
						<span className=" text-gray-600">Shore</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Waves />
						<span className=" text-gray-600">Sea</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Accessibility />
						<span className=" text-gray-600">Accessible</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<CableCar />
						<span className=" text-gray-600">Ski</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Mountain />
						<span className=" text-gray-600">Mountain</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Coffee />
						<span className=" text-gray-600">Breakfast</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<LandPlot />
						<span className=" text-gray-600">Golf</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<BedDouble />
						<span className=" text-gray-600">Double</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<TreePalm />
						<span className=" text-gray-600">Artic</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<Castle />
						<span className=" text-gray-600">Ancient</span>
					</div>
					<div className=" flex flex-col justify-center items-center w-20 cursor-pointer hover:border-b-2 border-gray-500">
						<TowerControl />
						<span className=" text-gray-600">Tower</span>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="flex items-center px-4 py-2 rounded-md ring-1 ring-gray-400 cursor-pointer font-bold">
						<SlidersHorizontal />
						Filters
					</div>
					<div className="flex items-center px-4 py-2 rounded-md ring-1 ring-gray-400 cursor-pointer font-bold">
						<label htmlFor="tax" className="cursor-pointer">
							Display total before taxes
						</label>
						<input
							type="checkbox"
							id="tax"
							className="size-4 ml-2 cursor-pointer"
							onChange={() => {
								prop.setTax((val) => {
									return !val;
								});
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
