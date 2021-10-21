import React from 'react';
import { Restaurant, VacationSpot } from '../../../assets/Marker'
import { MapMarker } from 'react-kakao-maps-sdk';



const Marker = () => {

    const restData = [
        {
            name: '쿠우쿠우',
            position: {
                lat: 37.63520907648065, 
                lng: 126.83190302464878
            },
            type: 'restaurant'
        },
        {
            name: '맥도날드',
            position: {
                lat: 37.633831495204795,  
                lng: 126.83155241236068,
            },
            type: 'restaurant'
        },
    ]

  return (
    <>
        {
            restData.map((i, index) => {
                return (
                    <MapMarker // 마커를 생성합니다
                        position={{
                            lat: i.position.lat,
                            lng: i.position.lng,
                        }}
                        image={{
                            src: `${i.type === 'restaurant' ? Restaurant : VacationSpot}`,
                            size: {
                                width: 44,
                                height: 55,
                            }, // 마커이미지의 크기입니다
                        }}
                        key={`${i.position.lat}-${i.position.lng}`}
                    />
                )
            })
        }
    </>
  );
}

export default Marker;