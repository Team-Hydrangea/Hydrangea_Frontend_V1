import * as S from './style';
import React, { FC, useEffect, useMemo, useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import StarScore from './StarScore';

interface Props {
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  title: string;
  latitude: number;
  longitude: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BookMarkContent: FC<Props> = props => {
  const [isModal, setIsModal] = useState(false);
  const { address, title, latitude, longitude } = props;
  const onClickText = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      {isModal && <StarScore setIsModal={setIsModal} lat={latitude} lng={longitude} />}
      <S.BookMarkContentBox>
        <S.Content>
          <S.TopBox>
            <BsIcons.BsStarFill color='#7184d6' />
            <S.Title>{title}</S.Title>
          </S.TopBox>
          <S.BottomBox>
            <S.AddressText>{address}</S.AddressText>
            <S.StarText onClick={onClickText}>별점확인</S.StarText>
          </S.BottomBox>
        </S.Content>
      </S.BookMarkContentBox>
    </>
  );
};

export default BookMarkContent;
