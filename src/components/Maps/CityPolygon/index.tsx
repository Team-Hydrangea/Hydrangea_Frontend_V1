import React, { useEffect, useState } from 'react';
import { data as cityPolygon } from '../../../data/CityData'
import { CustomOverlayMap, Polygon } from 'react-kakao-maps-sdk';
import { mapsState, mousePositionState } from '../../../recoil/mapsState';
import { useSetRecoilState,useRecoilState, useRecoilValue } from 'recoil'
import InfoWindow from './InfoWindow';
import { regionInfoState } from '../../../recoil/regionInfoState';

interface ICityData {
  circuitName: string;
  isMouseOver: boolean;
  center: number[];
  path: {
    lat: number;
    lng: number;
  }[];
}

const CityPolygon = () => {
    const [ areas, setAreas ] = useState<ICityData[]>([])
    const [map, setMap] = useRecoilState(mapsState)
    const [ mousePosition, setMousePosition ] = useRecoilState(mousePositionState)
    const value = useRecoilValue(regionInfoState);
    console.log(value)

    useEffect(() => {
        let data = cityPolygon.features;
        let area: any[] = []
        data.forEach((data: any) => {
            let coordinate: { lat: number; lng: number; }[] = []
            let eachLength = data.geometry.coordinates.map((x: string | any[]) => x.length)
            let maxNum = Math.max(...eachLength);
            let where = eachLength.indexOf(maxNum);
            data.geometry.coordinates[where].forEach((info: any, index: string | number) => {
                coordinate.push({lat: info[1], lng: info[0]})
            })
            area.push(
                {
                    circuitName: data.properties.CTP_KOR_NM, 
                    isMouseOver: false,
                    path: coordinate,
                    center: data.properties.center
                }
            )
        });
        setAreas(area)
    },[])

    const onCenterMove = (name: string,center: number[], mouseEvent: any) => {
        setMap({
            ...map,
            cityName: name,
            center: {
                lat: center[0],
                lng: center[1]
            },
            level: map.level !== 12 ? map.level : 12
        })
        map.cityName === name &&
        setMap({
            ...map,
            center: {
                lat: center[0],
                lng: center[1]
            },
            level: map.cityName !== name ? map.level : map.level-1
        })
        console.log({lat: mouseEvent.latLng?.getLat(), lng: mouseEvent.latLng?.getLng(), name: name})
        setMousePosition({lat: mouseEvent.latLng?.getLat(), lng: mouseEvent.latLng?.getLng(), name: name })
    }

    return (
        <>
            {areas.map((data, index) => (
                <Polygon
                    onClick={(_data, mouseEvent) => onCenterMove(data.circuitName,data.center, mouseEvent) }
                    key={`area-${data.circuitName}`}
                    path={data.path}
                    fillColor={data.circuitName === '광주광역시' ? "rgba( 255, 255, 255, 0 )" : "#fff"}
                    zIndex={data.circuitName === '광주광역시' ? 2 : 1}
                    strokeWeight={2}
                    strokeColor={"#004c80"}
                    strokeOpacity={0.8}
                    fillOpacity={0.7}
                />
            ))}
            {
                mousePosition.name !== '' && map.level >= 10 && (
                    <InfoWindow value={value}/>
                )
            }
        </>
    );
}
export default CityPolygon;
