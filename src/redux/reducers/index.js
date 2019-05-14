import { combineReducers } from 'redux';

import { questions } from './questions';
import defaultState from '../defaultState';
import {
    SET_QUIZ_LENGTH,
    SET_QUIZ_DIFFICULTY,
    SET_QUIZ_TYPE,
    SET_IS_FETCHING_QUESTIONS,
    SCORE_QUIZ
} from '../actions';

const length = (state = defaultState.length, action) => {
    switch (action.type) {
        case SET_QUIZ_LENGTH:
            return action.length;
        default:
            return state;
    }
};

const difficulty = (state = defaultState.difficulty, action) => {
    switch (action.type) {
        case SET_QUIZ_DIFFICULTY:
            return action.difficulty;
        default:
            return state;
    }
};

const quizType = (state = defaultState.quizType, action) => {
    switch (action.type) {
        case SET_QUIZ_TYPE:
            return action.quizType;
        default:
            return state;
    }
};

const isFetching = (state = defaultState.isFetching, action) => {
    switch (action.type) {
        case SET_IS_FETCHING_QUESTIONS:
            return action.isFetching;
        default:
            return state;
    }
};

const score = (state = defaultState.score, action) => {
    switch (action.type) {
        case SCORE_QUIZ:
            return action.questions.reduce(
                (total, question) => (
                    question.correctAnswer === question.suppliedAnswer
                        ? total + 1 // correct answer adds 1 to score
                        : total
                ), 0
            );
        default:
            return state;
    }
};

export default combineReducers({ questions, length, difficulty, quizType, isFetching, score });
