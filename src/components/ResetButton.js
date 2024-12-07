import React from 'react';
import { Button, View } from 'react-native';
import styles from '../styles/styles';

const ResetButton = ({ resetScore }) => {
  return (
    <Button
    title="Reset Pertandingan"
    onPress={resetScore}
    color={styles.resetButton.backgroundColor}
    />
  );
};

export default ResetButton;