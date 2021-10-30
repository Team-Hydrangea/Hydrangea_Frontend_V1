import React, { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mapsState, rsData } from '../../../../recoil/mapsState';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Restaurant } from '../../../../assets/Marker';

interface Props {
    data?: any
}

const RestaurantMarker: FC<Props> = () => {
    const [ info, setInfo ] = useRecoilState(mapsState);
    const [ data, setData ] = useRecoilState(rsData);

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
                                src: `${Restaurant}`,
                                size: {
                                    width: 33,
                                    height: 45,
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

export default RestaurantMarker;