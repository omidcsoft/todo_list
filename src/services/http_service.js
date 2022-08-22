import axios from 'axios'
import {toast} from "react-toastify"
import config from './config.json'
import Cookies from 'universal-cookie';

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.baseURL = config.local_adress;


const cookies = new Cookies();
const token = cookies.get("token")
if(token !=="" && token !=null&& token !==undefined)
{
    axios.interceptors.request.use(request=>{
   
        request.headers.common.Authorization = `Token ${token}`;
        return request
    }) 
}




axios.interceptors.response.use(null,err=>{
 const expected_errors = err.response && err.response.status >= 400 && err.response.status < 500

    if(!expected_errors)
    {
        toast.error("server error",{position:'top-center',autoClose:true,closeButton:true})
    }
    return Promise.reject(err)
})
export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete,
    patch:axios.patch
}