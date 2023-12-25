import React, { PropsWithChildren } from 'react';
import GNB from './GNB';
import * as Styled from './index.styled';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Styled.Container>
			<GNB />
			{children}
		</Styled.Container>
	);
};

export default Layout;
