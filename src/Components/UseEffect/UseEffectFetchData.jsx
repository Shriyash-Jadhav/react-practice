import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffectFetchData = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://api.github.com/users")
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			{data.map((git, id) => (
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<img
						src={git?.avatar_url}
						alt="avatar"
						style={{
							borderRadius: "50%",
							width: "50px",
							height: "50px",
							objectFit: "contain",
							marginBottom: "20px",
						}}
					/>
					<h1 key={id}>
						<a
							href={git?.html_url}
							style={{
								textTransform: "capitalize",
								color: "#fff",
								textDecoration: "none",
							}}
						>
							{git?.login}
						</a>
					</h1>
				</div>
			))}
		</div>
	);
};

export default UseEffectFetchData;
