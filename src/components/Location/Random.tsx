import axios from 'axios';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { bookmarkRandomState, randomState } from '../../recoil/randomState';
import * as S from './style';

interface Props {
  isHaveBookMark: boolean;
}

const Random: FC<Props> = props => {
  const [random, setRandom] = useRecoilState(randomState);
  const [bookmarkRandom, setBookmarkRandom] = useRecoilState(bookmarkRandomState);
  const { isHaveBookMark } = props;
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isHaveBookMark) setContent('즐겨찾기 장소 랜덤 추천 🎉');
    else setContent('랜덤 관광지 추천 🎉');
  }, [isHaveBookMark]);

  useEffect(() => {
    if (isHaveBookMark)
      axios
        .get(`${process.env.REACT_APP_BASE_URL}bookmark/random`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(response => setBookmarkRandom(response.data))
        .catch(error => console.log(error));
    else
      axios
        .get(`${process.env.REACT_APP_BASE_URL}region/safe`)
        .then(response => setRandom({ name: response.data.name }))
        .catch(error => console.log(error));
  }, [isHaveBookMark]);

  return (
    <S.Random>
      <S.Title>{content}</S.Title>
      <S.SubTitle>여기는 어때요? 아래 목록에서 확인해 보세요!</S.SubTitle>
    </S.Random>
  );
};

export default Random;
