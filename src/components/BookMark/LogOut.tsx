import * as S from './style';
import React from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
  const history = useHistory();
  const onClickHandler = () => {
    localStorage.removeItem('access_token');
    history.push('/');
  };
  return (
    <S.LogOutBox onClick={onClickHandler}>
      <p>로그아웃</p>
    </S.LogOutBox>
  );
};

export default LogOut;
