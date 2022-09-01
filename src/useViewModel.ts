import React, {useState} from 'react';


const useViewModel = () => {
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOtherModalVisible, setOtherModalVisible] = useState(false);
  const [isBottomModalVisible, setBottomModalVisible] = useState(false);

  const [isModalHideSet, setModalHideSet] = useState(false);

  const OnConfirmPressMainModal = () => {
    console.log('Hello this is Evaent confrim press');
    setModalHideSet(true);
    setModalVisible(false);
  };
  
  const OnOpenPressMainModal = () => {
    setModalVisible(true);
  };

  const OnClosePressMainModal = () => {
    setModalVisible(false);
  };
  
  const ifMainModalHideMainModal = () => {
    if (isModalHideSet) {
      setOtherModalVisible(true);
    }
  };

  const OnConfirmPressBottomModal = () => {
    console.log('Hello this is Event confirm press from bottom Modal');
    setModalHideSet(true);
    setBottomModalVisible(false);
  };
  
  const OnOpenPressBottomModal = () => {
    setBottomModalVisible(true);
  };

  const OnClosePressBottomModal = () => {
    setBottomModalVisible(false);
  };
  
  const ifMainModalHideBottomModal = () => {
    if (isModalHideSet) {
      setOtherModalVisible(true);
    }
  };



  const OnCloseOtherModal = () => {
    setOtherModalVisible(false);
    setModalHideSet(false);
  };


  return {

    isModalVisible,
    isOtherModalVisible,
    isBottomModalVisible,

    OnConfirmPressMainModal,
    OnClosePressMainModal,
    ifMainModalHideMainModal, 
    OnOpenPressMainModal,

    OnCloseOtherModal,

    OnConfirmPressBottomModal,
    OnOpenPressBottomModal,
    OnClosePressBottomModal,
    ifMainModalHideBottomModal
  };
};

export default useViewModel;
