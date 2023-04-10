import React, { useEffect, useState } from "react";
import BannerTitle from "./BannerTitle";
import { getApplyJob } from "../utilities/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
	const { featuredJobs } = useLoaderData();

	const [showJob, setShowJob] = useState([]);

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
			{showJob.map((job) => (
				<AppliedJob key={job.id} job={job}></AppliedJob>
			))}
		</>
	);
};

export default AppliedJobs;
