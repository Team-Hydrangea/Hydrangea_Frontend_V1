import React, { useState } from 'react';
import { Map, Polygon, CustomOverlayMap, MapInfoWindow } from 'react-kakao-maps-sdk'
import { data as polygon } from '../../Data/CityData'

const Maps = () => {
  let data = polygon.features;
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
                name: data.properties.CTP_KOR_NM, 
                isMouseover: false,
                path: coordinate
            }
        )
    });

    console.log(area)

    return (
        <>
            <Map // 지도를 표시할 Container
            id={`map`}
            center={{
            // 지도의 중심좌표
            lat: 37.566826,
            lng: 126.9786567,
            }}
            style={{
            // 지도의 크기
            width: "100%",
            height: "100vh",
            }}
            level={12}
        >
            {area.map((data, index) => (
          <Polygon
            key={`area-${data.name}`}
            path={data.path}
            fillColor={data.isMouseover ? "#09f" : "#fff"}
            strokeWeight={2}
            strokeColor={"#004c80"}
            strokeOpacity={0.8}
            fillOpacity={0.7}
          />
        ))}
        </Map>
        </>
    );
}

export default Maps;