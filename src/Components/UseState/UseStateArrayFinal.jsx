import React, { useState } from "react";
import { data } from "../../data/data";
import { Button } from "reactstrap";

const UseStateArrayFinal = () => {
	const [person, setPerson] = useState(data);
	const handleClick = (id) => {
		let deletePersons = person.filter((people) => people.id !== id);
		setPerson(deletePersons);
	};
	return (
		<div>
			{person.map((people, id) => {
				return (
					<>
						<ol key={person.id}>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<h1>{people.name}</h1>
								<Button outline color="primary" onClick={() => handleClick(id)}>
									Remove
								</Button>
							</li>
						</ol>
					</>
				);
			})}
			<Button outline color="primary" onClick={() => setPerson([])}>
				Clear All
			</Button>
		</div>
	);
};

export default UseStateArrayFinal;
