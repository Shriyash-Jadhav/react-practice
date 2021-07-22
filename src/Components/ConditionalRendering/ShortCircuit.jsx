import React, { useState } from "react";
import { Button } from "reactstrap";

const ShortCircuit = () => {
	const [state, setState] = useState("");
	const [isError, setIsError] = useState("");
	const firstValue = state || "hello first value";
	const secondValue = state && "hello second value";

	return (
		<div>
			<h1>
				{firstValue}
				{secondValue}
			</h1>
			<h1>{state && "helloo"}</h1>
			<h1>{state || "hello"}</h1>
			<Button outline color="primary" onClick={() => setIsError("true")}>
				Show Error
			</Button>
			{isError ? (
				<p>there is an error</p>
			) : (
				<div>
					<p>hello value</p>
				</div>
			)}
		</div>
	);
};

export default ShortCircuit;
