import React, { FC } from 'react';
import { MapInfoWindow } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil'
import { mapsState, mousePositionState } from '../../../../recoil/mapsState';

interface Props {
  value: any[]
}

const InfoWindow:FC<Props> = ({value}) => {
  const [ mapData, setMapData ] = useRecoilState(mousePositionState)
  
  const infoData = value.filter((i) => i.name === mapData.name)[0];
  console.log(infoData)

  return (
    <>
        <MapInfoWindow position={{lat: mapData.lat, lng: mapData.lng}}>
            <img
              alt="close"
              width="14"
              height="13"
              src="http://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setMapData({lat: 0, lng:0, name: ''})}
            ></img>
            <div className="info">
              <div className="title">{infoData.name}</div>
              <div>총 인구 : {infoData.population}</div>
              <div>확진자수 : {infoData.confirm_case_count}</div>
              <div>백신 접종수 : {infoData.vaccinate_case_count}</div>
            </div>
          </MapInfoWindow>
    </>
  );
}

export default InfoWindow;