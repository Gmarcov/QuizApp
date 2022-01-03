import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background: #333;
	border-radius: 10px;
	border: 2px solid #444;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	p {
		font-size: 1rem;
		font-weight: 400;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;
	:hover {
		opacity: 0.8;
	}
	button {
		border: none;
		font-weight: 500;
		cursor: pointer;
		user-select: none;
		font-size: 0.8rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct ? "#56CA64" : !correct && userClicked ? "#FF5656" : "#3E3E3E"};
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		color: #fff;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
