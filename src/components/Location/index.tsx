import React, { FC } from 'react';
import * as S from './style';
import Random from './Random';
import Search from './Search';

interface Props {}

const Location: FC<Props> = () => {
  return (
    <S.Location>
      <Search />
      <Random isHaveBookMark={false} />
    </S.Location>
  );
};

export default Location;
