import Login from "./components/Login.jsx";
import Body from "./components/Body.jsx";
import Post from "./components/Post.jsx";
import Layout from "./components/Layout.jsx";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
	const history = useNavigate();
	const [data, setData] = useState("");
	const [logged, setLogged] = useState(false);
	const [home, setHome] = useState(true);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout home={home} data={data} />}>
					<Route index element={<Body setHome={setHome} logged={logged} />} />
					<Route path="/login" element={<Login setLogged={setLogged} setHome={setHome} setData={setData} />} />
					<Route path="/post" element={logged ? <Post /> : history("/login")} />
				</Route>
			</Routes>
		</>
	);
}
