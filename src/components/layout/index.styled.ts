import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
`;

export const PCDisplay = styled.div`
	${BreakPoint({
		PcStyle: css``,
		MobileStyle: css`
			display: none;
		`,
	})}
`;

export const MobileDisplay = styled.div`
	${BreakPoint({
		PcStyle: css`
			display: none;
		`,
		MobileStyle: css``,
	})}
`;
