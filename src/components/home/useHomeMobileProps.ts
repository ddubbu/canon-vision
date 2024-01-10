import { useMemo, useState } from 'react';
import PROJECT_DATA from './data';
import { MobileHomeProps } from './Mobile';

const useHomeMobileProps = (): MobileHomeProps => {
	const [imgIndex, setImgIndex] = useState(0);

	const mergedData = useMemo(() => {
		return PROJECT_DATA.reduce((acc, cur) => {
			return [...acc, ...cur.imageList, ...cur.draftList];
		}, [] as string[]);
	}, []);

	const length = mergedData.length;

	const src = mergedData[imgIndex];
	const handleLeftClick = () => {
		// fyi. 음수 방지를 위해 length를 더해줌
		setImgIndex((prev) => (prev - 1 + length) % length);
	};

	const handleRightClick = () => {
		setImgIndex((prev) => (prev + 1) % length);
	};

	return {
		src,
		handleLeftClick,
		handleRightClick,
	};
};

export default useHomeMobileProps;
