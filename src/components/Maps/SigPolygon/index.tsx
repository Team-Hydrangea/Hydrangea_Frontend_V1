import React, { useEffect, useState } from 'react';
import { Polygon } from 'react-kakao-maps-sdk';
import { data as sigPolygon } from '../../../Data/SigData'

const SigPolygon = () => {
    const [ areas, setAreas ] = useState<any[]>([])
    
    useEffect(() => {
        let data = sigPolygon.features;
        let area: any[] = []

        data.forEach((data: any) => {
            let coordinate: { lat: any; lng: any; }[] = []
            let eachLength = data.geometry.coordinates.map((x: string | any[]) => x.length)
            let maxNum = Math.max(...eachLength);
            let where = eachLength.indexOf(maxNum);

            data.geometry.coordinates[where].forEach((info: any, index: string | number) => {
                coordinate.push({lat: info[1], lng: info[0]})
            })
            let boroughName = data.properties.SIG_KOR_NM;
            let cityName;

            if(boroughName.indexOf('시') !== -1){
                cityName = boroughName.split('시')[0] + '시'
            }
            else {
                cityName = boroughName
            }

            area.push(
                {
                    boroughName: boroughName,
                    cityName: cityName,
                    isMouseOver: false,
                    path: coordinate,
                }
            )
        });
        setAreas(area)
    },[])

    console.log(areas)

    return (
        <>
            {areas.map((data, index) => (\
                <Polygon
                    key={`area-${data.boroughName}`}
                    path={data.path}
                    fillColor={data.isMouseover ? "#09f" : "#fff"}
                    strokeWeight={2}
                    strokeColor={"#004c80"}
                    strokeOpacity={0.8}
                    fillOpacity={0.7}
                />
            ))}
        </>
    );
}

export default SigPolygon;