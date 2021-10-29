import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const [code, setCode] = useState<string>('');
  const [kakaoToken, setKakaoToken] = useState<string>('');
  const loginCode = useLocation().search.slice(6);
  const history = useHistory();

  useEffect(() => {
    setCode(loginCode);
  }, [loginCode]);

  useEffect(() => {
    if (code !== '') {
      axios({
        url: 'https://kauth.kakao.com/oauth/token',
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        data: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
      }).then(response => {
        setKakaoToken(response.data.access_token);
      });
    }
  }, [code]);

  useEffect(() => {
    if (kakaoToken !== '') {
      axios({
        url: 'http://3.36.6.62:8080/login',
        method: 'POST',
        data: {
          kakao_token: `Bearer ${kakaoToken}`,
        },
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          history.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [kakaoToken]);

  return <div>로그인 중입니다!</div>;
};

export default Callback;
