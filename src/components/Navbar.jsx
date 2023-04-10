import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar max-w-7xl mx-auto py-8">
			<div className="navbar-start">
				<a href="#" className="text-3xl font-manrope font-extrabold">
					Job Genius
				</a>
			</div>
			<div className="navbar-center flex font-manrope font-medium text-base text-gray-500">
				<ul className="menu menu-horizontal px-1">
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
				<button className="w-48 py-2 rounded-lg font-manrope font-extrabold text-xl bg-primary text-white">Start Applying</button>
			</div>
		</nav>
	);
};

export default Navbar;
