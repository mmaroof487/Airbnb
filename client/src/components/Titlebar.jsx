import logo from "../assets/icons/im1.png";
import "../styles/title.css";
import { Globe, Menu, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Titlebar(prop) {
	return (
		<>
			<div className="pt-4 px-16 flex justify-between cursor-default lg:mx-16 lg:grid md:flex md:justify-between">
				{/* hidden lg:grid */}
				{/* LOGO */}
				<div className="flex flex-col w-1/3">
					<div className="flex items-center text-2xl text-oyange font-bold w-fit">
						<img src={logo} className="w-10 h-12 mx-1" alt="logo" /> airbnb
					</div>
					<small className="text-sm text-gray-400">{prop.data.email}</small>
				</div>
				{/* CENTER TITLE  */}
				{prop.home ? (
					<div className=" items-center justify-center flex flex-row w-1/3">
						<Link to={"/"}>
							<div className="rounded-Yxl py-2 px-4 font-bold">Stays</div>
						</Link>

						<Link>
							<div className="mouse rounded-Yxl py-2 px-4 text-gray-500  hover:text-red-600">Experiences</div>
						</Link>
					</div>
				) : (
					""
				)}
				{/* END TITLE  */}
				<div className="flex items-center text-sm font-semibold justify-end  w-1/3">
					<Link>
						<div className="mouse rounded-Yxl py-3 px-3 hover:text-red-600">Airbnb your home</div>
					</Link>

					<Link>
						<div className="mouse rounded-Yxl py-2 px-3 text-gray-500 hover:text-red-600">
							<Globe />
						</div>
					</Link>

					<Link to={"/login"}>
						<div className="menumouse text-left rounded-Yxl py-3 px-4 text-gray-500 flex flex-row-reverse justify-between border border-gray-300">
							<CircleUserRound />
							<Menu />
						</div>
					</Link>
				</div>
			</div>
			{prop.home ? "" : <div className="w-full h-1 border-t-2 border-zinc-200 mt-1"> </div>}
		</>
	);
}
