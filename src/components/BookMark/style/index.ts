import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CircleBox = styled.button`
  width: 50px;
  height: 50px;
  left: 94%;
  top: 32px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  position: absolute;
  z-index: 4;
  transform: translateX(-1px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookMarkOpen = styled.div`
  width: 300px;
  height: 85vh;
  position: absolute;
  z-index: 6;
  top: 10%;
  right: 3.5%;
  transition: 850ms;
  animation: 0.5s ease-in-out loadEffect2;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  @keyframes loadEffect2 {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const LogOutBox = styled.div`
  width: 300px;
  height: 50px;
  background: #7184d6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  p {
    font-family: Noto Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    text-align: center;
  }
`;

export const BookMarkContentBox = styled.div`
  width: 300px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 10px;
  padding-top: 12px;
`;

export const Content = styled.div`
  width: 263px;
  height: 40px;
  margin: auto; ;
`;

export const TopBox = styled.div`
  padding-top: 2px;
`;

export const Title = styled.span`
  font-family: Noto Sans;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  clear: both;
  BsIcons {
    margin-top: 2px;
    clear: both;
    vertical-align: middle;
  }
`;

export const BottomBox = styled.div`
  width: fit-content;
  height: 14px;
  margin: 0;
  display: flex;
`;

export const AddressText = styled.span`
  font-family: Noto Sans;
  font-size: 10px;
  color: #000000;
`;

export const StartText = styled.span`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #7184d6;
  margin: 3px 0px 0px 1px;
  cursor: pointer;
`;
