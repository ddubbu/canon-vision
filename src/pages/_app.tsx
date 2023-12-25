import Layout from '@/components/layout';
import { GlobalStyle } from '@/style/global.styled';
import { Global } from '@emotion/react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import React from 'react';

const Index: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Global styles={GlobalStyle} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default Index;
