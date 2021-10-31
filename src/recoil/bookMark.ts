import axios from 'axios';
import { selector, selectorFamily, atom } from 'recoil';

export const bookeMarkState = atom({
  key: 'bookMarkState',
  default: {
    content: [],
    total_pages: 0,
  },
});
