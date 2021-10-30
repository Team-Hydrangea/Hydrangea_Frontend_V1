import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LoactionInfo = styled.div<{
  isHaveImg: boolean;
}>`
  width: 307px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isHaveImg }) => css`
    height: ${isHaveImg ? '237px' : '100px'};
  `}
`;

export const LocationTitle = styled.div`
  width: 258px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  > p {
    font-weight: bold;
    font-size: 18px;
  }
  > img {
    width: 17px;
    height: 16px;
  }
`;

export const LocationExplain = styled.div`
  width: 258px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
  > p {
    font-size: 10px;
    font-weight: bold;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    > img {
      width: 9px;
      height: 9px;
    }
    > p {
      font-size: 10px;
      font-weight: bold;
    }
  }
`;

export const Picture = styled.div`
  width: 258px;
  height: 118px;
  background-color: red;
  margin-bottom: 7px;
`;
