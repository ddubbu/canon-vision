import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 40vh;

	display: grid;

	${BreakPoint({
		MobileStyle: css`
			grid-template-columns: 1fr 2fr 1fr;
		`,
		PcStyle: css`
			grid-template-columns: 1fr 2fr 2fr 1fr;
		`,
	})}
`;

export const ProjectController = styled.div`
	/* TODO: DELETE 가상선 */
	background-color: #fffcdd;
`;

export const ImageController = styled.div`
	position: relative;

	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImageWrapper = styled.img`
	display: block;
	width: 100%;

	/* TODO: DELETE 가상선 */
	border: 1px solid silver;
`;

const CommonControllerStyle = css`
	position: absolute;
	top: 0;
	height: 100%;
`;

export const LeftController = styled.div`
	${CommonControllerStyle}

	left: 0;
	width: 50%;
`;

export const RightController = styled.div`
	${CommonControllerStyle}

	right: 0;
	width: 50%;
`;
