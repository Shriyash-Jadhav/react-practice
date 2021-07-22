import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	const checkSize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", checkSize);
		return () => {
			//cleanup function
			window.removeEventListener("resize", checkSize);
		};
	}, []);

	return (
		<div>
			<h1>Window Size</h1>
			<h3>{size} px</h3>
		</div>
	);
};

export default UseEffectCleanup;
