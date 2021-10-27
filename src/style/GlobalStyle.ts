import { css } from '@emotion/react';

const global = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  body {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: white;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #ff9d86;
  }
`;

export default global;
