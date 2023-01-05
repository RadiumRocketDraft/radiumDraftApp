import {PlayerPosition} from '../enums';

export interface IPlayer {
  firstName: string;
  lastName: string;
  skill: number;
  position: PlayerPosition;
  fidelity: number;
  matchesPlayed: number;
  profileImage?: string;
}
