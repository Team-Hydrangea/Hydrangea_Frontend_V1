export interface IMapStateAtom {
    cityName: string,
    center: {
        lat: number,
        lng: number
    },
    level: number,
    swLatLng: {
        lat: number,
        lng: number
    },
    neLatLng: {
        lat: number,
        lng: number
    },
}

export interface IMousePositionAtom {
    lat: any,
    lng: any,
    name: string
}