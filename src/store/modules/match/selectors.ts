import {createSelector} from '@reduxjs/toolkit';
import {MatchStatus} from 'types/enums/match';
import {RootState} from '../../store';

export const matchData = (state: RootState) => state.match;

export const historyMatchesData2 = createSelector([matchData], match => {
  return match.matches.filter(item => {
    return item.status !== MatchStatus.toBePlayed;
  });
});

export const currentMatch = createSelector(
  [matchData],
  match => match.currentMatch,
);

export const historyMatchesData = (state: RootState) => {
  return state.match.matches.filter(match => {
    return match.status !== MatchStatus.toBePlayed;
  });
};

export const matchesToBePlayed = (state: RootState) => {
  return state.match.matches.filter(match => {
    return match.status === MatchStatus.toBePlayed;
  });
};
