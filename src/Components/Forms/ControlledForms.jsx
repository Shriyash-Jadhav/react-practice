import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const ControlledForms = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const person = { firstName, email };
		setPeople([...people, person]);
		// console.log(setPeople);
		setFirstName("");
		setEmail("");
		// console.log(person);
		// console.log("hello");
	};
	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="firstName">Name</Label>
					<Input
						style={{ marginBottom: "1rem" }}
						type="name"
						name="name"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="Enter Your First Name"
					/>
				</FormGroup>
				<FormGroup style={{ marginTop: "2rem" }}>
					<Label htmlFor="email">Email</Label>
					<Input
						style={{ marginBottom: "1rem" }}
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Your Email-Id"
					/>
				</FormGroup>
				<Button outline color="primary">
					Submit
				</Button>
			</Form>

			{people.map((persons) => (
				<>
					<h1 style={{ marginTop: "1rem" }}>Name: {persons?.firstName}</h1>
					<h4>Email-Id: {persons?.email}</h4>
				</>
			))}
		</div>
	);
};

export default ControlledForms;
