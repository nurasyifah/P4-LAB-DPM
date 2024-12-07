import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Header from './src/components/Header';
import TimScore from './src/components/TimScore';
import ResetButton from './src/components/ResetButton';
import styles from './src/styles/styles';

const App = () => {
  const [scoreTimA, setScoreTimA] = useState(0);
  const [scoreTimB, setScoreTimB] = useState(0);

  const addScore = (tim) => {
    if (tim === 'A') {
      const newScore = scoreTimA + 1;
      setScoreTimA(newScore);
      checkWinner('Tim A', newScore);
    } else if (tim === 'B') {
      const newScore = scoreTimB + 1;
      setScoreTimB(newScore);
      checkWinner('Tim B', newScore);
    }
  };

  const subtractScore = (tim) => {
    if (tim === 'A' && scoreTimA > 0) {
      setScoreTimA(scoreTimA - 1);
    } else if (tim === 'B' && scoreTimB > 0) {
      setScoreTimB(scoreTimB - 1);
    }
  };

  const checkWinner = (tim, score) => {
    console.log(`Checking winner for ${tim} with score ${score}`);
    if (score === 10) {
      alert(`${tim} menang!`);
    }
  };

  const resetScore = () => {
    setScoreTimA(0);
    setScoreTimB(0);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.timsWrapper}>
        <View style={styles.timContainer}>
          <TimScore
            timName="Tim A"
            score={scoreTimA}
            addScore={() => addScore('A')}
            subtractScore={() => subtractScore('A')}
          />
        </View>
        <View style={styles.timContainer}>
          <TimScore
            timName="Tim B"
            score={scoreTimB}
            addScore={() => addScore('B')}
            subtractScore={() => subtractScore('B')}
          />
        </View>
      </View>
      <ResetButton resetScore={resetScore} />
    </View>
  );
};

export default App;