import fetch from 'cross-fetch';

import { API_ROOT_URL } from '../constants';
import data from '../testData.json';

export const SET_IS_FETCHING_QUESTIONS = 'SET_IS_FETCHING_QUESTIONS';
export const setIsFetchingQuestions = (isFetching) => ({
    type: SET_IS_FETCHING_QUESTIONS,
    isFetching: isFetching
});

export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const clearQuestions = () => ({
    type: CLEAR_QUESTIONS
});

export const SET_QUIZ_DIFFICULTY = 'SET_QUIZ_DIFFICULTY';
export const setQuizDifficulty = (difficulty) => ({
    type: SET_QUIZ_DIFFICULTY,
    difficulty: difficulty
});

export const SET_QUIZ_LENGTH = 'SET_QUIZ_LENGTH';
export const setQuizLength = (length) => ({
    type: SET_QUIZ_LENGTH,
    length: length
});

export const SET_QUIZ_TYPE = 'SET_QUIZ_TYPE';
export const setQuizType = (quizType) => ({
    type: SET_QUIZ_TYPE,
    quizType: quizType // multiple, boolean, null (mixed)
});

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions: questions
});

export const fetchQuestions = (amount = 10, difficulty = 'hard', type = 'boolean', testMode = false) => {
    if (testMode) {
        // disregards other inputs and loads test data
        return (dispatch) => dispatch(setQuestions(data));
    }

    let url = `${API_ROOT_URL}?amount=${amount}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;

    return (dispatch) => {
        dispatch(setIsFetchingQuestions(true));
        return fetch(url)
            .then((response) => response.json())
            .then((json) => dispatch(setQuestions(json.results.map((question) => ({
                category: question.category,
                type: question.type,
                difficulty: question.difficulty,
                question: question.question,
                correctAnswer: question.correct_answer, // use camelCase
                incorrectAnswers: question.incorrect_answers // use camelCase
            })))))
            .then(() => dispatch(setIsFetchingQuestions(false)));
    };
};

export const SCORE_QUIZ = 'SCORE_QUIZ';
export const scoreQuiz = (questions) => ({
    type: SCORE_QUIZ,
    questions: questions
});


export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const answerQuestion = (questionId, answer) => ({
    type: ANSWER_QUESTION,
    questionId: questionId,
    answer: answer
});
