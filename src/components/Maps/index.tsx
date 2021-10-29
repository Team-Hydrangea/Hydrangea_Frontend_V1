import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil'
import { Map } from 'react-kakao-maps-sdk'
import CityPolygon from './CityPolygon';
import Marker from './Marker';
import { mapsState } from '../../recoil/mapsState';

interface IMapData {
    level: number,
    center: {
        Ma: number,
        La: number
    } | any

}

const Maps = () => {
    const [data, setData] = useRecoilState(mapsState);
    const [ map, setMap ] = useState<any>()

    const onCenter = (level: number, center: any ) => {
        setData({...data, center: {lat: center.Ma, lng: center.La}, level: level})
    }


    return (
        <>
            <Map
                isPanto={true}
                id={`map`}
                center={{
                    lat: data.center.lat,
                    lng: data.center.lng,
                }}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                level={data.level}
                onDragEnd={(map) => onCenter(map.getLevel(), map.getCenter()) }
                onZoomChanged={(map) => onCenter(map.getLevel(), map.getCenter()) }
                onCreate={setMap}
            >
                {
                    data.level < 10 ?
                    <Marker/>
                    :   <CityPolygon />
                        
                }
            </Map>
        </>
    );
}

export default Maps;