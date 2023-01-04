import {PlayerPosition, PlayerStatus} from '../enums';

export interface IPlayer {
  firstName: string;
  lastName: string;
  skill: number;
  position: PlayerPosition;
  status: PlayerStatus;
  fidelity: number;
  matchsPlayed: number;
  profileImage?: string;
}
