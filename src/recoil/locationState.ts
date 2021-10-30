import { atom } from 'recoil';

export const locationState = atom<{content: any[], total_elements: number}>({
  key: 'locationState',
  default: {
    content: [],
    total_elements: 0,
  },
});
