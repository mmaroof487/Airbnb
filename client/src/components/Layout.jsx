import { Outlet } from "react-router-dom";
import Titlebar from "./Titlebar";
import Footer from "./Footer";
export default function Layout(prop) {
	return (
		<>
			<Titlebar home={prop.home} data={prop.data} />
			<Outlet />
			<Footer home={prop.home} />
		</>
	);
}
