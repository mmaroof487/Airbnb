import Titlebar from "./Titlebar";
import Footer from "./Footer";
import { Mail, Facebook, Apple, Paperclip } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [reg, setReg] = useState(true);
	const [email, setEmail] = useState(""); //mmaroof487@gmail.com
	const [password, setPassword] = useState(""); //ilu>c8csab
	const history = useNavigate();

	async function login(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/login", {
					email,
					password,
				})
				.then((res) => {
					history("/", { state: { logged: true, user: res.data } });
				});
		} catch (e) {
			console.log(e);
		}
	}

	async function register(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/register", {
					email,
					password,
				})
				.then((res) => {
					history("/", { state: { logged: true, user: res.data } });
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<Titlebar />
			<div className="w-full h-1 border-t-2 border-zinc-200 mt-1"> </div>
			<div className="w-full  flex justify-center items-center ">
				<div className="w-[566px] rounded-2xl border-2 border-zinc-300 my-20">
					{/* form */}
					<div className="py-4 flex justify-center border-b-2 border-zinc-100 font-bold text-lg">Log in or Sign up</div>

					{reg ? (
						<form action="/login" onSubmit={login} method="post">
							<div className="flex gap-4 flex-col p-8 pb-4">
								<span className="text-lg font-bold">Welcome to Airbnb!</span>
								<div>
									<input
										type="email"
										className="outline-none w-full border-2 border-zinc-400 rounded-t-lg py-3 px-4 border-b-0"
										placeholder="Email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<input
										type="password"
										className="outline-none w-full border-2 border-zinc-400 rounded-b-lg py-3 px-4"
										placeholder="Password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<small className="text-xs text-oyange block font-bold">
										Dont have an account?{" "}
										<a
											className="underline cursor-pointer"
											onClick={() => {
												setReg(false);
											}}>
											Sign up here
										</a>
									</small>
									<small className="text-xs">
										We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="underline">Privacy Policy</span>
									</small>
								</div>
								<input type="submit" value="Continue" className="cursor-pointer w-full bg-oyange rounded-lg py-3 px-4 text-white hover:bg-cream hover:text-oyange transition duration-200 ease-in" />
							</div>
						</form>
					) : (
						<form action="/login" onSubmit={register} method="post">
							<div className="flex gap-4 flex-col p-8 pb-4">
								<span className="text-lg font-bold">Register your airbnb account here</span>
								<div>
									<input
										type="email"
										className="outline-none w-full border-2 border-zinc-400 rounded-t-lg py-3 px-4 border-b-0"
										placeholder="Email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<input
										type="password"
										className="outline-none w-full border-2 border-zinc-400 rounded-b-lg py-3 px-4"
										placeholder="Set password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<small className="text-xs text-oyange block">
										Already have an account?{" "}
										<a
											className="underline cursor-pointer"
											onClick={() => {
												setReg(true);
											}}>
											Login here
										</a>
									</small>
									<small className="text-xs">
										We’ll call or text you to confirm your number. Standard message and data rates apply. <span className="underline">Privacy Policy</span>
									</small>
								</div>
								<input type="submit" value="Register" className="cursor-pointer w-full bg-oyange rounded-lg py-3 px-4 text-white hover:bg-cream hover:text-oyange transition duration-200 ease-in" />
							</div>
						</form>
					)}

					<div className="w-full m-auto flex justify-center items-center px-4">
						<div className="w-[45%] h-1 border-t-2 border-zinc-200 inline-block"> </div>
						<span className="text-zinc-500 mx-2">or</span>
						<div className="w-[45%] h-1 border-t-2 border-zinc-200 inline-block"> </div>
					</div>
					<div className="p-8 flex flex-col gap-4">
						<div className="flex justify-between  border-2 border-gray-700 py-3 px-4 w-full rounded-lg cursor-pointer">
							<span>
								<Facebook />
							</span>
							<span className="w-4/6">Continue with Facebook</span>
						</div>
						<div className="flex justify-between  border-2 border-gray-700 py-3 px-4 w-full rounded-lg cursor-pointer">
							<span>
								<Paperclip />
							</span>
							<span className="w-4/6">Continue with Google</span>
						</div>
						<div className="flex justify-between  border-2 border-gray-700 py-3 px-4 w-full rounded-lg cursor-pointer">
							<span>
								<Apple />
							</span>
							<span className="w-4/6">Continue with Apple</span>
						</div>
						<div className="flex justify-between  border-2 border-gray-700 py-3 px-4 w-full rounded-lg cursor-pointer">
							<span>
								<Mail />
							</span>
							<span className="w-4/6">Continue with Email</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
