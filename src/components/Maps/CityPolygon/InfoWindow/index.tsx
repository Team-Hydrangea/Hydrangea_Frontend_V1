import React, { FC } from 'react';
import { CustomOverlayMap, MapInfoWindow, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil'
import { mousePositionState } from '../../../../recoil/mapsState';
import * as S from './styles'
import {AiOutlineClose} from 'react-icons/ai'

interface Props {
  value: any[]
}

const InfoWindow:FC<Props> = ({value}) => {
  const [ mapData, setMapData ] = useRecoilState(mousePositionState)
  
  const infoData = value.filter((i) => i.name === mapData.name)[0];

  return (
    <>
        <CustomOverlayMap position={{lat: mapData.lat, lng: mapData.lng}}>
            <S.InfoWindowWrapper>
              <S.InfoWindowHeader>
                {infoData.name}
                <AiOutlineClose onClick={() => setMapData({lat: 0, lng:0, name: ''})}/>
              </S.InfoWindowHeader>
              <S.InfoWindowBody>
                <p>확진자 : {infoData.confirm_case_count} 명</p>
                <p>접종자 : {infoData.vaccinate_case_count} 명</p>
                <p>{infoData.score.toFixed(1)} 점</p>
              </S.InfoWindowBody>
            </S.InfoWindowWrapper>
          </CustomOverlayMap>
    </>
  );
}

export default InfoWindow;