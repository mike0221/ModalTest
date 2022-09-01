import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

type ModalProps = {
  isModalVisible: boolean;
  onClosePress: () => void;
  onConfirmPress?: () => void;
  onModalHide?: () => void;
};
function OtherModal({isModalVisible, onClosePress}: ModalProps) {
  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Hi this is Other Modal👋!</Text>
          <Button onPress={onClosePress} title="Close" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default OtherModal;
