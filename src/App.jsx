import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Toaster />
			<div className="bg-indigo-50">
				<Navbar />
			</div>
			<div className="min-h-[calc(100vh-112px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
