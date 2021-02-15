import { CHECKIMAGE, waveLarge } from '../../images';
import { TextInput, Image, Text, ImageBackground } from 'react-native';
import { Button, Card, Modal as SecondModal } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btnVolver: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
  },
  btnGuardar: {
    flex: 2,
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#00E884',
    borderColor: 'transparent',
  },
  secondModal: {
    marginHorizontal: 0,
  },
  txtSecondModal: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    marginHorizontal: 60,
    borderRadius: 60,
  },
  btnOk: {
    textAlign: 'center',
    marginTop: 5,
    borderRadius: 30,
    backgroundColor: '#00E884',
    borderColor: 'white',
    width: 70,
    height: 40,
    alignSelf: 'center',
  },
  image: { height: 80, width: 80, alignSelf: 'center', marginBottom: 20 },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const AñadirUsuario = () => {
  const { usuarios, setUsuarios } = useContext(UserContext);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [contraseñaUsuario, setContraseñaUsuario] = useState('');
  const [edadUsuario, setEdadUsuario] = useState('');
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false,
  );
  const navigator = useNavigation();

  const guardarUsuario = () => {
    setUsuarios([
      ...usuarios,
      {
        usuario: nombreUsuario,
        correo: emailUsuario,
        contraseña: contraseñaUsuario,
        edad: Number(edadUsuario),
        articulos: [''],
        id: Number(edadUsuario) + Math.random(),
      },
    ]);
    setNombreUsuario('');
    setEmailUsuario('');
    setContraseñaUsuario('');
    setEdadUsuario('');
    setConfirmationModalVisible(true);
  };

  return (
    <ImageBackground source={waveLarge} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            placeholder="Usuario"
            style={styles.textInput}
            value={nombreUsuario}
            onChangeText={(nuevoTexto) => {
              setNombreUsuario(nuevoTexto);
            }}
          />
          <TextInput
            placeholder="Correo electrónico"
            style={styles.textInput}
            value={emailUsuario}
            onChangeText={(nuevoTexto) => {
              setEmailUsuario(nuevoTexto);
            }}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.textInput}
            value={contraseñaUsuario}
            onChangeText={(nuevoTexto) => {
              setContraseñaUsuario(nuevoTexto);
            }}
          />
          <TextInput
            placeholder="Edad"
            style={styles.textInput}
            value={String(edadUsuario)}
            onChangeText={(nuevoTexto) => {
              setEdadUsuario(String(nuevoTexto));
            }}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.btnVolver}
            onPress={() => {
              navigator.goBack();
            }}>
            VOLVER
          </Button>
          <Button style={styles.btnGuardar} onPress={() => guardarUsuario()}>
            GUARDAR
          </Button>
        </View>
        <SecondModal
          style={styles.secondModal}
          visible={confirmationModalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setConfirmationModalVisible(false)}>
          <Card style={styles.card} disabled={true}>
            <Image style={styles.image} source={CHECKIMAGE} />
            <Text style={styles.txtSecondModal}>
              El usuario ha sido modificado con éxito
            </Text>
            <Button
              style={styles.btnOk}
              size="medium"
              onPress={() => {
                setConfirmationModalVisible(false);
              }}>
              Ok
            </Button>
          </Card>
        </SecondModal>
      </View>
    </ImageBackground>
  );
};

export default AñadirUsuario;
