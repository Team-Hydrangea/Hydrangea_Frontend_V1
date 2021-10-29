import React from 'react';
import * as S from './style';
import Maps from '../Maps';
import Location from '../Location';

const Main = () => {
  return (
    <S.Main>
      <Location />
      <Maps />
    </S.Main>
  );
};

export default Main;
