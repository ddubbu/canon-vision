import React, { useEffect, useMemo, useState } from 'react';
import * as Styled from './index.styled';
import PROJECT_DATA from './data';
import useLayoutIsMobile from '@/hooks/useLayoutIsMobile';

const ImageController: React.FC<{ projectIdx: number; imgSrcList: string[] }> = ({ projectIdx, imgSrcList }) => {
	const [prevProjectIdx, setPrevProjectIdx] = useState(0);
	const [imgIdx, setImgIdx] = useState(0);

	const src = imgSrcList[imgIdx];
	const length = imgSrcList.length;

	const handleLeftClick = () => {
		// fyi. 음수 방지를 위해 length를 더해줌
		setImgIdx((prev) => (prev - 1 + length) % length);
	};

	const handleRightClick = () => {
		setImgIdx((prev) => (prev + 1) % length);
	};

	useEffect(() => {
		if (projectIdx !== prevProjectIdx) {
			setImgIdx(0);
			setPrevProjectIdx(projectIdx);
		}
	}, [projectIdx, prevProjectIdx]);

	return (
		<Styled.ImageController>
			<Styled.ImageWrapper src={src} />
			<Styled.LeftController onClick={handleLeftClick} />
			<Styled.RightController onClick={handleRightClick} />
		</Styled.ImageController>
	);
};

const Home: React.FC = () => {
	const length = PROJECT_DATA.length;

	const isMobile = useLayoutIsMobile();

	const [projectIdx, setProjectIdx] = useState(0);

	const projectDataInPc = PROJECT_DATA[projectIdx];

	const mergedDataInMobile = useMemo(() => {
		return PROJECT_DATA.reduce((acc, cur) => {
			return [...acc, ...cur.imageList, ...cur.draftList];
		}, [] as string[]);
	}, []);

	const handleLeftClick = () => {
		setProjectIdx((prev) => (prev - 1 + length) % length);
	};

	const handleRightClick = () => {
		setProjectIdx((prev) => (prev + 1) % length);
	};

	if (isMobile) {
		return (
			<Styled.Container>
				{/* fyi. CSS grid 0fr 로 `div` display: none */}
				<div />
				<ImageController projectIdx={projectIdx} imgSrcList={mergedDataInMobile} />
				<div />
			</Styled.Container>
		);
	} else {
		return (
			<Styled.Container>
				<Styled.ProjectController onClick={handleLeftClick} />
				<ImageController projectIdx={projectIdx} imgSrcList={projectDataInPc.imageList} />
				<Styled.GapBetweenImageInPC />
				<ImageController projectIdx={projectIdx} imgSrcList={projectDataInPc.draftList} />
				<Styled.ProjectController onClick={handleRightClick} />
			</Styled.Container>
		);
	}
};

export default Home;
