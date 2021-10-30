import React, { useState } from 'react';
import LogOut from './LogOut';
import * as S from './style';
import * as FaIcons from 'react-icons/fa';
import BookMarkContent from './BookMarkContent';

const BookeMark = () => {
  const [mount, setMount] = useState(false);
  const [effect, setEffect] = useState('mount1');
  const pageLength: number[] = [];
  for (let i = 0; i < 10; i++) {
    pageLength.push(i + 1);
  }
  const onClickBtn = () => {
    if (mount) {
      setEffect('unmount');
      setTimeout(() => {
        setMount(v => !v);
      });
    } else {
      setEffect('mount1');
      setMount(v => !v);
    }
  };

  return (
    <>
      <S.CircleBox onClick={onClickBtn}>
        <FaIcons.FaBars color='#7184d6' />
      </S.CircleBox>
      {mount ? (
        <>
          <S.CircleBox onClick={onClickBtn}>
            <FaIcons.FaArrowUp color='#7184d6' />
          </S.CircleBox>
          <S.BookMarkOpen className={`box-wrap ${effect}`}>
            <LogOut />
            {pageLength.map(v => {
              return (
                <BookMarkContent
                  key={v}
                  name={'신성동 행정복지 센터'}
                  address={'대전광역시 유성구 하기동 18-6'}
                />
              );
            })}
          </S.BookMarkOpen>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BookeMark;
