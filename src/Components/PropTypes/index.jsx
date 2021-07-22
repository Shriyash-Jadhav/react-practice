import React from "react";
import { UseFetch } from "../CustomHooks/UseFetch";
import Product from "./Product";
const url = "https://course-api.com/react-prop-types-example";

const index = () => {
	const { products } = UseFetch(url);
	return (
		<div>
			<section>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</section>
		</div>
	);
};

export default index;
