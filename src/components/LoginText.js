import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/StyleSheet';

export default function LoginText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
