import React from 'react';
import { Image } from 'react-native';
import styles from '../styles/StyleSheet';

const logoSource = { uri: 'https://s2-ge.glbimg.com/VKG42-3nfMa-Gi62nQkzcs2KCVQ=/0x0:800x515/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/J/m/64Xd9ZTLA9k3ojqWla3Q/escudo-spfc.jpg' };

export default function LoginImage({ style }) {
  return <Image source={logoSource} style={[styles.logo, style]} />;
}
