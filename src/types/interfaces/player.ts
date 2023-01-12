import {PlayerPosition} from '../enums';

export interface IPlayer {
  _id: string;
  firstName: string;
  lastName: string;
  skill: number;
  position: PlayerPosition;
  fidelity: number;
  matchesPlayed: number;
  profileImage?: string;
  firebaseUid: string;
}
