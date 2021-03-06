import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { bookmarkRandomState, randomState } from '../../recoil/randomState';
import * as S from './style';

interface Props {}

const Random: FC<Props> = props => {
  const [random, setRandom] = useRecoilState(randomState);
  const [bookmarkRandom, setBookmarkRandom] = useRecoilState(bookmarkRandomState);
  const [isHaveBookMark, setIsHaveBookMark] = useState<boolean>(false);
  const [content, setContent] = useState('');
  const accessToken = localStorage.getItem('access_token') as string;

  useEffect(() => {
    if (isHaveBookMark) setContent('즐겨찾기 장소 랜덤 추천 🎉');
    else setContent('랜덤 관광지 추천 🎉');
  }, [isHaveBookMark]);

  useEffect(() => {
    axios
      .get('http://3.36.6.62:8080/bookmark?size=5&page=0', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        if (response.data) setIsHaveBookMark(true);
      })
      .catch(error => {
        console.log(error);
        setIsHaveBookMark(false);
      });
  }, []);

  useEffect(() => {
    if (isHaveBookMark)
      axios
        .get(`http://3.36.6.62:8080/bookmark/random`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        })
        .then(response => setBookmarkRandom({ ...bookmarkRandom, ...response.data }))
        .catch(error => console.log(error));
    else
      axios
        .get(`http://3.36.6.62:8080/region/safe?page=0&size=5`, {
          headers: {
            Authorization: localStorage.getItem('access_token')
              ? 'Bearer ' + localStorage.getItem('access_token')
              : '',
          },
        })
        .then(response => setRandom({ content: random.content.concat(response.data) }))
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
