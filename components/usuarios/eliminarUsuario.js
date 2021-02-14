/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { UserContext } from '../../context/userContext';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../App';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 2,
    borderRadius: 20,
    backgroundColor: '#F66052',
    borderColor: 'transparent',
  },
  viewModal: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalContent: {
    paddingVertical: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    minHeight: 170,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  myModal: {
    flex: 1,
    marginHorizontal: 0,
    marginBottom: 0,
  },
  txtModal: {
    flex: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  buttonsModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
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
});

const EliminarUsuario = () => {
  const { usuarios, setUsuarios } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState('');
  const [nombreAEliminar, setNombreAEliminar] = useState('');

  const eliminarUsuario = () => {
    const newUsuarios = usuarios.filter(
      (usuario) => usuario.id !== idAEliminar,
    );
    setUsuarios(newUsuarios);
  };

  const renderItemAccessory = (id, index) => (
    <Button
      style={styles.button}
      size="tiny"
      onPress={() => {
        setIdAEliminar(id);
        setNombreAEliminar(usuarios[index].usuario);
        setModalVisible(true);
      }}>
      ELIMINAR
    </Button>
  );
  const renderItemIcon = (props) => <Icon {...props} name="person" />;
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.usuario}`}
      description={`${item.correo}  -- ${item.id}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory.bind(this, item.id, index)}
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
          setIdAEliminar('');
          setNombreAEliminar('');
          setModalVisible(false);
        }}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.viewModal}>
          <View style={styles.modalContent}>
            <Text style={styles.txtModal}>
              {`¿Está seguro que desea eliminar al usuario ${nombreAEliminar}?`}
            </Text>
            <View style={styles.buttonsModal}>
              <Button
                style={styles.btnCancelar}
                onPress={() => {
                  setIdAEliminar('');
                  setNombreAEliminar('');
                  setModalVisible(false);
                }}>
                Cancelar
              </Button>
              <Button
                style={styles.btnConfirmar}
                onPress={() => {
                  eliminarUsuario();
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
export default EliminarUsuario;
