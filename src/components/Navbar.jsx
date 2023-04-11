import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const [isClick, setIsClick] = useState(true);
	return (
		<nav className="navbar max-w-7xl mx-auto py-10 md:py-8">
			<div className="navbar-start">
				<a href="#" className="text-2xl md:text-3xl font-manrope font-extrabold">
					Job Genius
				</a>
			</div>

			<Bars3Icon className="md:hidden h-14" onClick={() => setIsClick(!isClick)}></Bars3Icon>
			<div
				className={`navbar-center  ${
					isClick ? "hidden" : "relative top-14 md:top-auto"
				} md:flex font-manrope font-medium text-base text-gray-500 my-8 `}
			>
				<ul className="menu  md:menu-horizontal px-1 ">
					<li className="mr-1">
						<Link to="/">Home</Link>
					</li>
					<li className="mr-1">
						<Link to="/statistics">Statistics</Link>
					</li>
					<li className="mr-1">
						<Link to="/appliedJobs">Applied Jobs</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<button className=" md:w-48 p-2 rounded-lg font-manrope font-extrabold text-base md:text-xl bg-indigo-600 hover:bg-indigo-700 text-white">
					Start Applying
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
