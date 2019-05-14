import { StyleSheet } from 'react-native';

export const colors = {
    background: '#E0E0E0',
    text: 'black'
};

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 36,
        color: 'red'
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        color: 'blue'
    },
    textLine: {
        fontSize: 16,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 400,
        height: 400
    },
    question: {
        textAlign: 'center'
    },
    button: {
        fontSize: 20,
        padding: 5
    },
});
