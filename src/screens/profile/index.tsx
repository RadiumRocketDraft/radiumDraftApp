import React, {useEffect, useMemo} from 'react';
import {Avatar, ScrollView, View} from 'native-base';
import styles from './styles';
import ButtonLine from 'components/shared/buttonLine';
import {changePass, logOut} from 'utils/firebase';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayerAccount, playerSelector} from 'store/modules/player';
import ListRow from 'components/listRow';
import Button from 'components/shared/button';

const Profile = () => {
  const {isLoading, playerAccount} = useSelector(playerSelector);
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();

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
      <Avatar
        style={styles.avatarContainer}
        bg="lightBlue.400"
        source={profilePicture}
        size="2xl">
        <Avatar.Badge bg={'green.500'} />
      </Avatar>
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
        <Button
          text={'Change password'}
          customStyle={styles.changePass}
          handleSubmit={() => changePass('caca123')}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
