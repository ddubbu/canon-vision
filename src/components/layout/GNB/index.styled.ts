import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const GNB_HEIGHT = {
	mobile: '120px',
	pc: '230px',
};

export const Wrapper = styled.div`
	padding-left: 45px;
	display: flex;
	align-items: center;

	${BreakPoint({
		MobileStyle: css`
			height: ${GNB_HEIGHT.mobile};
		`,
		PcStyle: css`
			height: ${GNB_HEIGHT.pc};
		`,
	})}
`;

export const Logo = styled.img`
	cursor: pointer;
	height: 15px;

	${BreakPoint({
		MobileStyle: css``,
		PcStyle: css``,
	})}
`;
