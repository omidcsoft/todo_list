import http from "./http_service"
import config from "./config.json"

class AccountServices
{
    static register = (user)=>
    {
        return http.post(`/api/authtoken/login/`,JSON.stringify(user))
    }

    static login = (user)=>
    {
       console.log(user)
        return http.post(`/api/authtoken/login`,JSON.stringify(user))
    }
}

export default AccountServices;