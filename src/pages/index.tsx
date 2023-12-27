import React, { useState } from 'react';
import { GlobalStyle } from '@/style/global.styled';
import { Global } from '@emotion/react';
import * as LayoutStyled from '@/components/layout/index.styled';
import GNB from '@/components/layout/GNB';
import Home from '@/components/home';
import Profile from '@/components/profile';
import Head from 'next/head';

type PageType = 'home' | 'profile';

const Index = () => {
	const [type, setType] = useState<PageType>('home');

	const handleClickLogo = () => {
		if (type === 'profile') {
			setType('home');
		} else if (type === 'home') {
			setType('profile');
		}
	};

	return (
		<>
			<Head>
				<title>canon vision</title>
				<link rel="icon" href="/assets/common/favicon.v231227.png" />
				<meta name="description" content="an architecture practice" />{' '}
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://use.typekit.net/aga0rpu.css"></link>
			</Head>
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
