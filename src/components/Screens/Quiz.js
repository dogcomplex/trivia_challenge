import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Html5Entities } from 'html-entities';

import store from '../../redux';
import { answerQuestion, scoreQuiz } from '../../redux/actions';
import styles from '../../styles';
import { shuffleArray } from '../../functions';
import propTypes from '../../propTypes';

const htmlEntities = new Html5Entities();

// Loading Screen displayed when waiting for questions to fetch from API
const LoadingScreen = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerLine}>Trivia Time!</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.paragraph}>
                <Text style={styles.textLine}>
                    Preparing Questions...
                </Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.textLine}>
                    Get Ready!
                </Text>
            </View>
        </View>
    </View>
);

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        const { navigation, questions } = this.props;
        const { clicked } = this.state;
        const questionNumber = navigation.getParam('questionNumber', 0);

        if (!questions || questions.length <= 0) {
            return <LoadingScreen />;
        }

        const question = questions[questionNumber];
        const category = htmlEntities.decode(question.category);
        const questionText = htmlEntities.decode(question.question);
        let answers;
        let answersText;
        if (question.type === 'boolean') {
            answers = ['True', 'False'];
            answersText = ['TRUE', 'FALSE'];
        } else {
            // shuffle multiple choice answers and decode to readable text
            answers = shuffleArray([
                ...question.incorrectAnswers,
                question.correctAnswer
            ]);
            answersText = answers.map(htmlEntities.decode);
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerLine}>{category}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.paragraph}>
                        <View style={question.type === 'boolean' ? styles.box : styles.shortBox}>
                            <View style={styles.paragraph}>
                                <Text style={styles.textLine}>{questionText}</Text>
                            </View>
                        </View>
                        <Text style={styles.textLine}>
                            {questionNumber + 1}
                            {' '}
                            of
                            {' '}
                            {questions.length}
                        </Text>
                    </View>
                </View>

                <View
                    style={question.type === 'boolean'
                        ? styles.booleanButtonBar
                        : styles.multiButtonBar
                    }
                >
                    {answers.map((answer, i) => (
                        <TouchableOpacity
                            key={answer}
                            style={styles.button}
                            cancel={clicked}
                            onPressOut={() => {
                                this.setState({ clicked: true });
                                store.dispatch(answerQuestion(questionNumber, answer));
                                if (questionNumber + 1 < questions.length) {
                                    navigation.navigate('Quiz', {
                                        questionNumber: questionNumber + 1
                                    });
                                } else {
                                    store.dispatch(scoreQuiz(questions));
                                    navigation.navigate('Results');
                                }
                            }}
                        >
                            <Text
                                style={answersText[i].length < 20 /* eslint-disable-line no-nested-ternary */
                                    ? styles.buttonText
                                    : (answersText[i].length < 28
                                        ? styles.buttonLongText
                                        : styles.buttonVeryLongText
                                    )
                                }
                            >
                                { answersText[i] }
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
Quiz.propTypes = {
    navigation: propTypes.navigation.isRequired,
    questions: propTypes.questions.isRequired
};


const mapStateToProps = ({ questions }) => ({ questions });

export default connect(mapStateToProps)(Quiz);
