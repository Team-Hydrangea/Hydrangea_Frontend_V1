import axios from 'axios';
import { selector, selectorFamily, atom } from 'recoil';

export const bookeMarkState = atom({
  key: 'bookMarkState',
  default: [],
});

export const bookMarkListState = selectorFamily({
  key: 'bookMarkListState',
  get:
    token =>
    async ({ get }) => {
      try {
        const response = await axios.get('http://3.36.6.62:8080/bookmark');
        console.log(response.data, 'Qnd');
        const data = response.data;
        return data;
      } catch (err) {
        throw Error('에러입니다');
      }
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
