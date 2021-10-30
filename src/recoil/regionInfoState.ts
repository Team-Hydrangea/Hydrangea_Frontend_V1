import axios from 'axios'
import { atom,selector } from 'recoil'

export const regionInfoState = selector({
    key: 'regionInfoState',
    get: async ({get}) => {
        try {
            const response = await axios.get('http://3.36.6.62:8080/region/info');
            console.log(response.data, 'asd')
            const data = response.data
            return data;
        } catch (err) {
        throw Error("잘못된 깃허브 정보입니다!");
        }
    }
})