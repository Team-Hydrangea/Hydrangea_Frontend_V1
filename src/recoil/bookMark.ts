import axios from 'axios';
import { selector, selectorFamily, atom } from 'recoil';

export const bookeMarkState = atom({
  key: 'bookMarkState',
  default: {
    content: [],
    total_pages: 0,
  },
});

type ContentArrayType = {
  address: string;
  detail_address: string;
  latitude: number;
  longitude: number;
  number: string;
  title: string;
};

export interface BookMarkListStateType {
  content: Array<ContentArrayType>;
  total_pages: number;
}
