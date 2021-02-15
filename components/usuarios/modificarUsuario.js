import Modal from 'react-native-modal';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  button: {
    marginHorizontal: 2,
    borderRadius: 20,
    backgroundColor: '#82EDA0',
    borderColor: 'transparent',
  },
  viewModal: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalContent: {
    flex: 1,
    paddingVertical: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    minHeight: 170,
    maxHeight: 420,
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  myModal: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
  txtModal: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  buttonsModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 35,
  },
  btnCancelar: {
    flex: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
  },
  btnConfirmar: {
    flex: 2,
    marginHorizontal: 5,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#00E884',
    borderColor: 'transparent',
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
  camposView: {
    flex: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

const ModificarUsuario = () => {
  const { usuarios, setUsuarios } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [contraseñaUsuario, setContraseñaUsuario] = useState('');
  const [edadUsuario, setEdadUsuario] = useState('');
  const [indexUsuario, setIndexUsuario] = useState('');

  const modificarUsuario = () => {
    var newUsuarios = [...usuarios];
    var usuario = {
      ...newUsuarios[indexUsuario],
      usuario: nombreUsuario,
      correo: emailUsuario,
      contraseña: contraseñaUsuario,
      edad: Number(edadUsuario),
    };
    newUsuarios[indexUsuario] = usuario;

    setUsuarios(newUsuarios);
    setNombreUsuario('');
    setEmailUsuario('');
    setContraseñaUsuario('');
    setEdadUsuario('');
    setIndexUsuario('');
  };

  const renderItemAccessory = (item, index) => (
    <Button
      style={styles.button}
      size="tiny"
      status="danger"
      onPress={() => {
        setNombreUsuario(item.usuario);
        setEmailUsuario(item.correo);
        setContraseñaUsuario(item.contraseña);
        setEdadUsuario(item.edad);
        setIndexUsuario(index);
        setModalVisible(true);
      }}>
      MODIFICAR
    </Button>
  );
  const renderItemIcon = (props) => <Icon {...props} name="person" />;
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.usuario}`}
      description={`${item.correo}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory.bind(this, item, index)}
    />
  );

  return (
    <View style={styles.container}>
      <Modal
        isVisible={modalVisible}
        style={styles.myModal}
        hasBackdrop={true}
        backdropOpacity={0.5}
        onBackdropPress={() => {
          setIndexUsuario('');
          setModalVisible(false);
        }}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.viewModal}>
          <View style={styles.modalContent}>
            <Text style={styles.txtModal}>Introduzca los cambios</Text>
            <View style={styles.camposView}>
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
                value={String(contraseñaUsuario)}
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
            <View style={styles.buttonsModal}>
              <Button
                style={styles.btnCancelar}
                onPress={() => {
                  setIndexUsuario('');
                  setModalVisible(false);
                }}>
                Cancelar
              </Button>
              <Button
                style={styles.btnConfirmar}
                onPress={() => {
                  modificarUsuario();
                  setModalVisible(false);
                }}>
                Confirmar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <List style={styles.list} data={usuarios} renderItem={renderItem} />
    </View>
  );
};

export default ModificarUsuario;
