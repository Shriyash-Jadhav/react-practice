import React, { useState } from "react";
import { Button } from "reactstrap";

const UseStateBasicFinal = () => {
	const [text, setText] = useState("This is useState final");
	const handleClick = () => {
		if (text === "This is useState final") {
			return setText("This is useState final (After click on btn)");
		} else {
			setText("This is useState final");
		}
	};
	return (
		<div>
			<h1>{text}</h1>
			<Button outline color="primary" onClick={handleClick}>
				Change The Text
			</Button>
		</div>
	);
};

export default UseStateBasicFinal;
