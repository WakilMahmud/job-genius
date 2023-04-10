import React from "react";

import Banner from "./Banner";
import JobCategories from "./JobCategories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const jobCategories = useLoaderData();
	// console.log(jobCategories);

	return (
		<>
			{/* Banner Section */}
			<section className="bg-indigo-50 font-manrope">
				<Banner />
			</section>

			{/* Job Category List */}
			<section className="max-w-7xl mx-auto my-32 flex flex-col justify-center items-center font-manrope">
				<JobCategories jobCategories={jobCategories}></JobCategories>
			</section>
		</>
	);
};

export default Home;
