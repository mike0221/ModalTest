import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import ModalCenter from './component/modalCenter';
import OtherModal from './component/otherModal';
import BottomModal from './component/onBottommodal';

import useViewModel from './useViewModel';

const Home = () => {
  const {
    isModalVisible,
    isOtherModalVisible,
    // isBottomModalVisible,

    OnConfirmPressMainModal,
    OnClosePressMainModal,
    ifMainModalHideMainModal,
    OnOpenPressMainModal,

    OnCloseOtherModal,
  } = useViewModel();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalCenter
        isModalVisible={isModalVisible}
        onClosePress={OnClosePressMainModal}
        onPress={OnOpenPressMainModal}
        onConfirmPress={OnConfirmPressMainModal}
        onModalHide={ifMainModalHideMainModal}
      />

      <OtherModal
        isModalVisible={isOtherModalVisible}
        onClosePress={OnCloseOtherModal}
      />
    </View>
  );
};

export default Home;
