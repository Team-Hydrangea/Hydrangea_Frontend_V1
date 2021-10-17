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
            let cityNo = data.properties.SIG_CD.substr(0,2);
            let cityName
            switch(cityNo){
                case '11': cityName='서울특별시'; break;
                case '26': cityName='부산광역시'; break;
                case '27': cityName='대구광역시'; break;
                case '28': cityName='인천광역시'; break;
                case '29': cityName='광주광역시'; break;
                case '30': cityName='대전광역시'; break;
                case '31': cityName='울산광역시'; break;
                case '36': cityName='세종특별자치시'; break;
                case '41': cityName='경기도'; break;
                case '42': cityName='강원도'; break;
                case '43': cityName='충청북도'; break;
                case '44': cityName='충청남도'; break;
                case '45': cityName='전라북도'; break;
                case '46': cityName='전라남도'; break;
                case '47': cityName='경상북도'; break;
                case '48': cityName='경상남도'; break;
                case '50': cityName='제주특별자치시'; break;
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
            {areas.map((data, index) => (
                data.cityName === '경기도' &&
                <Polygon
                    key={`area-${data.boroughName}-${index}`}
                    path={data.path}
                    fillColor={data.isMouseOver ? "#09f" : "#fff"}
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

export default SigPolygon;