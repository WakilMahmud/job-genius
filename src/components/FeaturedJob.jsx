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
				<div className="ml-8 h-10">
					<img className="h-10" src={company_logo} alt="Category Image" />
				</div>
				<div className="card-body font-manrope">
					<h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
					<p className="text-gray-500 font-semibold text-xl">{company_name}</p>
				</div>
				<div className="font-manrope text-base font-extrabold ml-8 mb-8 -mt-4 text-indigo-500">
					<span className="w-24 h-10 border mr-4 inline-block rounded text-center pt-2">{job_type}</span>
					<span className="w-28 h-10 border inline-block rounded text-center pt-2">{job_duration}</span>
				</div>
				<div className="text-gray-500 font-manrope font-semibold text-xl flex gap-6 mb-8 ml-8">
					<div className="flex h-8 items-center">
						<img src={locationIcon} alt="Location Icon" />
						<p>{location}</p>
					</div>
					<div className="flex h-8 items-center ">
						<img src={dollar} alt="Dollar Icon" />
						<p>Salary : {salary}</p>
					</div>
				</div>
				<Link to={`/job/${id}`}>
					<button className="btn btn-primary w-36 h-12 ml-8 capitalize">View Details</button>
				</Link>
			</div>
		</>
	);
};

export default FeaturedJob;
