import {
    SET_QUESTIONS,
    CLEAR_QUESTIONS,
    ANSWER_QUESTION
} from '../actions';
import defaultState from '../defaultState';

export const questions = (state = defaultState.questions, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return [
                ...action.questions
            ];
        case CLEAR_QUESTIONS:
            return [];
        case ANSWER_QUESTION: /* eslint-disable-line */
            const questionsCopy = [...state];
            questionsCopy[action.questionId] = {
                ...state[action.questionId],
                suppliedAnswer: action.answer
            };
            return questionsCopy;
        default:
            return state;
    }
};
