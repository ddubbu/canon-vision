import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GNB_HEIGHT, LogoPaddingLeft } from '../layout/GNB/index.styled';

export const Wrapper = styled.div`
	width: 100%;

	${BreakPoint({
		PcStyle: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
		`,
		MobileStyle: css`
			padding-left: ${LogoPaddingLeft.mobile};
		`,
	})}
`;

export const Container = styled.div`
	font-family: minion-pro, serif;
	font-weight: 400;
	font-style: normal;

	/* word-break: break-all; */

	${BreakPoint({
		MobileStyle: css`
			margin-right: ${LogoPaddingLeft.mobile};
		`,
		PcStyle: css`
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: calc(100vh - ${GNB_HEIGHT.pc});
			margin-right: ${LogoPaddingLeft.pc};
		`,
	})}
`;

export const SilverText = styled.div`
	color: #808080;
`;

export const PointerText = styled.span`
	cursor: pointer;
	:hover {
		color: #808080;
	}

	/* fyi. 좌우 여백 */
	margin: 0 3px;
`;
