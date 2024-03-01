import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/StyleSheet';

export default function LoginInput({ placeholder, secureTextEntry }) {
  return <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />;
}
