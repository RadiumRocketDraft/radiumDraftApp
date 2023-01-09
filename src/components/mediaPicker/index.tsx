import {Actionsheet, HStack, Text, useDisclose} from 'native-base';
import React, {forwardRef} from 'react';
import {useImperativeHandle} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface Props {}
interface IMediaPickerCustomRef {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const MediaPicker = forwardRef<IMediaPickerCustomRef, Props>(({}, ref) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onClose,
  }));

  useEffect(() => {
    if (isOpen) onOpen();
  }, [isOpen, onOpen]);

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
      <Actionsheet.Content>
        <Text style={styles.titleText}>Upload Profile Picture</Text>
        <HStack style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.mediaTypeButton}>
            <MaterialCommunityIcons name="camera" style={styles.icon} />
            <Text style={styles.descriptionText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediaTypeButton}>
            <MaterialCommunityIcons name="image" style={styles.icon} />
            <Text style={styles.descriptionText}>Gallery</Text>
          </TouchableOpacity>
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
});

export default MediaPicker;
