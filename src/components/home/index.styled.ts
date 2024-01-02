import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;

	display: grid;
	justify-content: center;

	${BreakPoint({
		MobileStyle: css`
			grid-template-columns: 0 2fr 0;
		`,
		PcStyle: css`
			grid-template-columns: 0.3fr 2fr 2fr 0.3fr;
		`,
	})}
`;

export const ProjectController = styled.div``;

export const ImageController = styled.div`
	position: relative;

	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImageWrapper = styled.img`
	${BreakPoint({
		PcStyle: css`
			max-width: 45vw;
			max-height: 50vh;
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
