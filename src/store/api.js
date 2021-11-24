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



const api = {

    getListGeoZone: async (list)=>instance.get(`/fieldTree?_ds=1637742626414&loadDate=2021-11-24T08:15:26.732Z`).then(data=>data.data),

}
export default api;

