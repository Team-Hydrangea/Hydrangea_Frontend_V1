import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Random from './Random';
import Search from './Search';
import Login from './Login';
import LocationInfo from '../LocationInfo';

interface Props {}

const Location: FC<Props> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    if (accessToken !== '') setIsLogin(true);
    else setIsLogin(false);
  }, [accessToken]);

  const login = useMemo(() => {
    if (!isLogin) return <Login />;
    else return;
  }, [isLogin]);

  return (
    <S.Location>
      <Search />
      <Random isHaveBookMark={false} />
      <LocationInfo />
      {login}
    </S.Location>
  );
};

export default Location;
