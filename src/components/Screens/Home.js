import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import store from '../../redux';
import { fetchQuestions, setQuizLength, setQuizDifficulty, setQuizType } from '../../redux/actions';
import styles from '../../styles';
import { QUIZ_LENGTHS, QUIZ_TYPES, QUIZ_DIFFICULTIES } from '../../constants';
import propTypes from '../../propTypes';

const Home = ({ navigation, length, difficulty, quizType }) => {
    let quizTypeText;
    switch (quizType) {
        case 'boolean':
            quizTypeText = 'True or False';
            break;
        case 'multiple':
            quizTypeText = 'Multiple-Choice';
            break;
        default:
            quizTypeText = 'Mixed True-or-False and Multiple-Choice';
    }
    // uppercase first letter
    const difficultyText = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);


    const next = (list, currentItem) => list[(list.findIndex((x) => x === currentItem) + 1) % (list.length)];
    // cycle through the possible quiz lengths to find the next available one
    const nextLength = next(QUIZ_LENGTHS, length);
    const nextQuizType = next(QUIZ_TYPES, quizType);
    const nextDifficulty = next(QUIZ_DIFFICULTIES, difficulty);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerLine}>Welcome to the </Text>
                <Text style={styles.headerLine}>Trivia Challenge!</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.paragraph}>
                    <Text style={styles.textLine}>You will be presented with</Text>
                    <Text style={styles.textLine}>
                        <Text
                            style={styles.quizLengthChooser}
                            onPress={() => store.dispatch(setQuizLength(nextLength))}
                        >
                            { length }
                        </Text>
                        {' '}
                        <Text
                            style={styles.quizDifficultyChooser}
                            onPress={() => store.dispatch(setQuizDifficulty(nextDifficulty))}
                        >
                            { difficultyText }
                        </Text>
                        {' '}
                        <Text
                            style={styles.quizTypeChooser}
                            onPress={() => store.dispatch(setQuizType(nextQuizType))}
                        >
                            { quizTypeText }
                        </Text>
                        {' '}
                        questions.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.textLine}>Can you score 100%?</Text>
                </View>
            </View>
            <View style={styles.buttonBar}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        store.dispatch(fetchQuestions(length, difficulty, quizType));
                        navigation.navigate('Quiz');
                    }}
                >
                    <Text style={styles.buttonText}>BEGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
Home.propTypes = {
    navigation: propTypes.navigation.isRequired,
    length: propTypes.length.isRequired,
    difficulty: propTypes.difficulty.isRequired,
    quizType: propTypes.quizType
};
Home.defaultProps = {
    quizType: null
};

const mapStateToProps = ({ length, difficulty, quizType }) => ({ length, difficulty, quizType });

export default connect(mapStateToProps)(Home);
