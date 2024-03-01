import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%' ,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
    height: 300, // ou outra altura desejada
  },
  
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
