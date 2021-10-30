import React, { useEffect, useState } from 'react';
import { mapsState, rsData, psData, fsData } from '../../../recoil/mapsState';
import { useRecoilState } from 'recoil';
import mapApi from '../../../libs/api/mapApi';
import PlaceMarker from './PlaceMarker';
import RestaurantMarker from './RestaurantMarker';
import FestivalMarker from './FestivalMarker';



const Marker = () => {
    const [map, setMap] = useRecoilState(mapsState);
    const [PsData, setPsData] = useRecoilState<any>(psData)
    const [RsData, setRsData] = useRecoilState<any>(rsData);
    const [FsData, setFsData] = useRecoilState<any>(fsData);

    useEffect(() => {
        mapApi.postPlaceSpot(map.neLatLng.lat, map.neLatLng.lng, map.swLatLng.lat, map.swLatLng.lng)
        .then((res) => {
            setPsData(res.data)
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

        mapApi.postFestivalSpot(map.neLatLng.lat, map.neLatLng.lng, map.swLatLng.lat, map.swLatLng.lng)
        .then((res) => {
            setFsData(res.data)
            console.log(res.data)
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
                PsData !== [] ? 
                <PlaceMarker/>
                : null
            }
            {
                RsData !== [] ? 
                <RestaurantMarker/>
                : null
            }
            {
                FsData !== [] ? 
                <FestivalMarker/>
                : null
            }
        </>
    );
}

export default Marker;