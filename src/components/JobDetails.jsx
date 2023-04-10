import React, { useEffect, useState } from "react";
import BannerTitle from "./BannerTitle";
import { useLoaderData, useParams } from "react-router-dom";
import JobDetail from "./JobDetail";

const JobDetails = () => {
	const [job, setJob] = useState({});

	const dynamicId = useParams();
	// console.log(dynamicId.id);

	const { featuredJobs } = useLoaderData();
	// console.log(featuredJobs);

	let desiredJob = {};

	useEffect(() => {
		desiredJob = featuredJobs.find((job) => {
			return job.id == dynamicId.id;
		});
		setJob(desiredJob);
	}, [dynamicId]);

	return (
		<div>
			<BannerTitle>Job Details</BannerTitle>
			<JobDetail job={job}></JobDetail>
		</div>
	);
};

export default JobDetails;
