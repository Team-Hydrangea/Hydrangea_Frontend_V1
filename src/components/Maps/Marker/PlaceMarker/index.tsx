import React, { FC, useEffect, useState } from 'react';
import mapApi from '../../../../libs/api/mapApi';
import { useRecoilState } from 'recoil';
import { mapsState, psData } from '../../../../recoil/mapsState';
import { MapMarker } from 'react-kakao-maps-sdk';
import { vacation } from '../../../../assets/Marker';
import { locationState } from '../../../../recoil/locationState';

interface Props {
    data?: any
}

const PlaceMarker: FC<Props> = () => {
    const [ info , setInfo ] = useRecoilState(mapsState)
    const [ data, setData ] = useRecoilState(psData);
    const [ location ,setLocation] = useRecoilState(locationState);

    const onLocation = (i: any) => {
        setLocation({
            content: [{...i}],
            total_elements: 1
        })
    }

    return (
        <>
            {
                info.level <= 5 && (data.map((i: any,index: any) => {
                    return (
                        <MapMarker
                            onClick={() => onLocation(i)}
                            position={{
                                lat: i.latitude,
                                lng: i.longitude,
                            }}
                            image={{
                                src: `${vacation}`,
                                size: {
                                    width: 33,
                                    height: 33,
                                }, 
                            }}
                            key={`${i.latitude}-${i.longitude}`}
                        />
                    )
                }))
            }
        </>
  );
}

export default PlaceMarker;