import React from 'react';
import * as Styled from './index.styled';
import Spacing from '../common/Spacing';
import { useRouter } from 'next/router';

const LINK = {
	mail_canon_vision: 'mail@canonvision.site',
	instagram_studioheejoonlee: 'https://www.instagram.com/studioheejoonlee/',
	instagram_studio_ko_lee: 'https://www.instagram.com/studio_ko_lee/',
	instagram_heejoonlee_publications: 'https://www.instagram.com/heejoonlee.publications/',
	instagram_canon_vision: 'https://www.instagram.com/canon__vision/',
};

const ParagraphSpacing = () => (
	<>
		<br />
		<Spacing size={10} />
	</>
);

const Profile: React.FC = () => {
	const router = useRouter();

	const handleRouter = (url: string) => {
		window.open(url);
	};

	return (
		<Styled.Wrapper>
			<Styled.LeftContainer />
			<Styled.RightContainer>
				<Styled.SilverText
					style={{ cursor: 'pointer' }}
					onClick={() => {
						window.open(`mailto:${LINK.mail_canon_vision}}`);
					}}
				>
					mail@canonvision.site
				</Styled.SilverText>
				<Styled.SilverText>6F 398 Seocho-daero Seocho-gu Seoul</Styled.SilverText>
				<Spacing size={30} />
				canon vision is an architecture practice founded and led by Ahn Kihyun and Hee Joon Lee.
				<ParagraphSpacing />
				Kihyun Ahn studied architecture at the Seoul National University. Kihyun has contributed to architectural
				projects of various scales and types. Her professional experience also covers publications and exhibitions.
				Kihyun is a registered architect.
				<ParagraphSpacing />
				Hee Joon Lee studied architecture at the Seoul National University and the Royal College of Art in London. He is
				an adjunct professor at
				<Styled.PointerText
					onClick={() => {
						handleRouter(LINK.instagram_studioheejoonlee);
					}}
				>
					the Hanyang University ERICA
				</Styled.PointerText>
				and a unit tutor at the
				<Styled.PointerText
					onClick={() => {
						handleRouter(LINK.instagram_studio_ko_lee);
					}}
				>
					Architectural Association Visiting School Seoul.
				</Styled.PointerText>
				He regularly
				<Styled.PointerText
					onClick={() => {
						handleRouter(LINK.instagram_heejoonlee_publications);
					}}
				>
					writes, lectures, and attends reviews
				</Styled.PointerText>
				in schools of architecture.
				<Spacing size={30} />
				<Styled.SilverText
					style={{ cursor: 'pointer' }}
					onClick={() => {
						handleRouter(LINK.instagram_canon_vision);
					}}
				>
					@canon__vision
				</Styled.SilverText>
			</Styled.RightContainer>
		</Styled.Wrapper>
	);
};

export default Profile;
