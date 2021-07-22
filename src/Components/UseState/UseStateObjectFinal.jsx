import React, { useState } from "react";
import { Button } from "reactstrap";

const UseStateObjectFinal = () => {
	const [data, setData] = useState({
		name: "John",
		age: 20,
		message: "This is old message",
	});
	const handleClick = () => {
		let newData = { ...data, message: "This is new message" };
		setData(newData);
	};
	return (
		<div>
			<h1>{data.name}</h1>
			<h3>{data.age}</h3>
			<p>{data.message}</p>
			<Button outline color="primary" onClick={handleClick}>
				Change The Text
			</Button>
		</div>
	);
};

export default UseStateObjectFinal;
