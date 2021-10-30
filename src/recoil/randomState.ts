import { atom } from 'recoil';

export const randomState = atom({
  key: 'randomState',
  default: {
    name: '',
  },
});

export const bookmarkRandomState = atom({
  key: 'bookmarkRandomState',
  default: {
    address: '',
    detail_address: '',
    image: '',
    latitude: 0,
    longitude: 0,
    number: '',
    title: '',
    star_score: 0,
    bookmark: true,
  },
});
