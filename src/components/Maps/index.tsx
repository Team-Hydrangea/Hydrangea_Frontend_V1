import React, { useEffect, useState } from 'react';
import { Map, Polygon, CustomOverlayMap, MapInfoWindow } from 'react-kakao-maps-sdk'
import { data as polygon } from '../../Data/CityData'
import CityPolygon from './CityPolygon';
import SigPolygon from './SigPolygon';

interface IMapData {
    level: number,
    center: {
        Ma: number,
        La: number
    } | any

}

const Maps = () => {
    const [ mapData, setMapData ] = useState<IMapData>({
        level: 12,
        center: {Ma: 37.566826, La: 126.9786567},
    })
    const [ map, setMap ] = useState<any>()

    return (
        <>
            <Map
                id={`map`}
                center={{
                    lat: 37.566826,
                    lng: 126.9786567,
                }}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                level={mapData.level}
                onCenterChanged={(map) => setMapData({
                    level: map.getLevel(),
                    center: map.getCenter()
                  })}
                onCreate={setMap}
            >
                {
                    mapData.level < 9 ?
                    null
                    :   mapData.level > 10 ?
                        <CityPolygon />
                        : <SigPolygon />
                }
            </Map>
        </>
    );
}

export default Maps;