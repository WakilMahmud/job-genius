import React from "react";

import Banner from "./Banner";
import JobCategories from "./JobCategories";

const Home = () => {
	return (
		<>
			{/* Banner Section */}
			<section className="bg-indigo-50 font-manrope">
				<Banner />
			</section>
			<section className="max-w-7xl mx-auto my-32 flex flex-col justify-center items-center font-manrope">
				<JobCategories></JobCategories>
			</section>
		</>
	);
};

export default Home;
