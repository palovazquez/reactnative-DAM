import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';
import { screens } from '../App';
import { useNavigation } from '@react-navigation/native';
import { waveImage, waveLarge, waveLong, newWave } from '../images';

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
    marginBottom: 10,
    width: 200,
  },
  buttonGhost: {
    margin: 2,
    marginTop: 5,
    width: 200,
    textDecorationLine: 'underline',
  },
  homeTittle: {
    flex: 1,
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
  },
  ghostContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    //resizeMode: 'cover',
    justifyContent: 'center',
  },
  greenButton: {
    margin: 2,
    marginBottom: 10,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#00D984',
    borderColor: 'transparent',
  },
  lightGreenButton: {
    margin: 2,
    marginBottom: 10,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#00E884',
    borderColor: 'transparent',
  },
  whiteButton: {
    margin: 2,
    marginBottom: 10,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
  },
});

export const Home = () => {
  const navigator = useNavigation();
  //Hook propio de Navigation. Nos devuelve un hook que nos permite hacer la navegación.

  return (
    <ImageBackground source={newWave} style={styles.backgroundImage}>
      <Text style={styles.homeTittle}>Bienvenidos!</Text>
      <View style={styles.container}>
        <Button
          style={styles.greenButton}
          onPress={() => navigator.navigate(screens.listar)}>
          PRODUCTOS
        </Button>
        <Button
          style={styles.lightGreenButton}
          onPress={() => navigator.navigate(screens.listaCategorias)}>
          CATEGORÍAS
        </Button>
        <Button
          style={styles.whiteButton}
          onPress={() => navigator.navigate(screens.gestionUsuarios)}>
          USUARIOS
        </Button>
      </View>
    </ImageBackground>
  );
};
