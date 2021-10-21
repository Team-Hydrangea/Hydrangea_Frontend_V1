import React, { FC, useEffect, useState } from 'react';
import * as S from './style';

interface Props {
  isHaveBookMark: boolean;
}

const Random: FC<Props> = props => {
  const { isHaveBookMark } = props;
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isHaveBookMark) setContent('즐겨찾기 장소 랜덤 추천 🎉');
    else setContent('랜덤 관광지 추천 🎉');
  }, [isHaveBookMark]);

  return (
    <S.Random>
      <S.Title>{content}</S.Title>
      <S.SubTitle>여기는 어때요? 아래 목록에서 확인해 보세요!</S.SubTitle>
    </S.Random>
  );
};

export default Random;
