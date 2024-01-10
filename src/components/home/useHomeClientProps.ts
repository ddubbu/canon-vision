import { useState } from 'react';
import PROJECT_DATA from './data';
import { HomeProps } from '.';

export const useHomeClientProps = (): HomeProps => {
	const length = PROJECT_DATA.length;

	const [projectIdx, setProjectIdx] = useState(0);

	const handleLeftClick = () => {
		setProjectIdx((prev) => (prev - 1 + length) % length);
	};

	const handleRightClick = () => {
		setProjectIdx((prev) => (prev + 1) % length);
	};

	return {
		projectIdx,
		handleLeftClick,
		handleRightClick,
	};
};
