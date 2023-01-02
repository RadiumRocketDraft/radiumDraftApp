import React from 'react';
import {Text, View} from 'react-native';
import {Avatar, FlatList} from 'native-base';
import styles from './styles';
import ButtonLine from '../../components/shared/buttonLine';
import {logOut} from '../../utils/firebase';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  const DATA_MOCK = [
    {'First name': 'Ayom'},
    {'Last name': 'Aristo'},
    {Skill: 67},
    {Position: 'Flex'},
    {Status: 'Starter'},
    {Fidelity: 100},
    {MatchsPlayed: 1},
  ];

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.infoRow}>
        <Text style={styles.infoRowTitle}>{Object.keys(item)}</Text>
        <Text style={styles.infoRowText}>{Object.values(item)}</Text>
      </View>
    );
  };

  const onPressLogOut = () => {
    logOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ButtonLine customStyles={styles.logOut} onPress={onPressLogOut}>
        Log out
      </ButtonLine>
      <Avatar
        style={styles.avatarContainer}
        bg="lightBlue.400"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        size="2xl">
        NB
        <Avatar.Badge bg={'green.500'} />
      </Avatar>
      <View style={styles.infoContainer}>
        <FlatList bounces={false} data={DATA_MOCK} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
