import React, { FC } from 'react';
import * as S from './style';
import Random from './Random';
import Search from './Search';
import Login from './Login';

interface Props {}

const Location: FC<Props> = () => {
  return (
    <S.Location>
      <Search />
      <Random isHaveBookMark={false} />
      <Login />
    </S.Location>
  );
};

export default Location;
