import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { emptyStar, fullStar, blackStar } from '../../assets/Star';
import { useRecoilState } from 'recoil';
import { locationState } from '../../recoil/locationState';
import { mapsState } from '../../recoil/mapsState';
import { FaLaptopMedical } from 'react-icons/fa';

interface Props {
  address: string;
  bookmark: boolean;
  detail_address: string;
  image: string;
  latitude: number;
  longitude: number;
  number: string;
  star_score: number;
  title: string;
}

const LocationInfo: FC<Props> = props => {
  const {
    address,
    bookmark,
    detail_address,
    image,
    latitude,
    longitude,
    number,
    star_score,
    title,
  } = props;
  const [isHaveImg, setIsHaveImg] = useState<boolean>(true);
  const [location] = useRecoilState(locationState);
  const [ map, setMap ] = useRecoilState(mapsState)
  const accessToken = localStorage.getItem('access_token');
 
  const starBtn = useMemo(() => {
    if (accessToken) {
      if (bookmark) return <img src={fullStar} />;
      else return <img src={emptyStar} />;
    }
  }, [bookmark, accessToken]);

  const picture = useMemo(() => {
    if (isHaveImg) {
      return <S.Picture src={image} />;
    } else return;
  }, [isHaveImg, location]);

  useEffect(() => {
    if (image) setIsHaveImg(true);
    else setIsHaveImg(false);
  }, [image]);

  const showAddress = useMemo(() => {
    if (address) {
      if (detail_address) return <p>{`${address}${detail_address}`}</p>;
      else return <p>{address}</p>;
    }
  }, [address, detail_address]);

  const starScore = useMemo(() => {
    return <p>{star_score}</p>;
  }, [star_score]);

  const onMarkerMove = (lat: number, lng: number) => {
    setMap({
      ...map,
      center : {lat: lat, lng: lng},
      level: 4
    })
    map.center.lat === lat &&
    (setMap({
      ...map,
      center : {lat: lat, lng: lng},
    }))
  }

  return (
    <S.LoactionInfo isHaveImg={isHaveImg}>
      <S.LocationTitle>
        <p style={{ fontSize: title && title.length > 15 ? '16px' : '18px' }} onClick={() => onMarkerMove(latitude,longitude)}>{title}</p>
        {starBtn}
      </S.LocationTitle>
      {picture}
      <S.LocationExplain>{showAddress}</S.LocationExplain>
      <S.LocationExplain>
        <p>{number}</p>
        <span>
          <img src={blackStar} />
          {starScore}
        </span>
      </S.LocationExplain>
    </S.LoactionInfo>
  );
};

export default LocationInfo;
