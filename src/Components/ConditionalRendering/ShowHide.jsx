import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const ShowHide = () => {
	const [value, setValue] = useState(false);
	return (
		<div>
			<Button outline color="primary" onClick={() => setValue(!value)}>
				Show/Hide
			</Button>
			{value && <Item />}
		</div>
	);
};
const Item = () => {
	const [size, setSize] = useState(window.innerWidth);

	const resize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div style={{ marginTop: "2rem" }}>
			<h1>Window Size : {size}px</h1>
		</div>
	);
};

export default ShowHide;
