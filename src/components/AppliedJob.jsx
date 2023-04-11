import React from "react";

import locationIcon from "../assets/Icons/Location.png";
import dollar from "../assets/Icons/Frame-5.png";

import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
	// console.log(job);
	const { id, company_logo, job_title, company_name, job_type, location, job_duration, salary } = job;

	return (
		<>
			<div className="card flex flex-col md:flex-row justify-between py-10 border my-4 ">
				<div className="flex flex-col md:flex-row items-center ">
					<div className="ml-8 rounded-lg  w-60 h-60 flex justify-center items-center  bg-slate-100">
						<img className="px-10 " src={company_logo} alt="Category Image" />
					</div>
					<div>
						<div className="card-body font-manrope">
							<h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
							<p className="text-gray-500 font-semibold text-xl">{company_name}</p>
						</div>
						<div className="font-manrope text-base font-extrabold ml-8 mb-4 -mt-4 text-indigo-500">
							<span className="w-24 h-10 border border-indigo-500 mr-4 inline-block rounded text-center pt-2">{job_type}</span>
							<span className="w-28 h-10 border border-indigo-500 inline-block rounded text-center pt-2">{job_duration}</span>
						</div>
						<div className="text-gray-500 font-manrope font-semibold text-xl flex flex-col md:flex-row gap-2 md:gap-6 ml-8">
							<div className="flex h-8 items-center gap-2 mr-4">
								<img className="grayscale" src={locationIcon} alt="Location Icon" />
								<p className="text-xl font-medium">{location}</p>
							</div>
							<div className="flex h-8 items-center gap-2">
								<img className="grayscale" src={dollar} alt="Dollar Icon" />
								<p className="text-xl font-medium">Salary : {salary}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center w-1/4  mx-auto mt-8 md:mt-0 md:mr-3">
					<Link to={`/job/${id}`}>
						<button className="w-36 h-12 ml-8 font-bold text-white text-lg rounded-lg  bg-indigo-600 hover:bg-indigo-700">View Details</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default AppliedJob;
