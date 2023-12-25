import React, { useState } from 'react';
import { GlobalStyle } from '@/style/global.styled';
import { Global } from '@emotion/react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import * as LayoutStyled from '@/components/layout/index.styled';
import GNB from '@/components/layout/GNB';
import Home from '@/components/home';
import Profile from '@/components/profile';

type PageType = 'home' | 'profile';

const Index: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
	const [type, setType] = useState<PageType>('profile');

	const handleClickLogo = () => {
		if (type === 'profile') {
			setType('home');
		} else if (type === 'home') {
			setType('profile');
		}
	};

	return (
		<>
			<Global styles={GlobalStyle} />
			<LayoutStyled.Container>
				<GNB handleClickLogo={handleClickLogo} />
				{type === 'home' && <Home />}
				{type === 'profile' && <Profile />}
			</LayoutStyled.Container>
		</>
	);
};

export default Index;
