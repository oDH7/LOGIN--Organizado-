import React from 'react';
import { View } from 'react-native';
import LoginText from '../components/LoginText';
import LoginButton from '../components/LoginButton';
import LoginInput from '../components/LoginInput';
import LoginImage from '../components/LoginImage';
import LoginImageBackground from '../components/LoginImageBackground';
import styles from '../styles/StyleSheet';

export default function Login() {
  return (
    <LoginImageBackground>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LoginImage style={styles.logo} />
          <LoginText style={styles.title}>Login</LoginText>
        </View>
        <View style={styles.inputContainer}>
          <LoginInput placeholder="E-mail" />
          <LoginInput placeholder="Senha" secureTextEntry={true} />
          <LoginButton title="Login" onPress={() => alert('Login Pressed')} />
        </View>
      </View>
    </LoginImageBackground>
  );
}
