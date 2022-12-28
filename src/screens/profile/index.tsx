import React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'native-base';
import styles from './styles';

const Profile = () => {
  const DATA_MOCK = {
    firstName: 'Ayom',
    lastName: 'Aristo',
    skill: 67,
    position: 'Flex',
    status: 'Starter',
    fidelity: 100,
    matchsPlayed: 1,
  };

  return (
    <View style={styles.container}>
      <Avatar
        style={styles.avatarContainer}
        bg="lightBlue.400"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        size="2xl">
        NB
        <Avatar.Badge
          bg={DATA_MOCK.status === 'Starter' ? 'green.500' : 'red.500'}
        />
      </Avatar>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>First Name</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.firstName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Last Name</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.lastName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Skill</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.skill}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Position</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.position}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Status</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.status}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Fidelity</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.fidelity}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowTitle}>Matches played</Text>
          <Text style={styles.infoRowText}>{DATA_MOCK.matchsPlayed}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

// firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   skill: { type: Number, required: true },
//   position: { type: String, enum: PlayerPosition, required: true },
//   status: { type: String, enum: PlayerStatus, required: true },
//   fidelity: { type: Number, default: 100, required: true },
//   matchsPlayed: { type: Number },
