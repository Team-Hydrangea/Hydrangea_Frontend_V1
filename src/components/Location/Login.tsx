import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const Login: FC<Props> = () => {
  const onLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <S.Login onClick={onLogin}>
      <p>로그인하기</p>
    </S.Login>
  );
};

export default Login;
