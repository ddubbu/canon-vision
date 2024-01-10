import React from 'react';
import * as Styled from './index.styled';
import ImageController, { ImageControllerProps } from './ImageController';

export interface PcHomeProps {
	leftImageControllerProps: ImageControllerProps;
	rightImageControllerProps: ImageControllerProps;
	handleLeftClick: () => void;
	handleRightClick: () => void;
}

const PcHome: React.FC<PcHomeProps> = ({
	leftImageControllerProps,
	rightImageControllerProps,
	handleLeftClick,
	handleRightClick,
}) => {
	return (
		<Styled.Container>
			<Styled.ProjectControllerInPC onClick={handleLeftClick} />
			<Styled.ImageControllerOutterWrapperInPC>
				<ImageController {...leftImageControllerProps} />
				<Styled.GapBetweenImageInPC />
				<ImageController {...rightImageControllerProps} />
			</Styled.ImageControllerOutterWrapperInPC>
			<Styled.ProjectControllerInPC onClick={handleRightClick} />
		</Styled.Container>
	);
};

export default PcHome;
