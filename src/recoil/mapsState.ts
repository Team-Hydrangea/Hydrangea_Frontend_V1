import { atom } from "recoil";
import { IMapStateAtom,IMousePositionAtom } from "../libs/interface/mapAtom";

export const mapsState = atom<IMapStateAtom>({
    key: 'mapsState',
    default: {
        cityName: '',
        center: {
            lat: 36.35463625183496,
            lng: 127.34684965588575
        },
        level: 12,
        swLatLng: {
            lat: 0,
            lng: 0,
          },
        neLatLng: {
            lat: 0,
            lng: 0,
        },
    }
})

export const mousePositionState = atom<IMousePositionAtom>({
    key: 'mousePosition',
    default: {
        lat: 0,
        lng: 0,
        name: '',
    }
})

export const vsData = atom({
    key: 'vsdata',
    default: [],
})

export const esData = atom({
    key: 'esData',
    default: [],
})

export const rsData = atom({
    key: 'rsData',
    default: [],
})