import React from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Html5Entities } from 'html-entities';

import store from '../../redux';
import { clearQuestions } from '../../redux/actions';
import styles from '../../styles';
import propTypes from '../../propTypes';

const htmlEntities = new Html5Entities();

const QuestionResult = ({ item: question }) => {
    const suppliedAnswer = htmlEntities.decode(question.suppliedAnswer);
    const correctAnswer = htmlEntities.decode(question.correctAnswer);
    return (
        <React.Fragment>
            <View style={styles.resultRow}>
                <View style={styles.resultQuestion}>
                    <Text style={styles.resultText}>{ htmlEntities.decode(question.question) }</Text>
                </View>
                <View style={styles.resultScore}>
                    { question.suppliedAnswer === question.correctAnswer
                        ? <FontAwesomeIcon icon="check-circle" style={styles.resultIcon} size={24} color="green" />
                        : <FontAwesomeIcon icon="times-circle" style={styles.resultIcon} size={24} color="red" />
                    }
                    { question.suppliedAnswer === question.correctAnswer
                        ? (
                            <Text style={styles.correctAnswerText}>
                                {' '}
                                {suppliedAnswer}
                            </Text>
                        )
                        : (
                            <Text style={styles.incorrectAnswerText}>
                                {' '}
                                {suppliedAnswer}
                            </Text>
                        )
                    }
                </View>
                <View style={styles.resultScore}>
                    { question.suppliedAnswer !== question.correctAnswer
                        && <FontAwesomeIcon icon="check-circle" style={styles.resultIcon} size={24} color="gray" />
                    }
                    { question.suppliedAnswer !== question.correctAnswer
                        && (
                            <Text style={styles.wouldBeCorrectAnswerText}>
                                {' '}
                                {correctAnswer}
                            </Text>
                        )
                    }
                </View>
            </View>
        </React.Fragment>
    );
};
QuestionResult.propTypes = {
    item: propTypes.question.isRequired
};

export const Results = ({ navigation, questions, score }) => (
    <View style={styles.container}>
        <FlatList
            data={questions}
            renderItem={QuestionResult}
            keyExtractor={(question, index) => index.toString()}
            ListHeaderComponent={(
                <View style={styles.resultsHeader}>
                    <Text style={styles.headerLine}>You Scored: </Text>
                    <Text style={styles.headerLine}>
                        { score }
                        {'/'}
                        { questions.length }
                    </Text>
                </View>
            )}
            ListFooterComponent={(
                <View style={styles.buttonBar}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            store.dispatch(clearQuestions());
                            navigation.navigate('Home');
                        }}
                    >
                        <Text style={styles.buttonText}>PLAY AGAIN?</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
);
Results.propTypes = {
    navigation: propTypes.navigation.isRequired,
    questions: propTypes.questions.isRequired,
    score: propTypes.score.isRequired
};

const mapStateToProps = ({ length, questions, score }) => ({ length, questions, score });
export default connect(mapStateToProps)(Results);
