import React, {ElementRef, useEffect, useMemo} from 'react';
import {Image, ScrollView, Text, View} from 'native-base';
import styles from './styles';
import ButtonLine from 'components/shared/buttonLine';
import {logOut} from 'utils/firebase';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayerAccount, playerSelector} from 'store/modules/player';
import ListRow from 'components/listRow';

import MediaPicker from 'components/mediaPicker';
import {useRef} from 'react';
import {TouchableOpacity} from 'react-native';

const Profile = () => {
  const {isLoading, playerAccount} = useSelector(playerSelector);
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();

  const mediaPickerRef = useRef<ElementRef<typeof MediaPicker>>(null);

  useEffect(() => {
    dispatch(getPlayerAccount());
  }, [dispatch]);

  const profilePicture = useMemo(
    () =>
      playerAccount?.profileImage
        ? {uri: playerAccount.profileImage}
        : require('assets/defaultProfile.jpeg'),
    [playerAccount?.profileImage],
  );

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
          <Image
            alt="Profile Picture"
            source={profilePicture}
            style={styles.avatarImage}
          />
          <Text style={styles.editText}>
            {playerAccount?.profileImage ? 'Edit' : 'Upload'}
          </Text>
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
      <MediaPicker
        ref={mediaPickerRef}
        title={
          (playerAccount?.profileImage ? 'Edit' : 'Upload') + ' Profile Picture'
        }
        onSuccess={image => {
          console.log(image);
          mediaPickerRef.current?.onClose();
        }}
      />
    </View>
  );
};

export default Profile;
