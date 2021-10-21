import React, { useMemo, useState } from 'react';
import * as S from './style';
import PictureSlider from './PictureSlider';
import { emptyStar, fullStar, blackStar } from '../../Assets/Star';

const LocationInfo = () => {
  const [star] = useState(true);

  const starBtn = useMemo(() => {
    if (star) return <img src={fullStar} />;
    else return <img src={emptyStar} />;
  }, [star]);

  return (
    <S.LoactionInfo isHaveImg={true}>
      <S.LocationTitle>
        <p>신성동 행정복지센터</p>
        {starBtn}
      </S.LocationTitle>
      <PictureSlider />
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
