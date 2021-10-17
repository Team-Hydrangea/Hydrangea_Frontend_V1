import React, { useEffect, useState } from 'react';
import { Map, Polygon, CustomOverlayMap, MapInfoWindow } from 'react-kakao-maps-sdk'
import { data as polygon } from '../../Data/CityData'
import CityPolygon from './CityPolygon';
import SigPolygon from './SigPolygon';

const Maps = () => {
    const [ level, setLevel ] = useState<any>(12)
    console.log(level)

    return (
        <>
            <Map // 지도를 표시할 Container
                id={`map`}
                center={{
                    lat: 37.566826,
                    lng: 126.9786567,
                }}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                level={level}
                onZoomChanged={(map) => setLevel(map.getLevel())}
            >
                {
                    level < 9 ?
                    null
                    :   level > 10 ?
                        <CityPolygon />
                        : <SigPolygon />
                }
            </Map>
        </>
    );
}

export default Maps;