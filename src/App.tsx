import React, { useState } from "react";
import { fetchQuizQuestion } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.style";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [questionNbr, setQuestionNbr] = useState(0);
	const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startQuiz = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestion(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswer([]);
		setQuestionNbr(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[questionNbr].correct_answer === answer;
			if (correct) setScore((score) => score + 1);

			const temp = {
				question: questions[questionNbr].question,
				answer,
				correct,
				correctAnswer: questions[questionNbr].correct_answer,
			};
			setUserAnswer((answerArray) => [...answerArray, temp]);
		}
	};

	const nextQuestion = () => {
		if (questionNbr === TOTAL_QUESTIONS - 1) {
			setGameOver(true);
		} else {
			setQuestionNbr((qst) => qst + 1);
		}
	};

	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<h1>Welcome to the Quiz App</h1>
				{gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
					<button className="startButton" onClick={startQuiz}>
						Start the quiz
					</button>
				) : null}
				{!gameOver ? <p className="scoreBoard">Score: {score}</p> : null}
				{loading && <p>Loading Questions...</p>}
				{!loading && !gameOver && (
					<QuestionCard
						question={questions[questionNbr].question}
						answers={questions[questionNbr].answers}
						questionNbr={questionNbr + 1}
						totalQuestions={TOTAL_QUESTIONS}
						callback={checkAnswer}
						userAnswer={userAnswer ? userAnswer[questionNbr] : undefined}
					/>
				)}
				{!gameOver && !loading && questions.length !== TOTAL_QUESTIONS - 1 ? (
					<button className="nextQuestionButton" onClick={nextQuestion}>
						next question
					</button>
				) : null}
			</Wrapper>
		</>
	);
};

export default App;
