import {Actionsheet, HStack, Text, useDisclose} from 'native-base';
import React, {forwardRef} from 'react';
import {useImperativeHandle} from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {useState} from 'react';

interface Props {
  title: string;
  onError?: (error: string) => void;
  onSuccess?: (image: Image) => void;
}
interface IMediaPickerCustomRef {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const MediaPicker = forwardRef<IMediaPickerCustomRef, Props>(
  ({title, onError, onSuccess}, ref) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclose();

    const onGalleryPress = useCallback(async () => {
      if (isDisabled) return;
      setIsDisabled(true);
      try {
        const image = await ImagePicker.openPicker({
          mediaType: 'photo',
          width: 400,
          height: 400,
          cropping: true,
          cropperCircleOverlay: true,
        });
        onSuccess?.(image);
      } catch (error) {
        if (typeof error === 'string') onError?.(error);
        onError?.(String(error));
      }
      setIsDisabled(false);
      onClose();
    }, [isDisabled, onClose, onError, onSuccess]);

    const onCameraPress = useCallback(async () => {
      if (isDisabled) return;
      setIsDisabled(true);
      try {
        const image = await ImagePicker.openCamera({
          mediaType: 'photo',
          width: 400,
          height: 400,
          cropping: true,
          cropperCircleOverlay: true,
        });
        onSuccess?.(image);
      } catch (error) {
        if (typeof error === 'string') onError?.(error);
        onError?.(String(error));
      }
      setIsDisabled(false);
      onClose();
    }, [isDisabled, onClose, onError, onSuccess]);

    const conditionalOnClose = useCallback(() => {
      if (!isDisabled) onClose();
    }, [isDisabled, onClose]);

    useImperativeHandle(
      ref,
      () => ({
        isOpen,
        onOpen,
        onClose,
      }),
      [isOpen, onClose, onOpen],
    );

    useEffect(() => {
      if (isOpen) onOpen();
    }, [isOpen, onOpen]);

    return (
      <Actionsheet
        isOpen={isOpen}
        onClose={conditionalOnClose}
        hideDragIndicator>
        <Actionsheet.Content style={styles.actionSheetContent}>
          <Text style={styles.titleText}>{title}</Text>
          <HStack style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.mediaTypeButton}
              onPress={onCameraPress}>
              <MaterialCommunityIcons name="camera" style={styles.icon} />
              <Text style={styles.descriptionText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mediaTypeButton}
              onPress={onGalleryPress}>
              <MaterialCommunityIcons name="image" style={styles.icon} />
              <Text style={styles.descriptionText}>Gallery</Text>
            </TouchableOpacity>
          </HStack>
        </Actionsheet.Content>
      </Actionsheet>
    );
  },
);

export default MediaPicker;
