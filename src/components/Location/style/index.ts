import styled from '@emotion/styled';

export const Location = styled.div`
  width: 347px;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Random = styled.div`
  width: 307px;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 11px;
  margin-top: 3px;
`;

export const Search = styled.div`
  width: 307px;
  height: 42px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin: 23px 0px 10px 0px;
  padding: 0px 16px;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 100%;
  font-size: 14px;
  padding: 0px 10px;
  border: none;
  :placeholder-shown {
    font-size: 13px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }
`;
