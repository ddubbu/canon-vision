import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GNB_HEIGHT, LogoPaddingLeft } from '../layout/GNB/index.styled';

const MAX_WIDTH = '1500px';

export const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: ${MAX_WIDTH};

	${BreakPoint({
		PcStyle: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			height: calc(100vh - ${GNB_HEIGHT.pc});
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
			/* TODO: vertical centerizing 필요하면 */
			/* margin: auto 0; */
			margin-top: 200px;
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
