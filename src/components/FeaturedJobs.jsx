import React, { useContext, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import { FeaturedJobContext } from "./Home";

const FeaturedJobs = () => {
	const featuredJobs = useContext(FeaturedJobContext);
	// console.log(featuredJobs);
	const [click, setClick] = useState(false);

	return (
		<section className="max-w-7xl mx-auto my-32 flex flex-col justify-center items-center font-manrope px-4 lg:px-0">
			<h1 className="font-extrabold text-4xl lg:text-5xl px-2 md:px-0">Featured Jobs</h1>
			<p className="font-medium text-base text-gray-500 my-8 px-2 md:px-0 text-center">
				Explore thousands of job opportunities with all the information you need. Its your future
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
				{click
					? featuredJobs.map((featureJob) => <FeaturedJob key={featureJob.id} featureJob={featureJob}></FeaturedJob>)
					: featuredJobs.slice(0, 4).map((featureJob) => <FeaturedJob key={featureJob.id} featureJob={featureJob}></FeaturedJob>)}
			</div>
			<button className={`btn btn-primary w-36 h-12 mt-8 capitalize ${click ? "hidden" : "block"}`} onClick={() => setClick(!click)}>
				See All Jobs
			</button>
		</section>
	);
};

export default FeaturedJobs;
