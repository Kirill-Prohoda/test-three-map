import axios from "axios";
import {token, company} from '../components/general/auth/export'

let instance = axios.create({
    // baseURL: '/field',
});

instance.interceptors.request.use(function (config) {
    config.headers.Authorization =  token() ? `Bearer ${token()}` : '';
    config.headers.companyId = company();
    return config;
});



export default {

    getListGeoZone: async (list)=>instance.get(`/`).then(data=>data.data),
    getListUnits: async ()=> instance.get(`/`).then(data=>data.data),
    sock: ()=> new WebSocket(`/`)

}



