import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Location = styled.div`
  min-width: 347px;
  height: 100vh;
  background-color: #fafafa;
  overflow-y: auto;
`;

export const Random = styled.div`
  width: 307px;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 11px;
  margin-top: 3px;
`;

export const Search = styled.form`
  width: 307px;
  height: 42px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin: 23px auto 10px auto;
  padding: 0px 16px;
`;

export const SearchIcon = styled.button`
  width: 19px;
  height: 19px;
  border: none;
  background-color: white;
  cursor: pointer;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 100%;
  font-size: 14px;
  padding: 0px 10px;
  border: none;
  :placeholder-shown {
    font-size: 13px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Login = styled.div`
  width: 307px;
  height: 40px;
  background-color: #7184d6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  left: 17.5px;
  cursor: pointer;
  > p {
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const NoContent = styled.div`
  width: 100%;
  color: #4c4c4c;
  text-align: center;
  margin-top: 100px;
  > p:first-child {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  > p:last-child {
    font-size: 10px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
  > img {
    width: 20px;
    height: 20px;
    animation: rotate_image 6s linear infinite;
    transform-origin: 50% 50%;
  }
`;
