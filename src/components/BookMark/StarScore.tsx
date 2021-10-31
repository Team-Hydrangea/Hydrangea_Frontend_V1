import * as S from './style';
import React, { FC, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './star.css';
import { useSetRecoilState } from 'recoil';
import { bookeMarkState } from '../../recoil/bookMark';

interface Props {
  setIsModal?: React.Dispatch<React.SetStateAction<boolean>>;
  lat: number;
  lng: number;
}

const StarScore: FC<Props> = ({ setIsModal, lat, lng }) => {
  const history = useHistory();
  const [rating, setRatin] = useState(0);
  const [hover, setHover] = useState(0);
  const access_token = localStorage.getItem('access_token');
  const bookmark = useSetRecoilState(bookeMarkState);
  const onClickStar = () => {
    console.log(1234);
    axios
      .post(
        `http://3.36.6.62:8080/starscore?latitude=${lat}&longitude=${lng}`,
        {
          score: 5,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}` as string,
          },
        },
      )
      .then(response => {
        console.log(9876);
        history.push('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <S.ModalWrapper>
        <S.StarModal>
          <div className='star-rating' onClick={onClickStar}>
            <input type='radio' id='5-stars' name='rating' value='5' />
            <label htmlFor='5-stars' className='star'>
              &#9733;
            </label>
            <input type='radio' id='4-stars' name='rating' value='4' />
            <label htmlFor='4-stars' className='star'>
              &#9733;
            </label>
            <input type='radio' id='3-stars' name='rating' value='3' />
            <label htmlFor='3-stars' className='star'>
              &#9733;
            </label>
            <input type='radio' id='2-stars' name='rating' value='2' />
            <label htmlFor='2-stars' className='star'>
              &#9733;
            </label>
            <input type='radio' id='1-star' name='rating' value='1' />
            <label htmlFor='1-star' className='star'>
              &#9733;
            </label>
          </div>
        </S.StarModal>
      </S.ModalWrapper>
    </>
  );
};

export default StarScore;
