import React, { useEffect, useState } from "react";
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
	const [avgMark, setAvgMark] = useState(0);

	useEffect(() => {
		let total = 0;
		data.map((data) => {
			total += data.mark;
		});
		setAvgMark(total / data.length);
	}, []);

	return (
		<>
			<h1 className="font-manrope font-bold text-xl text-center mt-32 mb-6">Assignment Analytics</h1>
			<p className="font-manrope font-medium text-lg text-center mb-10">
				Average Assignment Mark: <span className="text-orange-500 text-2xl">{avgMark}</span>
			</p>

			<div className="md:w-max mx-auto">
				<ComposedChart className="w-full" width={730} height={250} data={data}>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<CartesianGrid stroke="#f5f5f5" />

					<Bar dataKey="mark" barSize={20} fill="#413ea0" />
					<Line type="monotone" dataKey="mark" stroke="#ff7300" />
				</ComposedChart>
			</div>
		</>
	);
};

export default Statistics;
