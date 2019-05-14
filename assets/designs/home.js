import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.paragraph}>You will be presented with 10 True or False questions.</Text>
        <Text style={styles.paragraph}>Can you score 100%?</Text>
        <TouchableOpacity style={styles.button}>
            <Text>BEGIN</Text>
        </TouchableOpacity>
    </View>
);

export default Home;
