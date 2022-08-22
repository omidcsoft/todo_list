
import http from "./http_service"


class UserServices
{
    static getAllToDoList = (token)=>
    {
        return http.get(`/todos/?token=${token}`)
    }
    static updateIsCompleted = (todo_id)=>
    {
       
        return http.patch(`/todos/${todo_id}/`, {
            "is_completed":1
            })
    }
}

export default UserServices