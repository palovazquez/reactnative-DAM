import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '@ui-kitten/components';
import { screens } from '../App';
import { useNavigation } from '@react-navigation/native';
import { waveLong } from '../images';

const styles = StyleSheet.create({
  container: {
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
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    //resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const GestionUsuarios = () => {
  const navigator = useNavigation();

  return (
    <ImageBackground source={waveLong} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Button
          style={styles.greenButton}
          onPress={() => navigator.navigate(screens.añadirUsuario)}>
          AÑADIR USUARIO
        </Button>
        <Button
          style={styles.greenButton}
          onPress={() => navigator.navigate(screens.modificarUsuario)}>
          MODIFICAR USUARIO
        </Button>
        <Button
          style={styles.greenButton}
          onPress={() => navigator.navigate(screens.eliminarUsuario)}>
          ELIMINAR USUARIO
        </Button>
      </View>
    </ImageBackground>
  );
};

export default GestionUsuarios;
