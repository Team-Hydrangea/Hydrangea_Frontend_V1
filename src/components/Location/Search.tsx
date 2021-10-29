import React, { FC } from 'react';
import * as S from './style';
import { searchIcon } from '../../assets/Search';

interface Props {}

const Search: FC<Props> = () => {
  return (
    <S.Search>
      <S.SearchIcon src={searchIcon} />
      <S.SearchInput placeholder={'장소, 주소를 검색하세요.'} />
    </S.Search>
  );
};

export default Search;
