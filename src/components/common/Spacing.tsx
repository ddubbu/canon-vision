import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

interface Props {
	readonly size: number;
}

const Spacing: React.FC<Props> = (props) => {
	const Block = styled.div<Props>`
		${({ size }) => css`
			width: 100%;
			height: ${size}px;
		`}
	`;

	return <Block {...props} />;
};
export default Spacing;
