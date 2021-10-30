import React from 'react';
import * as S from './style';
import Maps from '../Maps';
import Location from '../Location';
import BookMark from '../BookMark';

const Main = () => {
  return (
    <S.Main>
      <Location />
      <Maps />
      <BookMark />
    </S.Main>
  );
};

export default Main;
