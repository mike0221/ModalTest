import React, {useRef, useState} from 'react';
import {Button, Text, View, StyleSheet, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

type ModalProps = {
  isModalVisible: boolean;
  onClosePress: () => void;
  onPress?: () => void;
  onConfirmPress?: () => void;
  onModalHide?: () => void;
};

function BottomModal({
  isModalVisible,
  onClosePress,
  onConfirmPress,
  onModalHide,
  onPress,
}: ModalProps) {
  const data = [
    {
      time: '18:00',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '18:30',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '19:00',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '19:30',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '20:00',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '20:30',
      remaining_slots: 10,
      total_slots: 10,
    },
    {
      time: '21:00',
      remaining_slots: 10,
      total_slots: 10,
    },
  ];

  return (
    <View>
      <Button title="Show Bottom modal" onPress={onPress} />

      <Modal
        isVisible={isModalVisible}
        onModalHide={onModalHide}
        // propagateSwipe={true}
        style={styles.view}>
        <View
          style={[styles.content, {backgroundColor: 'skyblue', height: '50%'}]}>
          <View>
            <Text style={styles.contentTitle}>Header👋!</Text>
          </View>
          <View>
            <ScrollView contentContainerStyle={{height: '50%', flexGrow: 1}}>
              {data.map(item => {
                return (
                  <View style={{padding: 10, margin: 10}}>
                    <Text>{item.time}</Text>
                  </View>
                );
              })}
              <Button onPress={onConfirmPress} title="Confirm" />
              <Button onPress={onClosePress} title="Cancel" />
            </ScrollView>
          </View>
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
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    marginBottom: 20,
  },
});

export default BottomModal;
