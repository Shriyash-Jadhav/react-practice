import React from "react";
import dummyProduct from "./dummyProduct.jpg";
import PropTypes from "prop-types";
const Product = ({ image, price, name }) => {
	const url = image && image.url;
	return (
		<div>
			<h1>{name}</h1>
			<img
				src={url || dummyProduct}
				alt={name}
				style={{ height: "100px", borderRadius: "10px" }}
			/>
			<p>$ {price || "3.99"}</p>
		</div>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};

export default Product;
