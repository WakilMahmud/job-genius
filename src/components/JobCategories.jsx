import React from "react";
import account from "../assets/Icons/accounts.png";
const JobCategories = () => {
	return (
		<>
			<h1 className="font-extrabold text-5xl">Job Category List</h1>
			<p className="font-medium text-base text-gray-500 my-8">
				Explore thousands of job opportunities with all the information you need. Its your future
			</p>
			<div className="card w-96 bg-indigo-50 flex flex-col pt-10">
				<div className="px-8">
					<img className="bg-indigo-200 p-4 rounded-lg" src={account} alt="accounts" />
				</div>
				<div className="card-body">
					<h2 className="card-title">Account</h2>
					<p>300 Jobs Available</p>
				</div>
			</div>
		</>
	);
};

export default JobCategories;
