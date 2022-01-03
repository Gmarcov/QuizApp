import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        color: #fff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    html {
        height: 100vh;
    }

    body {
        background-color: #3F3F3F;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
	max-width: 400px;
	margin-top: 100px;
	background-color: #333;
	padding: 10%;
	border-radius: 2%;
	> h1 {
		margin-bottom: 15px;
		text-align: center;
	}
	> .scoreBoard {
		color: #aaa;
		font-weight: 500;
		font-size: 16px;
		margin-bottom: 5px;
	}
	> .nextQuestionButton,
	.startButton {
		margin-left: 25%;
		font-size: 16px;
		margin-top: 10%;
		padding: 8px 15px;
		font-weight: 700;
		color: black;
		background-color: #aaa;
		border: none;
		border-radius: 5%;
	}
`;
