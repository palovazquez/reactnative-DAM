import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 15,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  btnComprar: {
    borderRadius: 20,
    backgroundColor: '#00E884',
    borderColor: 'transparent',
  },
  btnVendido: {
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
  },
  btnDetalles: {
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    borderColor: 'transparent',
    height: 10,
  },
});

const Tarjeta = ({
  titulo,
  precio,
  vendido,
  onPressVerDetalles,
  onPressComprar,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.precio}>${precio}</Text>
      </View>
      <View style={styles.botonesContainer}>
        <Button style={styles.btnDetalles} onPress={onPressVerDetalles}>
          Detalles
        </Button>
        {!vendido && (
          <Button style={styles.btnComprar} onPress={onPressComprar}>
            COMPRAR
          </Button>
        )}
        {vendido && <Button style={styles.btnVendido}>VENDIDO</Button>}
      </View>
    </Card>
  );
};

export default Tarjeta;
