import React, { useMemo, useState } from 'react';
import * as S from './style';
import { emptyStar, fullStar, blackStar } from '../../assets/Star';

const LocationInfo = () => {
  const [star] = useState<boolean>(true);
  const [isHaveImg, setIsHaveImg] = useState<boolean>(false);

  const starBtn = useMemo(() => {
    if (star) return <img src={fullStar} />;
    else return <img src={emptyStar} />;
  }, [star]);

  const picture = useMemo(() => {
    if (isHaveImg) {
      return <S.Picture />;
    } else return;
  }, [isHaveImg]);

  return (
    <S.LoactionInfo isHaveImg={isHaveImg}>
      <S.LocationTitle>
        <p>신성동 행정복지센터</p>
        {starBtn}
      </S.LocationTitle>
      {picture}
      <S.LocationExplain>
        <p>대전광역시 유성구 하기동 18-6</p>
      </S.LocationExplain>
      <S.LocationExplain>
        <p>010-0000-0000</p>
        <span>
          <img src={blackStar} />
          <p>4.75</p>
        </span>
      </S.LocationExplain>
    </S.LoactionInfo>
  );
};

export default LocationInfo;
