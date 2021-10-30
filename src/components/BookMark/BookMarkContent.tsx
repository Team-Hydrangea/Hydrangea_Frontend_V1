import * as S from './style';
import React, { FC } from 'react';
import * as BsIcons from 'react-icons/bs';

interface Props {
  name: string;
  address: string;
}

const BookMarkContent: FC<Props> = ({ name, address }): JSX.Element => {
  return (
    <S.BookMarkContentBox>
      <S.Content>
        <S.TopBox>
          <BsIcons.BsStarFill color='#7184d6' />
          <S.Title>{name}</S.Title>
        </S.TopBox>
        <S.BottomBox>
          <S.AddressText>{address}</S.AddressText>
        </S.BottomBox>
      </S.Content>
    </S.BookMarkContentBox>
  );
};

export default BookMarkContent;
