import React, { useState } from 'react';
import { Map, Polygon, CustomOverlayMap, MapInfoWindow } from 'react-kakao-maps-sdk'
import { data as polygon } from '../../Data/CityData'
import CityPolygon from './CityPolygon';
import SigPolygon from './SigPolygon';

const Maps = () => {

    return (
        <>
            <Map // 지도를 표시할 Container
            id={`map`}
            center={{
            // 지도의 중심좌표
            lat: 37.566826,
            lng: 126.9786567,
            }}
            style={{
            // 지도의 크기
            width: "100%",
            height: "100vh",
            }}
            level={12}
        >
            {/* <CityPolygon /> */}
            <SigPolygon />
        </Map>
        </>
    );
}

export default Maps;