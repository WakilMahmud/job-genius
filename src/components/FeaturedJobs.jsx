import React, { useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = ({ featuredJobs }) => {
	const [click, setClick] = useState(false);
	// console.log(featuredJobs);
	return (
		<>
			<h1 className="font-extrabold text-4xl lg:text-5xl px-2 md:px-0">Featured Jobs</h1>
			<p className="font-medium text-base text-gray-500 my-8 px-2 md:px-0">
				Explore thousands of job opportunities with all the information you need. Its your future
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
				{featuredJobs.slice(0, 4).map((featureJob) => (
					<FeaturedJob key={featureJob.id} featureJob={featureJob}></FeaturedJob>
				))}
			</div>
			<button className="btn btn-primary w-36 h-12 mt-8 capitalize" onClick={() => setClick(!click)}>
				See All Jobs
			</button>
		</>
	);
};

export default FeaturedJobs;
