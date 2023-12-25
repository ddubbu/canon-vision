import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
`;

const CommonSubContainer = styled.div`
	border: 1px silver solid;

	flex-grow: 1;
	height: 300px;
	margin: 0 10px;
`;

export const LeftSubContainer = styled(CommonSubContainer)``;

export const RightSubContainer = styled(CommonSubContainer)``;
