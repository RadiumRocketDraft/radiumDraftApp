import {PlayerPosition} from '../enums';

export interface UserLogin {
  firstName: string;
  lastName: string;
  skill: number;
  position: PlayerPosition;
}
