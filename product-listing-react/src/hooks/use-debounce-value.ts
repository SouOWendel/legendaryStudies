// Estratégia para causar um delay, por exemplo, depois que alguém parar de digitar
// algo irá acontecer.

import { useEffect, useState } from 'react';

export default function useDebounceValue<T = unknown>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
