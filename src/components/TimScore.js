import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const TimScore = ({ timName, score, addScore, subtractScore }) => {
  return (
    <View style={styles.tim}>
      <Text style={styles.timName}>{timName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={subtractScore} color={styles.subtractButton.backgroundColor} />
        <Button title="+" onPress={addScore} color={styles.addButton.backgroundColor} />
      </View>
    </View>
  );
};

export default TimScore;