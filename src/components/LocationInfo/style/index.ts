import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LoactionInfo = styled.div<{
  isHaveImg: boolean;
}>`
  width: 307px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
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
    word-break: keep-all;
    cursor: pointer;
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
    font-size: 12px;
    font-weight: bold;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    > img {
      width: 10px;
      height: 10px;
    }
    > p {
      font-size: 11px;
      font-weight: bold;
    }
  }
`;

export const Picture = styled.img`
  width: 258px;
  height: 118px;
  margin-bottom: 7px;
`;
