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
		<Spacing size={3} />
	</>
);

const Profile: React.FC = () => {
	const router = useRouter();

	const handleRouter = (url: string) => {
		router.push(url);
	};

	return (
		<Styled.Wrapper>
			<Styled.Container />
			<Styled.Container>
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
				Ahn Kihyun and Hee Joon Lee studied architecture at Seoul National University. Ahn Kihyun gained professional
				experience after graduation. Hee Joon Lee proceeded to study at the Royal College of Art in London.
				<ParagraphSpacing />
				Hee Joon Lee runs a teaching studio at{' '}
				<span
					style={{ cursor: 'pointer' }}
					onClick={() => {
						handleRouter(LINK.instagram_studioheejoonlee);
					}}
				>
					Hanyang University
				</span>
				ERICA as an adjunct professor and at the
				<span
					style={{ cursor: 'pointer' }}
					onClick={() => {
						handleRouter(LINK.instagram_studio_ko_lee);
					}}
				>
					Architectural Association Visiting School Seoul
				</span>
				as a unit tutor.
				<ParagraphSpacing />
				Ahn Kihyun is licensed and registered at the Korea Architects Registration Board.
				<ParagraphSpacing />
				Hee Joon Lee regularly
				<span
					style={{ cursor: 'pointer' }}
					onClick={() => {
						handleRouter(LINK.instagram_heejoonlee_publications);
					}}
				>
					writes, lectures, and attends reviews
				</span>
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
			</Styled.Container>
		</Styled.Wrapper>
	);
};

export default Profile;