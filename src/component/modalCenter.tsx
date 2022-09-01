import React, {useRef, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

type ModalProps = {
  isModalVisible: boolean;
  onClosePress: () => void;
  onPress?: () => void;
  onConfirmPress?: () => void;
  onModalHide?: () => void;
};

function ModalCenter({
  isModalVisible,
  onClosePress,
  onConfirmPress,
  onModalHide,
  onPress,
}: ModalProps) {
  return (
    <View>
      <Button title="Show modal" onPress={onPress} />

      <Modal isVisible={isModalVisible} onModalHide={onModalHide}>
        <View style={[styles.content, {backgroundColor: 'orange'}]}>
          <Text style={styles.contentTitle}>Hi this is Main Modal👋!</Text>
          <Button onPress={onConfirmPress} title="Confirm" />
          <Button onPress={onClosePress} title="Cancel" />
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

export default ModalCenter;
