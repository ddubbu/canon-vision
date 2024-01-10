import React from 'react';
import * as Styled from './index.styled';

export interface ImageControllerProps {
	src: string;
	handleLeftClick: () => void;
	handleRightClick: () => void;
}

const ImageController: React.FC<ImageControllerProps> = ({ src, handleLeftClick, handleRightClick }) => {
	return (
		<Styled.ImageController>
			<Styled.ImageOutterWrapper>
				<Styled.ImageWrapper src={src} />
			</Styled.ImageOutterWrapper>
			<Styled.LeftController onClick={handleLeftClick} />
			<Styled.RightController onClick={handleRightClick} />
		</Styled.ImageController>
	);
};

export default ImageController;
