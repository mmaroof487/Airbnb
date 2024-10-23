import { Heart, Star } from "lucide-react";

export default function Card(prop) {
	return (
		<>
			{prop.visibility ? (
				prop.num > 7 ? (
					""
				) : (
					<div className="flex flex-wrap justify-evenly ml:justify-evenly ml:mx-2 my-6">
						<div className="flex rounded-lg flex-col sl:w-[300px] ml:w-[350px] mr-1">
							<div className="relative left-[12px] lg:right-10 top-10 size-6 z-7 peer hover:scale-125 ease-in-out duration-200 cursor-pointer">
								<Heart className="text-white" />
							</div>
							<img src={prop.url} alt={prop.url} className="w-[100%] h-[300px] rounded-lg bg-cover" />
							<div className="my-2">
								<div className="flex justify-between">
									<span>{prop.name}</span>
									<span className="flex flex-row items-center">
										<Star className="w-5" />
									</span>
								</div>
								<div className="text-gray-500 text-sm">{prop.location}</div>
								<div className="text-gray-500 text-sm">{prop.date} </div>
								<div className="font-bold">₹{prop.tax ? Math.round(prop.price * 1.12) : prop.price} /night</div>
							</div>
						</div>
					</div>
				)
			) : (
				<div className="flex flex-wrap justify-evenly ml:justify-evenly ml:mx-2 my-6">
					<div className="flex rounded-lg flex-col sl:w-[300px] ml:w-[350px] mr-1">
						<div className="relative left-[12px] lg:right-10 top-10 size-6 z-7 peer hover:scale-125 ease-in-out duration-200 cursor-pointer">
							<Heart className="text-white" />
						</div>
						<img src={prop.url} alt={prop.url} className="w-[100%] h-[300px] rounded-lg bg-cover" />
						<div className="my-2">
							<div className="flex justify-between">
								<span>{prop.name}</span>
								<span className="flex flex-row items-center">
									<Star className="w-5" />
								</span>
							</div>
							<div className="text-gray-500 text-sm">{prop.location}</div>
							<div className="text-gray-500 text-sm">{prop.date}</div>
							<div className="font-bold">₹{prop.tax ? Math.round(prop.price * 1.12) : prop.price} /night</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
