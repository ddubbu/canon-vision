import React, { useState } from 'react';
import * as Styled from './index.styled';
import PROJECT_DATA from './data';
import { getRandomIndex } from './index.util';
import useLayoutIsMobile from '@/hooks/useLayoutIsMobile';

const ImageController: React.FC<{ imgSrcList: string[] }> = ({ imgSrcList }) => {
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

	const [projectIdx, setProjectIdx] = useState(getRandomIndex(length));

	const projectData = PROJECT_DATA[projectIdx];

	const handleLeftClick = () => {
		setProjectIdx((prev) => (prev - 1 + length) % length);
	};

	const handleRightClick = () => {
		setProjectIdx((prev) => (prev + 1) % length);
	};
	if (isMobile) {
		const mergedData = [...projectData.imageList, ...projectData.draftList];
		return (
			<Styled.Container>
				<Styled.ProjectController onClick={handleLeftClick} />
				<ImageController imgSrcList={mergedData} />
				<Styled.ProjectController onClick={handleRightClick} />
			</Styled.Container>
		);
	} else {
		return (
			<Styled.Container>
				<Styled.ProjectController onClick={handleLeftClick} />
				<ImageController imgSrcList={projectData.imageList} />
				<ImageController imgSrcList={projectData.draftList} />
				<Styled.ProjectController onClick={handleRightClick} />
			</Styled.Container>
		);
	}
};

export default Home;
