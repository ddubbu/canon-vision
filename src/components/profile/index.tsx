import React from 'react';
import * as Styled from './index.styled';

const Profile: React.FC = () => {
	return (
		<Styled.Wrapper>
			<Styled.Container />
			<Styled.Container>
				<Styled.SilverText style={{ cursor: 'pointer' }}>mail@canonvision.site</Styled.SilverText>
				<Styled.SilverText>6F 398 Seocho-daero Seocho-gu Seoul</Styled.SilverText>
				canon vision is an architecture practice founded and led by Ahn Kihyun and Hee Joon Lee.
				<br />
				Ahn Kihyun and Hee Joon Lee studied architecture at Seoul National University. Ahn Kihyun gained professional
				experience after graduation. Hee Joon Lee proceeded to study at the Royal College of Art in London.
				<br />
				Hee Joon Lee runs a teaching studio at Hanyang University ERICA as an adjunct professor and at the Architectural
				Association Visiting School Seoul as a unit tutor.
				<br />
				Ahn Kihyun is licensed and registered at the Korea Architects Registration Board.
				<br />
				Hee Joon Lee regularly writes, lectures, and attends reviews in schools of architecture.
				<Styled.SilverText style={{ cursor: 'pointer' }}>@canon__vision</Styled.SilverText>
			</Styled.Container>
		</Styled.Wrapper>
	);
};

export default Profile;
