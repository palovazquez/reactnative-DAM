import BottomSheetModal from './bottomSheetModal';
import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import { ColorPicker } from 'react-native-color-picker';
import { TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Text } from '@ui-kitten/components';
import useOrientation, { SCREEN } from '../hooks/useOrientation';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { flex: 1, margin: 5 },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 999,
    borderRadius: 60,
    width: 60,
    height: 60,
    backgroundColor: '#00E884',
    borderColor: 'transparent',
  },
  textInput: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  cardText: { textAlign: 'center', fontWeight: 'bold' },
  greenButton: {
    margin: 2,
    marginVertical: 30,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#00D984',
    borderColor: 'transparent',
  },
  redButton: {
    margin: 2,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#F66052',
    borderColor: 'transparent',
  },
});

export const ListaCategorias = () => {
  const { categorias, setCategorias } = useContext(StoreContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [primaraPantalla, setPrimeraPantalla] = useState(true);
  const [nombreNuevaCategoria, setNombreNuevaCategoria] = useState('');
  const [colorNuevaCategoria, setColorNuevaCategoria] = useState('red');
  const screenDirection = useOrientation();

  const crearCategoria = () => {
    setCategorias([
      ...categorias,
      {
        nombre: nombreNuevaCategoria,
        color: colorNuevaCategoria,
        id: Math.random(),
      },
    ]);
    setNombreNuevaCategoria('');
    setColorNuevaCategoria('red');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BottomSheetModal
        visible={modalVisible}
        onClosePressed={() => setModalVisible(false)}
        title={primaraPantalla ? 'Crear una categoria' : 'Elija un color'}>
        <>
          {primaraPantalla && (
            <PrimeraPantalla
              nombreNuevaCategoria={nombreNuevaCategoria}
              setNombreNuevaCategoria={setNombreNuevaCategoria}
              colorNuevaCategoria={colorNuevaCategoria}
              setPrimeraPantalla={setPrimeraPantalla}
              crearCategoria={crearCategoria}
            />
          )}
          {!primaraPantalla && (
            <SegundaPantalla
              setPrimeraPantalla={setPrimeraPantalla}
              setColorNuevaCategoria={setColorNuevaCategoria}
            />
          )}
        </>
      </BottomSheetModal>
      <Button
        style={styles.button}
        accessoryLeft={PlusIcon}
        onPress={() => setModalVisible(true)}
      />
      <FlatList
        data={categorias}
        key={screenDirection}
        numColumns={screenDirection === SCREEN.LANDSCAPE ? 4 : 2}
        renderItem={({ item }) => {
          return (
            <Card
              style={{ ...styles.card, backgroundColor: item.color }}
              key={item.id}>
              <Text style={styles.cardText}>{item.nombre}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

const PrimeraPantalla = ({
  nombreNuevaCategoria,
  setNombreNuevaCategoria,
  colorNuevaCategoria,
  setPrimeraPantalla,
  crearCategoria,
}) => {
  return (
    <>
      <TextInput
        placeholder="Nombre categoría"
        style={styles.textInput}
        value={nombreNuevaCategoria}
        onChangeText={(nuevoTexto) => {
          setNombreNuevaCategoria(nuevoTexto);
        }}
      />
      <TouchableOpacity onPress={() => setPrimeraPantalla(false)}>
        <TextInput
          placeholder="Color"
          editable={false}
          style={styles.textInput}
          value={colorNuevaCategoria}
        />
      </TouchableOpacity>
      <Button style={styles.greenButton} onPress={() => crearCategoria()}>
        CREAR CATEGORÍA
      </Button>
    </>
  );
};

const SegundaPantalla = ({ setColorNuevaCategoria, setPrimeraPantalla }) => {
  return (
    <>
      <ColorPicker
        onColorSelected={(color) => {
          setPrimeraPantalla(true);
          setColorNuevaCategoria(color);
        }}
        hideSliders={true}
        style={styles.container}
      />
      <Button style={styles.redButton} onPress={() => setPrimeraPantalla(true)}>
        Volver
      </Button>
    </>
  );
};

const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;
