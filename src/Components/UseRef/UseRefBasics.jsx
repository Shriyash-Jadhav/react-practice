import React, { useRef } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
	};
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label>Name</Label>
					<input
						style={{ marginBottom: "1rem" }}
						type="name"
						ref={refContainer}
						placeholder="Enter Your First Name"
					/>
				</FormGroup>
				<Button outline color="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default UseRefBasics;
