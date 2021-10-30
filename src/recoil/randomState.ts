import { atom } from 'recoil';

export const randomState = atom({
  key: 'randomState',
  default: {
    content: [],
  },
});

type randomStateArrayType = {
  address: string;
  detail_address: string;
  imgae: string;
  latitude: number;
  longitude: number;
  number: string;
  star_score: number;
  title: string;
  bookmark: boolean;
};

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
