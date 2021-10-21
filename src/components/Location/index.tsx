import React from 'react';
import * as S from './style';
import Random from './Random';

const index = () => {
  return (
    <S.Location>
      <Random isHaveBookMark={false} />
    </S.Location>
  );
};

export default index;
