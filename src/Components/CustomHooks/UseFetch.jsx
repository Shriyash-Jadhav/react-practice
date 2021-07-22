import React, { useState, useEffect, useCallback } from "react";

export const UseFetch = (url) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getProducts = useCallback(async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setIsLoading(false);
	}, [url]);
	useEffect(() => {
		getProducts();
	}, [url, getProducts]);
	return { isLoading, products };
};
