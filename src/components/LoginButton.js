  import React from 'react';
  import { Button } from 'react-native';
  import styles from '../styles/StyleSheet';

  export default function LoginButton({ title, onPress }) {
    return <Button title={title} onPress={onPress} style={styles.button} />;
  }
