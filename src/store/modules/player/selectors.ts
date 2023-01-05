import {RootState} from '../../store';

export const playersListSelector = (state: RootState) => state.player.players;
export const playerSelector = (state: RootState) => state.player;
