import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Random from './Random';
import Search from './Search';
import Login from './Login';
import LocationInfo from '../LocationInfo';
import { useRecoilState } from 'recoil';
import { searchState } from '../../recoil/searchState';
import { locationState } from '../../recoil/locationState';
import { useInView } from 'react-intersection-observer';
import { logo } from '../../assets/Loading';

interface Props {}

const Location: FC<Props> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [search] = useRecoilState(searchState);
  const [location] = useRecoilState(locationState);
  const accessToken = localStorage.getItem('access_token');
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (accessToken !== '') setIsLogin(true);
    else setIsLogin(false);
  }, [accessToken]);

  useEffect(() => {
    if (location.content.length !== 0) {
      if (inView && !loading) {
        setLoading(true);
        if (location.total_elements % 5 === 0) {
          if (page + 1 <= location.total_elements / 5) {
            setPage(page + 1);
            setLoading(false);
            if (page !== location.total_elements) setLoading(false);
            else setLoading(true);
          }
        } else {
          if (page + 1 <= location.total_elements / 5 + 1) {
            setPage(page + 1);
            setLoading(false);
            if (page !== location.total_elements) setLoading(false);
            else setLoading(true);
          }
        }
      }
    }
  }, [inView]);

  const login = useMemo(() => {
    if (!isLogin) return <Login />;
    else return;
  }, [isLogin]);

  const showRandom = useMemo(() => {
    if (search.isShowRandom) return <Random isHaveBookMark={false} />;
    else return;
  }, [search.isShowRandom]);

  const isHaveContent = useMemo(() => {
    if (search.isSearch) {
      if (location.content.length === 0)
        return (
          <S.NoContent>
            <p>검색 결과가 없습니다.</p>
            <p>다른 검색어를 입력해보세요.</p>
          </S.NoContent>
        );
      else {
        return location.content.map(data => {
          return <LocationInfo {...data} />;
        });
      }
    }
  }, [location.content]);

  return (
    <S.Location>
      <Search page={page} setPage={setPage} />
      {showRandom}
      {isHaveContent}
      {!search.isShowRandom && search.isSearch && !loading && (
        <S.Loading ref={ref}>
          <img src={logo} />
        </S.Loading>
      )}
      {login}
    </S.Location>
  );
};

export default Location;
