import { useMemo, useState } from 'react';
import PROJECT_DATA from './data';
import { PcHomeProps } from './Pc';
import { ImageControllerProps } from './ImageController';

const totalProjectCount = PROJECT_DATA.length;

const useHomePcProps = (): PcHomeProps => {
	const [projectIdx, setProjectIdx] = useState(0);
	const projectData = PROJECT_DATA[projectIdx];

	const [leftImgIdx, setLeftImgIdx] = useState(0);
	const [rightImgIdx, setRightImgIdx] = useState(0);
	const leftImageControllerProps: ImageControllerProps = useMemo(() => {
		const imgSrcList = projectData.imageList;
		const length = imgSrcList.length;

		const src = imgSrcList[leftImgIdx];
		const handleLeftClick = () => {
			// fyi. 음수 방지를 위해 length를 더해줌
			console.log('left:', leftImgIdx);
			setLeftImgIdx((prev) => (prev - 1 + length) % length);
		};
		const handleRightClick = () => {
			console.log('left', leftImgIdx);
			setLeftImgIdx((prev) => (prev + 1) % length);
		};

		return {
			src,
			handleLeftClick,
			handleRightClick,
		};
	}, [projectData, leftImgIdx]);

	const rightImageControllerProps: ImageControllerProps = useMemo(() => {
		const imgSrcList = projectData.draftList;
		const length = imgSrcList.length;

		const src = imgSrcList[rightImgIdx];
		const handleLeftClick = () => {
			// fyi. 음수 방지를 위해 length를 더해줌
			setRightImgIdx((prev) => (prev - 1 + length) % length);
		};
		const handleRightClick = () => {
			setRightImgIdx((prev) => (prev + 1) % length);
		};

		return {
			src,
			handleLeftClick,
			handleRightClick,
		};
	}, [projectData, rightImgIdx]);

	const initializeImageIdxes = () => {
		setLeftImgIdx(0);
		setRightImgIdx(0);
	};

	const handleLeftClick = () => {
		initializeImageIdxes();
		setProjectIdx((prev) => (prev - 1 + totalProjectCount) % totalProjectCount);
	};

	const handleRightClick = () => {
		initializeImageIdxes();
		setProjectIdx((prev) => (prev + 1) % totalProjectCount);
	};

	return {
		leftImageControllerProps,
		rightImageControllerProps,
		handleLeftClick,
		handleRightClick,
	};
};

export default useHomePcProps;
