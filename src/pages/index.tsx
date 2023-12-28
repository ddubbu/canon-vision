import React, { useState } from 'react';
import { GlobalStyle } from '@/style/global.styled';
import { Global } from '@emotion/react';
import * as LayoutStyled from '@/components/layout/index.styled';
import GNB from '@/components/layout/GNB';
import Home from '@/components/home';
import Profile from '@/components/profile';
import Head from 'next/head';

type PageType = 'home' | 'profile';

const title = 'canon vision';
const description = 'an architecture practice';
const thumbnail = '/assets/common/thumbnail.jpg';

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
				<title>{title}</title>
				<link rel="icon" href="/assets/common/favicon.v231227.png" />
				<meta name="description" content={description} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="https://use.typekit.net/aga0rpu.css" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:image" content={thumbnail} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={title} />
				<meta property="og:locale" content="ko_KR" />
				<meta property="og:image:width" content="436" />
				<meta property="og:image:height" content="56" />
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
