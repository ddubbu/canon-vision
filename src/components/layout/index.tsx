import React, { PropsWithChildren } from 'react';
import GNB from './GNB';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<GNB />
			{children}
		</>
	);
};

export default Layout;
