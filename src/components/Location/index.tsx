import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Random from './Random';
import Search from './Search';
import Login from './Login';

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
      {login}
    </S.Location>
  );
};

export default Location;
