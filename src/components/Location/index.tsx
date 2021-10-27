import React from 'react';
import * as S from './style';
import Random from './Random';

const Location = () => {
  return (
    <S.Location>
      <Random isHaveBookMark={false} />
    </S.Location>
  );
};

export default Location;
