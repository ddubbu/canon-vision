import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MAX_WIDTH = 1500;

export const Container = styled.div`
	width: 100%;

	${BreakPoint({
		MobileStyle: css`
			display: grid;
			justify-content: center;
			grid-template-columns: 0 2fr 0;
		`,
		PcStyle: css`
			display: flex;
		`,
	})}
`;

export const ProjectControllerInPC = styled.div`
	min-width: 100px;
	flex-grow: 1;
`;
export const ImageControllerOutterWrapperInPC = styled.div`
	width: ${MAX_WIDTH}px;
	display: flex;
`;

export const ImageController = styled.div`
	position: relative;

	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const GapBetweenImageInPC = styled.div`
	width: 50px;
`;

export const ImageOutterWrapper = styled.div`
	${BreakPoint({
		PcStyle: css`
			max-width: 45vw;
			height: 60vh;

			display: flex;
			align-items: center;
		`,
		MobileStyle: css`
			height: 70vh;

			display: flex;
			align-items: center;
		`,
	})}
`;

export const ImageWrapper = styled.img`
	${BreakPoint({
		PcStyle: css`
			max-width: 100%;
			max-height: 100%;
			width: auto;
			height: auto;
		`,
		MobileStyle: css`
			max-width: 80vw;
			max-height: 70vh;
		`,
	})}
`;

const CommonControllerStyle = css`
	position: absolute;
	top: 0;
	height: 100%;
`;

export const LeftController = styled.div`
	${CommonControllerStyle}

	${BreakPoint({
		PcStyle: css`
			left: 0;
			width: 50%;
		`,
		MobileStyle: css`
			left: 0;
			width: 50%;
		`,
	})}
`;

export const RightController = styled.div`
	${CommonControllerStyle}

	right: 0;
	width: 50%;
`;
