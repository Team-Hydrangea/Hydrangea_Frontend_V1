import React, { useEffect, useState } from 'react';
import { mapsState, rsData, vsData } from '../../../recoil/mapsState';
import { useRecoilState } from 'recoil';
import mapApi from '../../../libs/api/mapApi';
import PlaceMarker from './PlaceMarker';
import RestaurantMarker from './RestaurantMarker';



const Marker = () => {
    const [map, setMap] = useRecoilState(mapsState);
    const [VsData, setVsData] = useRecoilState<any>(vsData)
    const [RsData, setRsData] = useRecoilState<any>(rsData);

    useEffect(() => {
        mapApi.postVacationSpot(map.neLatLng.lat, map.neLatLng.lng, map.swLatLng.lat, map.swLatLng.lng)
        .then((res) => {
            setVsData(res.data)
        })   
        .catch((err) => {
            console.log(err)
        })

        mapApi.postRestaurantSpot(map.neLatLng.lat, map.neLatLng.lng, map.swLatLng.lat, map.swLatLng.lng)
        .then((res) => {
            setRsData(res.data)
        })   
        .catch((err) => {
            console.log(err)
        })
    }, [map])

    const onCenterMove = (lat: number, lng: number) => {
        setMap({...map, center: {lat: lat, lng: lng}, level: 5, cityName: 'marker'})
    }

    console.log(RsData)

    return (
        <>
            {
                VsData !== [] ? 
                <PlaceMarker/>
                : null
            }
            {
                RsData !== [] ? 
                <RestaurantMarker/>
                : null
            }
        </>
    );
}

export default Marker;