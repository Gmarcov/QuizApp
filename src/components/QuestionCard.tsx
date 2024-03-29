import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNbr: number;
	totalQuestions: number;
};

const QuestionQuiz: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNbr,
	totalQuestions,
}) => (
	<Wrapper>
		<p className="questionNumber">
			Question number {questionNbr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		{answers.map((answer) => (
			<ButtonWrapper
				key={answer}
				correct={userAnswer?.correctAnswer === answer}
				userClicked={userAnswer?.answer === answer}
			>
				<button
					disabled={userAnswer ? true : false}
					value={answer}
					onClick={callback}
					dangerouslySetInnerHTML={{ __html: answer }}
				></button>
			</ButtonWrapper>
		))}
	</Wrapper>
);

export default QuestionQuiz;
