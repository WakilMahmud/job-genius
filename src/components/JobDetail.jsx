import React from "react";
import Dollar from "../assets/Icons/Frame-5.png";
import Title from "../assets/Icons/Frame-1.png";
import Phone from "../assets/Icons/Frame-2.png";
import Email from "../assets/Icons/Frame-3.png";
import Address from "../assets/Icons/Frame-4.png";

const JobDetail = ({ job }) => {
	// console.log(job);
	const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title } = job;

	return (
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center  my-32 ">
			<div className="font-manrope text-gray-500 w-3/5">
				<p className="my-6">
					<span className="font-extrabold text-black">Job Description: </span>
					{job_description}
				</p>
				<p className="my-6">
					<span className="font-extrabold text-black">Job Responsibility: </span>
					{job_responsibility}
				</p>
				<p className="my-6">
					<span className="font-extrabold text-black">Job Responsibility: </span>
					<br />
					{educational_requirements}
				</p>
				<p className="my-6">
					<span className="font-extrabold text-black">Experiences: </span>
					<br />
					{experiences}
				</p>
			</div>
			<div className="w-2/5 font-manrope">
				<div className="bg-indigo-50 rounded-lg  p-8 ">
					<h1 className="text-xl font-bold mb-6">Job Details</h1>
					<hr className="text-gray-500" />
					<div className="flex gap-2 my-6">
						<img className="h-6" src={Dollar} alt="Dollar Icon" />
						<p className="text-black-400 font-semibold">
							Salary: <span className="text-gray-500 font-normal">{salary} (Per Month) </span>
						</p>
					</div>
					<div className="flex gap-2 my-6">
						<img className="h-6" src={Title} alt="Title Icon" />
						<p className="text-black-400 font-semibold">
							Job Title: <span className="text-gray-500 font-normal">{job_title}</span>
						</p>
					</div>

					<div>
						<h1 className="text-xl font-bold mt-8 mb-6">Contact Information</h1>
						<hr className="text-gray-500" />
						<div className="flex gap-2 my-6">
							<img className="h-6" src={Phone} alt="Phone Icon" />
							<p className="text-black-400 font-semibold">
								Phone: <span className="text-gray-500 font-normal">{job["contact_information"]?.phone}</span>
							</p>
						</div>
						<div className="flex gap-2 my-6">
							<img className="h-6" src={Email} alt="Email Icon" />
							<p className="text-black-400 font-semibold">
								Email: <span className="text-gray-500 font-normal">{job["contact_information"]?.email}</span>
							</p>
						</div>
						<div className="flex gap-2 my-6">
							<img className="h-6" src={Address} alt="Address Icon" />
							<p className="text-black-400 font-semibold">
								Address: <span className="text-gray-500 font-normal">{job["contact_information"]?.address}</span>
							</p>
						</div>
					</div>
				</div>
				<button className="btn bg-indigo-500 w-full h-16 mt-6 rounded-lg text-white font-extrabold">Apply Now</button>
			</div>
		</div>
	);
};

export default JobDetail;
