import logo from "../assets/icons/im1.png";
import "../styles/title.css";
import { Globe, Menu, CircleUserRound } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Titlebar(prop) {
	const location = useLocation();
	const history = useNavigate();
	const logged = location.state?.logged || false;
	const user = location.state?.user || false;

	function LogOut() {
		history("/", { state: { logged: false, user: null } });
	}
	return (
		<>
			<div className="pt-4 px-16 flex justify-between cursor-default lg:mx-16 lg:grid md:flex md:justify-between sticky">
				{/* hidden lg:grid */}
				{/* LOGO */}
				<div className="flex flex-col w-1/3">
					<div className="flex items-center text-2xl text-oyange font-bold w-fit">
						<img src={logo} className="w-10 h-12 mx-1" alt="logo" /> airbnb
					</div>
					<small className="text-sm text-gray-400">{user.email}</small>
				</div>
				{/* CENTER TITLE  */}
				{prop.home ? (
					<div className=" items-center justify-center flex flex-row w-1/3">
						<div className="rounded-Yxl py-2 px-4 font-bold">Stays</div>

						<div className="mouse rounded-Yxl py-2 px-4 text-gray-500  hover:text-red-600">Experiences</div>
					</div>
				) : (
					""
				)}
				{/* END TITLE  */}
				<div className="flex items-center text-sm font-semibold justify-end  w-1/3">
					<Link to="/post" state={{ log: "logged" }}>
						<div className="mouse rounded-Yxl py-3 px-3 hover:text-red-600">Airbnb your home</div>
					</Link>

					<div
						onClick={() => {
							LogOut();
						}}>
						<div className="mouse rounded-Yxl py-2 px-3 text-gray-500 hover:text-red-600 cursor-pointer">
							<Globe />
						</div>
					</div>

					<Link to={"/login"} state={{ log: "logged" }}>
						{logged || prop.log ? (
							<div className="menumouse text-left rounded-Yxl py-3 px-4 text-gray-500 flex flex-row-reverse justify-between border border-green-600">
								<CircleUserRound className="text-green-600" />
								<Menu className="text-green-600" />
							</div>
						) : (
							<div className="menumouse text-left rounded-Yxl py-3 px-4 text-gray-500 flex flex-row-reverse justify-between border border-red-600">
								<CircleUserRound className="text-red-600" />
								<Menu className="text-red-600" />
							</div>
						)}
					</Link>
				</div>
			</div>
		</>
	);
}
