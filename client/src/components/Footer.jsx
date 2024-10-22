import Last from "./Last.jsx";
import Help from "./Help.jsx";
import { data } from "../data/rentals.js";
import "../styles/footer.css";

export default function Footer(prop) {
	return (
		<>
			<footer className="block w-full py-8 bg-cream">
				<div className="w-3/4 m-auto">
					{prop.home ? (
						<>
							<div className="text-xl my-4 mx-16 font-bold">Inspiration for future getaways</div>

							<div className="mx-16 flex gap-4 text-gray-600 text-sm foss">
								<a href="" className="pb-3 h-[35px] z-10">
									Popular
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Art & culture
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Outdoors
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Mountains
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Beach
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Unique stays
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Categories
								</a>
								<a href="" className="pb-3 h-[35px] z-10">
									Things to do
								</a>
							</div>
							<div className="w-full h-1 border-b-2 border-gray-300 -translate-y-1 -z-10"></div>
						</>
					) : (
						""
					)}

					<div className="flex justify-start flex-wrap gap-y-5 mx-16 my-6 text-[14px]">
						{data.map((items) => (
							<div className="w-1/6 flex flex-col cursor-pointer" key={items.key}>
								<span className="font-bold">{items.head}</span>
								<span className="text-gray-500">{items.sub}</span>
							</div>
						))}
						<div className="w-1/6 flex flex-col">
							<span className="font-bold cursor-pointer">Show more ↓</span>
						</div>
					</div>

					<div className="w-full h-1 border-b-2 mb-6 border-gray-300 -translate-y-1 -z-10"></div>

					<Help />

					<div className="w-full h-2 border-b-2 my-6 border-gray-300"></div>

					<Last />
				</div>
			</footer>
		</>
	);
}
