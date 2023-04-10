import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="bg-indigo-50">
				<Navbar />
			</div>

			<Outlet />
			<Footer />
		</>
	);
}

export default App;
