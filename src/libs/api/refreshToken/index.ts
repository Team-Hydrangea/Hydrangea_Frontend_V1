import axios from 'axios';

export const refreshToken = () => {
  axios
    .post('http://3.36.6.62:8080/token-refresh', {
      refresh_token: localStorage.getItem('refresh_token'),
    })
    .then(response => {
      localStorage.setItem('access_token', response.data);
    })
    .catch(error => {
      throw error;
    });
};
