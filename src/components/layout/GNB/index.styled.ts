import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const GNB_HEIGHT = {
	mobile: '60px',
	pc: '116px',
};

export const Wrapper = styled.div`
	padding-left: 45px;

	${BreakPoint({
		MobileStyle: css`
			height: ${GNB_HEIGHT.mobile};
		`,
		PcStyle: css`
			height: ${GNB_HEIGHT.pc};
			display: flex;
			align-items: center;
		`,
	})}
`;

export const Logo = styled.img`
	cursor: pointer;
	height: 19.95px;

	${BreakPoint({
		MobileStyle: css``,
		PcStyle: css``,
	})}
`;
