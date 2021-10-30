import { atom } from 'recoil';

export const locationState = atom({
  key: 'locationState',
  default: {
    content: [],
    total_elements: 0,
  },
});
