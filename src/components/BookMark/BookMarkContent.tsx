import * as S from './style';
import React, { FC, useEffect, useState } from 'react';
import * as BsIcons from 'react-icons/bs';

interface Props {
  address: string;
  title: string;
  latitude: number;
  longitude: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BookMarkContent: FC<Props> = props => {
  const { address, title, page } = props;
  const onClickText = () => {};
  return (
    <S.BookMarkContentBox>
      <S.Content>
        <S.TopBox>
          <BsIcons.BsStarFill color='#7184d6' />
          <S.Title>{title}</S.Title>
        </S.TopBox>
        <S.BottomBox>
          <S.AddressText>{address}</S.AddressText>
          <S.StartText onClick={onClickText}>별점확인</S.StartText>
        </S.BottomBox>
      </S.Content>
    </S.BookMarkContentBox>
  );
};

export default BookMarkContent;
