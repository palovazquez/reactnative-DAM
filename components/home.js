import React from 'react';
import { screens } from '../App';
import { Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { newWave } from '../images';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  /*bigContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },*/
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  homeTitle: {
    flex: 1,
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
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

  return (
    <ImageBackground source={newWave} style={styles.backgroundImage}>
      <Text style={styles.homeTitle}>Bienvenidos!</Text>
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
