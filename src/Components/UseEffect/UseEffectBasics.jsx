import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("Use effect log");
		document.title = `UseEffectBasics (${value})`;
	});
	console.log("main log");
	return (
		<div>
			<h1>{value}</h1>
			<Button outline color="primary" onClick={() => setValue(value + 1)}>
				Click Me
			</Button>
		</div>
	);
};

export default UseEffectBasics;
