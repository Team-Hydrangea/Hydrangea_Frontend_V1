import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { searchIcon } from '../../assets/Search';
import { useRecoilState } from 'recoil';
import { searchState } from '../../recoil/searchState';
import { locationState } from '../../recoil/locationState';
import axios from 'axios';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Search: FC<Props> = props => {
  const { page, setPage } = props;
  const [search, setSearch] = useRecoilState(searchState);
  const [location, setLocation] = useRecoilState(locationState);

  const searchInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ word: event.target.value, isSearch: false, isShowRandom: false });
  };

  useEffect(() => {
    if (search.isSearch)
      axios
        .post(
          `http://3.36.6.62:8080/place/list?size=5&page=${page}`,
          {
            word: search.word,
          },
          {
            headers: {
              Authorization: localStorage.getItem('access_token')
                ? 'Bearer ' + localStorage.getItem('access_token')
                : '',
            },
          },
        )
        .then(response => {
          setLocation({
            content: location.content.concat(response.data.content),
            total_elements: response.data.total_elements,
          });
        })
        .catch(error => {
          console.log(error);
        });
  }, [page, search.isSearch, search.word]);

  const SearchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch({ ...search, isSearch: true, isShowRandom: false });
    setLocation({ content: [], total_elements: 0 });
    setPage(0);
  };

  return (
    <S.Search onSubmit={SearchSubmitHandler}>
      <S.SearchIcon type={'submit'}>
        <img src={searchIcon} />
      </S.SearchIcon>
      <S.SearchInput placeholder={'장소, 주소를 검색하세요.'} onChange={searchInputChangeHandler} />
    </S.Search>
  );
};

export default Search;
