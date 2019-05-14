import PropTypes from 'prop-types';

import { QUIZ_LENGTHS, QUIZ_DIFFICULTIES, QUIZ_TYPES } from './constants';

export const question = PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
    suppliedAnswer: PropTypes.string
});

export const navigation = PropTypes.shape({
    navigate: PropTypes.func.isRequired,
});

export const questions = PropTypes.arrayOf(question);

export const length = PropTypes.oneOf(QUIZ_LENGTHS);

export const difficulty = PropTypes.oneOf(QUIZ_DIFFICULTIES);

export const quizType = PropTypes.oneOf(QUIZ_TYPES);

export const score = PropTypes.number;

export default { question, navigation, questions, length, difficulty, quizType, score };
