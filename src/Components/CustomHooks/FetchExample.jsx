import React from "react";
import { UseFetch } from "./UseFetch";
const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
	const { isLoading, products } = UseFetch(url);
	console.log(products);
	return (
		<div>
			<h1>
				{isLoading ? (
					<h4>Loading...</h4>
				) : (
					<div>
						<h1>data</h1>
					</div>
				)}
			</h1>
		</div>
	);
};

export default FetchExample;
