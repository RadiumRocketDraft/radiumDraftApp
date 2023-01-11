import React, {ElementRef, useCallback, useEffect, useState} from 'react';
import {Image, ScrollView, Spinner, Text, Toast, View} from 'native-base';
import styles from './styles';
import ButtonLine from 'components/shared/buttonLine';
import {logOut} from 'utils/firebase';
import {Image as IImage} from 'react-native-image-crop-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayerAccount, playerSelector} from 'store/modules/player';
import ListRow from 'components/listRow';
import {ModalWithInput} from 'components/shared/modals';

import MediaPicker from 'components/mediaPicker';
import {useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import useFirebaseStorage from 'hooks/useFirebaseStorage';
import {CustomToast, ToastStatus} from 'components/customToast';

const Profile = () => {
  const [pickedImage, setPickedImage] = useState<IImage>();
  const {isLoading, playerAccount} = useSelector(playerSelector);
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const {storageError, isUploading} = useFirebaseStorage(pickedImage);

  const mediaPickerRef = useRef<ElementRef<typeof MediaPicker>>(null);

  useEffect(() => {
    dispatch(getPlayerAccount());
  }, [dispatch]);

  useEffect(() => {
    if (storageError) {
      Toast.show({
        render: ({id}) => {
          return (
            <CustomToast
              id={id}
              description={storageError}
              title={'Error uploading picture'}
              status={ToastStatus.error}
            />
          );
        },
      });
    }
  }, [storageError]);

  const mediaPickerOnSuccessHandler = useCallback((image: IImage) => {
    mediaPickerRef.current?.onClose();
    setPickedImage(image);
  }, []);

  const onPressLogOut = () => {
    logOut();
  };

  return (
    <View style={styles.container} pt={top}>
      <ButtonLine customStyles={styles.logOut} onPress={onPressLogOut}>
        Log out
      </ButtonLine>
      <TouchableOpacity onPress={mediaPickerRef.current?.onOpen}>
        <View style={styles.avatarContainer}>
          {isUploading || isLoading ? (
            <Spinner style={styles.avatarImage} />
          ) : (
            <>
              <Image
                alt="Profile Picture"
                source={{uri: playerAccount?.profileImage ?? '/invalidURL'}}
                style={styles.avatarImage}
                fallbackSource={require('assets/defaultProfile.jpeg')}
              />
              <Text style={styles.editText}>
                {playerAccount?.profileImage ? 'Edit' : 'Upload'}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      <ScrollView bounces={false} contentContainerStyle={styles.infoContainer}>
        <ListRow
          title={'First Name'}
          value={playerAccount?.firstName}
          isLoading={isLoading}
        />
        <ListRow
          title={'Last Name'}
          value={playerAccount?.lastName}
          isLoading={isLoading}
        />
        <ListRow
          title={'Skill'}
          value={playerAccount?.skill}
          isLoading={isLoading}
        />
        <ListRow
          title={'Position'}
          value={playerAccount?.position}
          isLoading={isLoading}
        />
        <ListRow
          title={'Fidelity'}
          value={playerAccount?.fidelity}
          isLoading={isLoading}
        />
        <ListRow
          title={'Matches Played'}
          value={playerAccount?.matchesPlayed}
          isLoading={isLoading}
        />
      </ScrollView>
      <ModalWithInput
        onSubmit={() => {}} // TODO: Change password functionality
        firstInputName={'email'}
        secondInputName={'password'}
        buttonText={'Change password'}
        headerText={'You need to authenticate first'}
      />
      <MediaPicker
        ref={mediaPickerRef}
        title={
          (playerAccount?.profileImage ? 'Edit' : 'Upload') + ' Profile Picture'
        }
        onSuccess={mediaPickerOnSuccessHandler}
      />
    </View>
  );
};

export default Profile;
