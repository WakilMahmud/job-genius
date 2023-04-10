import React from "react";
import BannerImg from "../assets/Images/banner.png";
const Banner = () => {
	return (
		<section className="bg-indigo-50 font-manrope">
			<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-3 lg:px-0">
				<div className="lg:w-3/5 ">
					<h1 className="font-extrabold text-4xl lg:text-7xl">
						One Step Closer To Your <span className="text-primary">Dream Job</span>
					</h1>
					<p className="text-lg font-medium text-gray-500 my-8">
						Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<button className="w-40 py-3 rounded-lg font-manrope font-extrabold text-xl bg-indigo-700 hover:bg-indigo-600 text-white">
						Get Started
					</button>
				</div>
				<div className="mt-8 lg:mt-0">
					<img className="object-cover" src={BannerImg} alt="Banner Image" />
				</div>
			</div>
		</section>
	);
};

export default Banner;
