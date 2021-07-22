import React, { useState } from "react";
import { Button } from "reactstrap";

const UseStateCounterFinal = () => {
	const [value, setValue] = useState(0);
	const increseValue = () => {
		setTimeout(() => {
			// setValue(value + 1);
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};
	const resetValue = () => {
		setValue(0);
	};
	const decreseValue = () => {
		setTimeout(() => {
			// setValue(value + 1);
			setValue((prevState) => {
				return prevState - 1;
			});
		}, 2000);
	};
	return (
		<>
			{/* Simple Counter */}
			<div>
				<h1>Simple Counter</h1>
				<h1>{value}</h1>
				<Button outline color="primary" onClick={() => setValue(value + 1)}>
					Increase
				</Button>
				<Button outline color="primary" onClick={resetValue}>
					Reset
				</Button>
				<Button outline color="primary" onClick={() => setValue(value - 1)}>
					Decrease
				</Button>
			</div>
			{/* Complex Counter */}
			<div style={{ marginTop: "5rem" }}>
				<h1>Complex Counter</h1>
				<h1>{value}</h1>
				<Button outline color="primary" onClick={increseValue}>
					Increase
				</Button>
				<Button outline color="primary" onClick={resetValue}>
					Reset
				</Button>
				<Button outline color="primary" onClick={decreseValue}>
					Decrease
				</Button>
			</div>
		</>
	);
};

export default UseStateCounterFinal;
