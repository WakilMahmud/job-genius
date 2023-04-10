import React, { createContext } from "react";

import Banner from "./Banner";
import JobCategories from "./JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

export const JobCategoryContext = createContext([]);
export const FeaturedJobContext = createContext([]);

const Home = () => {
	const { jobCategories, featuredJobs } = useLoaderData();
	// console.log(jobCategories);
	// console.log(featuredJobs);

	return (
		<>
			<JobCategoryContext.Provider value={jobCategories}>
				<FeaturedJobContext.Provider value={featuredJobs}>
					<Banner />
					<JobCategories></JobCategories>
					<FeaturedJobs></FeaturedJobs>
				</FeaturedJobContext.Provider>
			</JobCategoryContext.Provider>
		</>
	);
};

export default Home;
