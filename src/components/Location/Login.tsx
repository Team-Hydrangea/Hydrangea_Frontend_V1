import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const Login: FC<Props> = () => {
  return (
    <S.Login>
      <p>로그인하기</p>
    </S.Login>
  );
};

export default Login;
