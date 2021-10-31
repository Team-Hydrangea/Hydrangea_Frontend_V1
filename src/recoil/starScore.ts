import { atom } from 'recoil';

export const starScoreState = atom({
  key: 'starScoreState',
  default: {
    score: 0,
  },
});
