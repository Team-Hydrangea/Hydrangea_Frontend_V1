import request from '../../axios'

export default{
    postPlaceSpot(neLat: number, neLng: number, swLat: number, swLng: number){
        return request({
            url : `/place/all`,
            method : 'post',
            data:{
                latitude1: swLat,
                latitude2: neLat,
                longitude1: swLng,
                longitude2: neLng
            }
        })
    },
    postFestivalSpot(neLat: number, neLng: number, swLat: number, swLng: number){
        return request({
            url: `/event/all`,
            method : 'post',
            data:{
                latitude1: swLat,
                latitude2: neLat,
                longitude1: swLng,
                longitude2: neLng
            }
        })
    },
    postRestaurantSpot(neLat: number, neLng: number, swLat: number, swLng: number){
        return request({
            url: `/restaurant/all`,
            method : 'post',
            data:{
                latitude1: swLat,
                latitude2: neLat,
                longitude1: swLng,
                longitude2: neLng
            }
        })
    }
}