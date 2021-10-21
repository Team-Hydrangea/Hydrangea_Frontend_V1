import React from 'react';
import * as S from './style';

const PictureSlider = () => {
  return (
    <S.PictureSlider>
      <S.Slider>
        <S.Container>
          <S.SliderBox>
            <S.SliderItem>
              <img />
            </S.SliderItem>
          </S.SliderBox>
        </S.Container>
      </S.Slider>
      <S.SliderPageLine>
        <S.SliderPage isNowPage={false} />
        <S.SliderPage isNowPage={true} />
        <S.SliderPage isNowPage={false} />
      </S.SliderPageLine>
    </S.PictureSlider>
  );
};

export default PictureSlider;
