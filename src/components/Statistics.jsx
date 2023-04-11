import React from "react";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
	{
		id: 1,
		name: "A1",
		mark: 30,
	},
	{
		id: 2,
		name: "A2",
		mark: 48,
	},
	{
		id: 3,
		name: "A3",
		mark: 60,
	},
	{
		id: 4,
		name: "A4",
		mark: 60,
	},
	{
		id: 5,
		name: "A5",
		mark: 60,
	},
	{
		id: 6,
		name: "A6",
		mark: 60,
	},
	{
		id: 7,
		name: "A7",
		mark: 60,
	},
	{
		id: 8,
		name: "A8",
		mark: 60,
	},
];

const Statistics = () => {
	return (
		<div className="my-32 max-w-7xl mx-auto flex justify-center">
			<ComposedChart width={730} height={250} data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<CartesianGrid stroke="#f5f5f5" />

				<Bar dataKey="mark" barSize={20} fill="#413ea0" />
				<Line type="monotone" dataKey="mark" stroke="#ff7300" />
			</ComposedChart>
		</div>
	);
};

export default Statistics;
