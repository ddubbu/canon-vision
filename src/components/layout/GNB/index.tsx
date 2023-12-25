import React from 'react';
import * as Styled from './index.styled';

const GNB: React.FC<{ handleClickLogo: () => void }> = ({ handleClickLogo }) => {
	return (
		<Styled.Wrapper>
			<Styled.Logo src="/assets/common/logo.jpg" onClick={handleClickLogo} />
		</Styled.Wrapper>
	);
};

export default GNB;
