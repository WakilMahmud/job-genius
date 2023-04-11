import React, { useEffect, useState } from "react";
import BannerTitle from "./BannerTitle";
import { getApplyJob } from "../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
	const { featuredJobs } = useLoaderData();

	const [showJob, setShowJob] = useState([]);
	const [filteredJob, setFilteredJob] = useState([]);
	const [jobType, setJobType] = useState(false);

	const filterJob = (type) => {
		// console.log(type);
		type && setJobType(true);

		const filterJobs = showJob.filter((jb) => jb.job_type == type);
		setFilteredJob(filterJobs);
	};

	useEffect(() => {
		const storedJobs = getApplyJob();
		// console.log(storedJobs);
		const appliedJobs = [];

		for (const id in storedJobs) {
			const appliedJob = featuredJobs.find((jb) => jb.id == id);
			if (appliedJob) {
				appliedJobs.push(appliedJob);
			}
		}
		// console.log(appliedJobs);
		setShowJob(appliedJobs);
	}, []);

	return (
		<>
			<BannerTitle>Applied Jobs</BannerTitle>

			<div className="max-w-7xl mx-auto flex flex-col my-32">
				{showJob.length > 0 && (
					<div className="font-manrope text-white w-1/4 ml-auto">
						<button className="w-24 h-10 border bg-indigo-600 mr-4 rounded text-center py-2" onClick={() => filterJob("Remote")}>
							Remote
						</button>
						<button className="w-24 h-10 border bg-indigo-600  rounded text-center py-2" onClick={() => filterJob("Onsite")}>
							Onsite
						</button>
					</div>
				)}
				{jobType === true
					? filteredJob.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)
					: showJob.map((job) => <AppliedJob key={job.id} job={job}></AppliedJob>)}
			</div>
		</>
	);
};

export default AppliedJobs;
