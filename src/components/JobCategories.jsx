import React, { useContext } from "react";
import { JobCategoryContext } from "./Home";

const JobCategories = () => {
	const jobCategories = useContext(JobCategoryContext);
	// console.log(jobCategories);
	return (
		<section className="max-w-7xl mx-auto my-32 flex flex-col justify-center items-center font-manrope">
			<h1 className="font-extrabold text-4xl lg:text-5xl px-2 md:px-0 text-center">Job Category List</h1>
			<p className="font-medium text-base text-gray-500 my-8 px-2 md:px-0 text-center">
				Explore thousands of job opportunities with all the information you need. Its your future
			</p>
			<div className="flex flex-col lg:flex-row items-center gap-6 w-full">
				{jobCategories.map((jobCategory) => {
					const { id, category_logo, category_name, jobs_available } = jobCategory;
					return (
						<div className="card w-96 bg-indigo-50 flex flex-col pt-10 " key={id}>
							<div className="px-8 ">
								<img className="bg-indigo-200 p-4 rounded-lg" src={category_logo} alt="Category Image" />
							</div>
							<div className="card-body">
								<h2 className="card-title">{category_name}</h2>
								<p>{jobs_available} Jobs Available</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default JobCategories;
