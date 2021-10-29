import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk'
import CityPolygon from './CityPolygon';
import Marker from './Marker';

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
        center: {
            Ma: 37.63468141841211, 
            La: 126.83240090434131
        },
    })
    const [ map, setMap ] = useState<any>()

    return (
        <>
            <Map
                id={`map`}
                center={{
                    lat: 37.63468141841211,
                    lng: 126.83240090434131,
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
                    <Marker/>
                    :   <CityPolygon />
                        
                }
            </Map>
        </>
    );
}

export default Maps;