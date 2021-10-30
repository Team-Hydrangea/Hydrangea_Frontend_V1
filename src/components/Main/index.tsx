import React, { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Maps from '../Maps';
import Location from '../Location';
import BookMark from '../BookMark';

const Main = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const accessToken = localStorage.getItem('access_token');
  useEffect(() => {
    if (accessToken) setIsLogin(true);
    else setIsLogin(false);
  }, [accessToken]);

  return (
    <S.Main>
      <Location />
      <Maps />
      {isLogin && <BookMark />}
    </S.Main>
  );
};

export default Main;
