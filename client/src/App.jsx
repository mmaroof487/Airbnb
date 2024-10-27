import Login from "./components/Login.jsx";
import Body from "./components/Body.jsx";
import Post from "./components/Post.jsx";
import Booking from "./components/Booking.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<>
			<Routes>
				<Route index element={<Body />} />
				<Route path="/login" element={<Login />} />
				<Route path="/post" element={<Post />} />
				<Route path="/booking" element={<Booking />} />
			</Routes>
		</>
	);
}
