import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: {
    word: '',
    isSearch: false,
    isShowRandom: true,
  },
});

type ContentArrayType = {
  address: string;
  bookmark: boolean;
  detail_address: string;
  image: string;
  latitude: number;
  longitude: number;
  number: string;
  star_score: boolean;
  title: string;
};

export interface SearchStateType {
  content: Array<ContentArrayType>;
  total_elements: number;
}
