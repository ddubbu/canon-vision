import React from 'react';
import * as Styled from './index.styled';
import ImageController, { ImageControllerProps } from './ImageController';

export type MobileHomeProps = ImageControllerProps;

const MobileHome: React.FC<MobileHomeProps> = (props) => {
	return (
		<Styled.Container>
			{/* fyi. CSS grid 0fr 로 `div` display: none */}
			<div />
			<ImageController {...props} />
			<div />
		</Styled.Container>
	);
};

export default MobileHome;
