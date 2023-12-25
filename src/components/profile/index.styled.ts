import { BreakPoint } from '@/utils/media.utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { LogoPaddingLeft } from '../layout/GNB/index.styled';

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
`;

export const SilverText = styled.div`
	color: gray;
`;
