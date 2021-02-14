import { useState, useEffect } from "react";

export default function useLoadOnScroll(callback: Function) {
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isFetching) return;

		callback();
	}, [isFetching]);

	const handleScroll = () => {
		const scrollPosition = window.innerHeight + window.pageYOffset;
		const scrollEnd = document.body.offsetHeight;

		if (scrollPosition !== scrollEnd) return;

		setIsFetching(true);
	};

	return { isFetching, setIsFetching };
}
