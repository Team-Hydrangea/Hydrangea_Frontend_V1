import React, { useEffect, useState } from 'react';
import LogOut from './LogOut';
import * as S from './style';
import * as FaIcons from 'react-icons/fa';
import BookMarkContent from './BookMarkContent';
import { useInView } from 'react-intersection-observer';
import { bookeMarkState } from '../../recoil/bookMark';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { refreshToken } from '../../libs/api/refreshToken';

const BookeMark = () => {
  const [mount, setMount] = useState(false);
  const [effect, setEffect] = useState('mount1');
  const { ref, inView } = useInView();
  const [page, setPage] = useState<number>(0);
  const [bookMark] = useRecoilState(bookeMarkState);
  const pageLength: number[] = [];
  const access_token = localStorage.getItem('access_token');
  const [bookeMark, setBookMark] = useRecoilState(bookeMarkState);

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
  useEffect(() => {
    console.log(page, access_token);
    axios
      .get(`http://3.36.6.62:8080/bookmark?size=6&page=${page}`, {
        headers: {
          Authorization: `Bearer ${access_token}` as string,
        },
      })
      .then(response => {
        console.log(response);
        setBookMark({
          content: bookeMark.content.concat(response.data.content),
          total_pages: response.data.total_pages,
        });
      })
      .catch(error => {
        console.log(error);
        if (error.response?.status === 401 || error.response?.status === 403) refreshToken();
      });
  }, [page]);
  useEffect(() => {
    if (bookMark.content.length !== 0) {
      if (bookMark.total_pages % 5 === 0) {
        if (page + 1 <= bookMark.total_pages / 5) {
          setPage(page + 1);
        }
      } else {
        if (page + 1 <= bookMark.total_pages / 5 + 1) {
          setPage(page + 1);
        }
      }
    }
  });
  console.log(bookMark.content);
  return (
    <>
      <S.CircleBox onClick={onClickBtn}>
        <FaIcons.FaBars color='#7184d6' />
      </S.CircleBox>
      {mount && (
        <>
          <S.CircleBox onClick={onClickBtn}>
            <FaIcons.FaArrowUp color='#7184d6' />
          </S.CircleBox>
          <S.BookMarkOpen className={`box-wrap ${effect}`}>
            <LogOut />
            {bookMark.content.map((item, v) => {
              return <BookMarkContent page={page} setPage={setPage} key={v} {...item} />;
            })}
          </S.BookMarkOpen>
        </>
      )}
    </>
  );
};

export default BookeMark;
