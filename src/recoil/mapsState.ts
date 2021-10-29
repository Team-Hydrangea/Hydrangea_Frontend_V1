import { atom } from "recoil";

export const mapsState = atom({
    key: 'mapsState',
    default: {
        cityName: '',
        center: {
            lat: 36.35463625183496,
            lng: 127.34684965588575
        },
        level: 12
    }
})