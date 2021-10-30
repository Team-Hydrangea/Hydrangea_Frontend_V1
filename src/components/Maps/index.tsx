import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil'
import { Map } from 'react-kakao-maps-sdk'
import CityPolygon from './CityPolygon';
import Marker from './Marker';
import { mapsState, mousePositionState } from '../../recoil/mapsState';

const Maps = () => {
    const [mapData, setMapData] = useRecoilState(mapsState);
    const [ mousePosition ,setMousePosition] = useRecoilState(mousePositionState);

    const onCenter = (level: number, center: any, nePath: any, swPath: any ) => {
        setMapData({
            ...mapData, 
            center: {
                lat: center.Ma, 
                lng: center.La
            }, 
            level: level,
            swLatLng: {
                lat: swPath.Ma,
                lng: swPath.La,
              },
            neLatLng: {
                lat: nePath.Ma,
                lng: nePath.La,
            },
        })
    }


    return (
        <>
            <Map
                isPanto={true}
                id={`map`}
                center={{
                    lat: mapData.center.lat,
                    lng: mapData.center.lng,
                }}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                level={mapData.level}
                onDragEnd={(map) => onCenter(map.getLevel(), map.getCenter(), map.getBounds().getNorthEast(), map.getBounds().getSouthWest()) }
                onZoomChanged={(map) => onCenter(map.getLevel(), map.getCenter(), map.getBounds().getNorthEast(), map.getBounds().getSouthWest()) }
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