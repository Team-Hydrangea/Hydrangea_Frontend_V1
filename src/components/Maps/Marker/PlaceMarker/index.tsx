import React, { FC, useEffect, useState } from 'react';
import mapApi from '../../../../libs/api/mapApi';
import { useRecoilState } from 'recoil';
import { mapsState, vsData } from '../../../../recoil/mapsState';
import { MapMarker } from 'react-kakao-maps-sdk';
import { VacationSpot } from '../../../../assets/Marker';

interface Props {
    data?: any
}

const PlaceMarker: FC<Props> = () => {
    const [ info , setInfo ] = useRecoilState(mapsState)
    const [ data, setData ] = useRecoilState(vsData);

    return (
        <>
            {
                info.level <= 4 && (data.map((i: any,index: any) => {
                    return (
                        <MapMarker // 마커를 생성합니다
                            position={{
                                lat: i.latitude,
                                lng: i.longitude,
                            }}
                            image={{
                                src: `${VacationSpot}`,
                                size: {
                                    width: 44,
                                    height: 55,
                                }, // 마커이미지의 크기입니다
                            }}
                            key={`${i.latitudelat}-${i.longitude}`}
                        />
                    )
                }))
            }
        </>
  );
}

export default PlaceMarker;