import Login from "./components/Login.jsx";
import Body from "./components/Body.jsx";
import Layout from "./components/Layout.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
	const [data, setData] = useState("");
	const [logged, setLogged] = useState(true);
	const [home, setHome] = useState(true);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout home={home} data={data} />}>
					<Route index element={<Body setHome={setHome} logged={logged} />} />
					<Route path="/login" element={<Login setLogged={setLogged} setHome={setHome} setData={setData} />} />
				</Route>
			</Routes>
		</>
	);
}
