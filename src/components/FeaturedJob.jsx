import React from "react";

import locationIcon from "../assets/Icons/Location.png";
import dollar from "../assets/Icons/Frame-5.png";
import { Link } from "react-router-dom";

const FeaturedJob = ({ featureJob }) => {
	// console.log(featureJob);
	const { id, company_logo, job_title, company_name, job_type, location, job_duration, salary } = featureJob;
	return (
		<>
			<div className="card flex flex-col py-10 border ">
				<div className="ml-8 h-14 mb-4">
					<img className="h-full w-32" src={company_logo} alt="Category Image" />
				</div>
				<div className="card-body font-manrope">
					<h2 className="card-title font-extrabold text-2xl mb-2">{job_title}</h2>
					<p className="text-gray-500 font-medium text-xl">{company_name}</p>
				</div>
				<div className="font-manrope text-base font-extrabold ml-8 mb-4  text-indigo-500">
					<span className="w-24 h-10 border border-indigo-500 mr-4 inline-block rounded text-center pt-2">{job_type}</span>
					<span className="w-28 h-10 border border-indigo-500 inline-block rounded text-center pt-2">{job_duration}</span>
				</div>
				<div className="text-gray-500 font-manrope  text-xl flex flex-col md:flex-row gap-6 mb-6 ml-8">
					<div className="flex h-8 items-center gap-2 mr-4">
						<img className="grayscale" src={locationIcon} alt="Location Icon" />
						<p className="text-xl ">{location}</p>
					</div>
					<div className="flex h-8 items-center -mt-4 md:mt-0 gap-2">
						<img className="grayscale" src={dollar} alt="Dollar Icon" />
						<p className="text-xl">Salary : {salary}</p>
					</div>
				</div>
				<Link to={`/job/${id}`}>
					<button className="w-36 h-12 ml-8 font-bold text-white text-lg rounded-lg  bg-indigo-600 hover:bg-indigo-700">View Details</button>
				</Link>
			</div>
		</>
	);
};

export default FeaturedJob;
