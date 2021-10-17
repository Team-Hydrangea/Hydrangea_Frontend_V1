import React, { useEffect, useState } from 'react';
import { data as cityPolygon } from '../../../Data/CityData'
import { Polygon } from 'react-kakao-maps-sdk';

interface ICityData {
    circuitName: string,
    isMouseOver: boolean,
    path: {
        lat: any;
        lng: any;
    }[]
}

const CityPolygon = () => {
    const [ areas, setAreas ] = useState<ICityData[]>([])
    
    useEffect(() => {
        let data = cityPolygon.features;
        let area: any[] = []

        data.forEach((data: any) => {
            let coordinate: { lat: any; lng: any; }[] = []
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
                    path: coordinate
                }
            )
            // setAreas([...areas, {
            //     name: data.properties.CTP_KOR_NM, 
            //     isMouseover: false,
            //     path: coordinate,
            // }])
        });
        setAreas(area)
    },[])
    const gwangju = areas.filter((i) => i.circuitName === '광주광역시')[0];

    return (
        <>
            {areas.map((data, index) => (
                <Polygon
                    key={`area-${data.circuitName}`}
                    path={data.circuitName === '전라남도' ? [data.path, gwangju.path] : data.path}
                    fillColor={data.isMouseOver ? "#09f" : "#fff"}
                    strokeWeight={2}
                    strokeColor={"#004c80"}
                    strokeOpacity={0.8}
                    fillOpacity={0.7}
                    onMouseover={() =>
                        setAreas((prev) => [
                          ...prev.filter((_, i) => i !== index),
                          {
                            ...prev[index],
                            isMouseOver: true,
                          },
                        ])
                      }
                    onMouseout={() =>
                        setAreas((prev) => [
                            ...prev.filter((_, i) => i !== index),
                            {
                            ...prev[index],
                            isMouseOver: false,
                            },
                        ])
                    }
                />
            ))}
        </>
    );
}

export default CityPolygon;