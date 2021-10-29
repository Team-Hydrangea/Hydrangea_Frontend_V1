import React, { useEffect, useState } from 'react';
import { data as cityPolygon } from '../../../Data/CityData'
import { Polygon } from 'react-kakao-maps-sdk';
import { mapsState } from '../../../recoil/mapsState';
import { useSetRecoilState,useRecoilState } from 'recoil'

interface ICityData {
    circuitName: string,
    isMouseOver: boolean,
    center: number[],
    path: {
        lat: number;
        lng: number;
    }[]
}

const CityPolygon = () => {
    const [ areas, setAreas ] = useState<ICityData[]>([])
    const [map, setMap] = useRecoilState(mapsState)

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

    console.log(areas)
    const onCenterMove = (name: string,center: number[]) => {
        setMap({
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
    }
    console.log(map)

    return (
        <>
            {areas.map((data, index) => (
                <Polygon
                    onClick={() => onCenterMove(data.circuitName,data.center)}
                    key={`area-${data.circuitName}`}
                    path={data.path}
                    fillColor={data.circuitName === '광주광역시' ? "rgba( 255, 255, 255, 0 )" : "#fff"}
                    zIndex={data.circuitName === '광주광역시' ? 2 : 1}
                    strokeWeight={2}
                    strokeColor={"#004c80"}
                    strokeOpacity={0.8}
                    fillOpacity={0.7}
                    // onMouseover={() =>
                    //     setAreas((prev) => [
                    //       ...prev.filter((_, i) => i !== index),
                    //       {
                    //         ...prev[index],
                    //         isMouseOver: true,
                    //       },
                    //     ])
                    //   }
                    // onMouseout={() =>
                    //     setAreas((prev) => [
                    //         ...prev.filter((_, i) => i !== index),
                    //         {
                    //         ...prev[index],
                    //         isMouseOver: false,
                    //         },
                    //     ])
                    // }
                />
            ))}
        </>
    );
}
export default CityPolygon;
