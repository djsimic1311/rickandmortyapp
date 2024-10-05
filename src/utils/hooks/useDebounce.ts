import { useRef, useEffect } from "react";

export const useDebounce = () => {
	const timeoutRef = useRef<any>(null);

	useEffect(() => {
		if (timeoutRef.current) {
			return clearTimeout(timeoutRef.current);
		}
	}, []);

	const debounce = (cbf: Function) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			cbf();
		}, 1000);
	};

	return debounce;
};
