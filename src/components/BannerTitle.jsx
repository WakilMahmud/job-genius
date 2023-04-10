import React from "react";
import VectorBottom from "../assets/Images/VectorBottom.png";
import VectorUp from "../assets/Images/VectorUp.png";

const BannerTitle = ({ children }) => {
	return (
		<div className="h-60 bg-indigo-50 relative">
			<h1 className="font-manrope font-extrabold text-2xl text-center pt-20">{children}</h1>
			<img className="absolute bottom-0" src={VectorBottom} alt="VectorBottom" />
			<img className="absolute -top-28 right-0" src={VectorUp} alt="VectorBottom" />
		</div>
	);
};

export default BannerTitle;
