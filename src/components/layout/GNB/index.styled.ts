import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const GNB_HEIGHT = {
	mobile: '120px',
	pc: '230px',
};

export const LogoPaddingLeft = {
	mobile: '45px',
	pc: '45px',
};

export const Wrapper = styled.div`
	display: flex;
	align-items: center;

	${BreakPoint({
		MobileStyle: css`
			height: ${GNB_HEIGHT.mobile};
			padding-left: ${LogoPaddingLeft.mobile};
		`,
		PcStyle: css`
			height: ${GNB_HEIGHT.pc};
			padding-left: ${LogoPaddingLeft.pc};
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
