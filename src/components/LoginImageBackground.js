import React from 'react';
import { ImageBackground } from 'react-native';
import styles from '../styles/StyleSheet';

const backgroundImageSource = { uri: 'https://c4.wallpaperflare.com/wallpaper/65/1014/335/soccer-sao-paulo-fc-emblem-logo-hd-wallpaper-preview.jpg' };

export default function LoginImageBackground({ children }) {
  return (
    <ImageBackground source={backgroundImageSource} style={styles.container}>
      {children}
    </ImageBackground>
  );
}
