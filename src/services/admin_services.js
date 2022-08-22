
import http from "./http_service"

class AdminServices
{
    static getAllToDoList = ()=>
    {
        return http.get(`/todos`)
    }
    static updateIsCompleted = (todo_id)=>
    {
       
        return http.patch(`/todos/${todo_id}/`, {
            "is_completed":1
            })
    }
    
}

export default AdminServices