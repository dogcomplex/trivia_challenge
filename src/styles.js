import { StyleSheet } from 'react-native';

export const colors = {
    background: '#E0E0E0',
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        margin: 36
    },
    content: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flex: 4,
        flexDirection: 'column'
    },
    results: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flex: 6,
        flexDirection: 'column'
    },
    quizLengthChooser: {
        color: 'blue',
        fontSize: 28,
        fontWeight: 'bold'
    },
    quizTypeChooser: {
        color: 'green',
        fontSize: 28,
        fontWeight: 'bold'
    },
    quizDifficultyChooser: {
        color: 'red',
        fontSize: 28,
        fontWeight: 'bold'
    },
    textLine: {
        fontSize: 26,
        textAlign: 'center'
    },
    paragraph: {
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 350,
        height: 350,
        flex: 4,
    },
    shortBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 350,
        maxHeight: 350,
        flex: 4
    },
    buttonBar: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5,
        flex: 1
    },
    booleanButtonBar: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5,
        flex: 2
    },
    multiButtonBar: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: 5,
        paddingTop: 40,
        marginTop: 40,
        flex: 3
    },
    button: {
        padding: 10,
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    buttonText: {
        fontSize: 28,
        padding: 5,
        flex: 1
    },
    buttonLongText: {
        fontSize: 24,
        flex: 3,
        alignSelf: 'center',
        alignContent: 'center'
    },
    buttonVeryLongText: {
        fontSize: 20,
        flex: 3,
        alignSelf: 'center',
        alignContent: 'center'
    },
    resultRow: {
        justifyContent: 'flex-start',
        // alignContent: 'center',
        // alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingBottom: 15
    },
    resultScore: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flex: 1
    },
    resultQuestion: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    },
    resultText: {
        fontSize: 26,
        flexWrap: 'wrap',

    // alignContent: 'center'
    },
    resultIcon: {
        padding: 8,
        marginTop: 7
    }
});

export default {
    ...styles,
    header: {
        ...styles.content,
        justifyContent: 'flex-start',
        height: 36,
        flex: 1,
    },
    resultsHeader: {
        justifyContent: 'flex-start',
        height: 60,
        paddingBottom: 20,
        marginBottom: 20
    },
    headerLine: {
        ...styles.textLine,
        fontWeight: 'bold',
        fontSize: 26,
    },
    correctAnswerText: {
        ...styles.resultText,
        color: 'green',
        alignSelf: 'center'
    },
    wouldBeCorrectAnswerText: {
        ...styles.resultText,
        color: 'gray',
        alignSelf: 'center'
    },
    incorrectAnswerText: {
        ...styles.resultText,
        color: 'red',
        alignSelf: 'center'
    },
};
