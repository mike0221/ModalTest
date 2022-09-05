import React, {useState} from 'react';


const useViewModel = () => {
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [isOtherModalVisible, setOtherModalVisible] = useState(false);
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
    // if (isModalHideSet) {
      setOtherModalVisible(true);
    // }
  };

  const OnCloseOtherModal = () => {
    setOtherModalVisible(false);
    setModalHideSet(false);
  };


  return {

    isModalVisible,
    isOtherModalVisible,
  
    OnConfirmPressMainModal,
    OnClosePressMainModal,
    ifMainModalHideMainModal, 
    OnOpenPressMainModal,

    OnCloseOtherModal,

  };
};

export default useViewModel;
