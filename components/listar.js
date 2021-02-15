import Tarjeta from './tarjeta';
import { screens } from '../App';
import { CHECKIMAGE } from '../images';
import Modal from 'react-native-modal';
import { existeComprador } from './detalle';
import {
  Text,
  Button,
  Icon,
  List,
  ListItem,
  Card,
  Modal as SecondModal,
} from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { StoreContext } from '../context/storeContext';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  list: {
    flex: 1,
  },
  myModal: {
    flex: 1,
    marginHorizontal: 0,
    marginBottom: 0,
  },
  viewModal: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalContent: {
    paddingVertical: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    minHeight: 450,
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  txtModal: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 5,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#00E884',
    borderColor: 'white',
  },
  secondModal: {
    marginHorizontal: 0,
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
  txtSecondModal: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  txtSecondModalProduct: {
    textAlign: 'center',
    color: '#00E884',
    fontSize: 15,
    marginBottom: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    marginHorizontal: 60,
    borderRadius: 60,
  },
  image: { height: 80, width: 80, alignSelf: 'center', marginBottom: 20 },
});

const Listar = ({ ...props }) => {
  const { productos } = useContext(StoreContext);
  const { usuarios, setUsuarios } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(
    false,
  );
  const [idProductoAComprar, setIdProductoAComprar] = useState('');
  const [comprador, setComprador] = useState('');
  const [producto, setProducto] = useState('');
  const navigator = useNavigation();

  const agregarCompra = (indexComprador) => {
    console.log(
      `CLIENTE: ${usuarios[indexComprador].usuario} - ${indexComprador}`,
    );
    console.log(`ID PRODUCTO: ${idProductoAComprar}`);

    const newUsuarios = usuarios.slice();
    newUsuarios[indexComprador] = {
      ...newUsuarios[indexComprador],
      articulos: [...newUsuarios[indexComprador].articulos, idProductoAComprar],
    };
    setIdProductoAComprar('');
    setUsuarios(newUsuarios);
    setConfirmationModalVisible(true);
  };

  const renderItemAccessory = (index) => (
    <Button
      style={styles.button}
      size="tiny"
      onPress={() => {
        console.log(`CLIENTE: ${usuarios[index].usuario} - ${index}`);
        setComprador(usuarios[index].usuario);
        agregarCompra(index);
        setModalVisible(false);
      }}>
      SELECCIONAR
    </Button>
  );
  const renderItemIcon = (props) => <Icon {...props} name="person" />;
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.usuario}`}
      description={`${item.correo}  -- ${item.id}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory.bind(this, index)}
    />
  );

  return (
    <View style={styles.container}>
      {productos.length > 0 ? (
        <ScrollView>
          {productos.map((producto) => (
            <Tarjeta
              titulo={producto.title}
              precio={producto.price}
              vendido={existeComprador(producto.id, usuarios)}
              onPressVerDetalles={() => {
                navigator.navigate(screens.detalle, { producto });
              }}
              onPressComprar={() => {
                setIdProductoAComprar(producto.id);
                console.log(
                  `PRODUCTO A COMPRAR: ${producto.title} - ${producto.id}`,
                );
                setProducto(producto.title);
                setModalVisible(true);
              }}
              key={producto.id}
            />
          ))}
        </ScrollView>
      ) : (
        <Text category="h3" status="info">
          Cargando productos disponibles...
        </Text>
      )}
      <Modal
        isVisible={modalVisible}
        style={styles.myModal}
        hasBackdrop={true}
        backdropOpacity={0.5}
        onBackdropPress={() => {
          setIdProductoAComprar('');
          setModalVisible(false);
        }}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.viewModal}>
          <View style={styles.modalContent}>
            <Text style={styles.txtModal}>Seleccione un usuario</Text>
            <List style={styles.list} data={usuarios} renderItem={renderItem} />
          </View>
        </View>
      </Modal>
      <SecondModal
        style={styles.secondModal}
        visible={confirmationModalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setConfirmationModalVisible(false)}>
        <Card style={styles.card} disabled={true}>
          <Image style={styles.image} source={CHECKIMAGE} />
          <Text
            style={
              styles.txtSecondModal
            }>{`${comprador} ha comprado el artículo`}</Text>
          <Text style={styles.txtSecondModalProduct}>{producto}</Text>
          <Button
            style={styles.btnOk}
            size="medium"
            onPress={() => {
              setComprador('');
              setProducto('');
              setConfirmationModalVisible(false);
            }}>
            Ok
          </Button>
        </Card>
      </SecondModal>
    </View>
  );
};

export default Listar;
