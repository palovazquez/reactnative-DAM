import React from 'react';
import { Icon } from '@ui-kitten/components';
import { StyleSheet, View, Modal, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    height: '50%',
    padding: 24,
    borderColor: 'transparent',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalTileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: { width: 32, height: 32 },
  title: { fontSize: 20, color: '#000000', marginBottom: 30 },
});

const BottomSheetModal = ({ title, visible, onClosePressed, children }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.modalTileView}>
            <Text style={styles.title}>{title}</Text>
            {!!onClosePressed && ( //Hacemos !!onClosePressed para mostrar el boton solo si le pasamos un onClose
              <Pressable onPress={() => onClosePressed()}>
                <Icon style={styles.icon} fill="#000000" name="close" />
              </Pressable>
            )}
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;
