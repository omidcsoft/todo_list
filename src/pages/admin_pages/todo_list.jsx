import React, { Component } from 'react'
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import AdminServices from '../../services/admin_services';



class AdminTodoList extends Component
{
    constructor()
    {
        super()
        this.cookies = new Cookies();
        if(!this.cookies.get('token'))
        {
            window.location.replace("http://localhost:3000/login");
        }
    }
    state = {data:[]}
    render()
    {
        return(
            <div className='container' >
                <div className='row' ></div>
                <h1 style={{color:'brown'}} >Admin Page</h1>
                <ToastContainer/>
              <div className="card">
                <div className="card-body">
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{width:'200px'}} scope="col">Başlık</th>
                            <th style={{width:'400px'}}    scope="col">Açıklama</th>
                            <th scope="col">Başlangıç ​</th>
                            <th scope="col">Bitiş</th>
                            <th scope="col">Durum</th>
                            <th scope="col">İşlem</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item)=>{
                            return (
                                <tr key={item.id}>
                                <th>{item.title}</th>
                                <td style={{maxWidth:'560px'}}  >{item.descriptions}</td>
                                <td style={{fontSize:'14px'}} >{item.start_date}</td>
                                <td style={{fontSize:'14px'}} >{item.finished_date}</td>
                                {item.is_completed&&<td><i className="fa fa-check text-success ml-3" aria-hidden="true"></i></td>}
                                {!item.is_completed&& <td><i className="fa fa-times text-danger ml-3" aria-hidden="true"></i></td>}
                                {item.is_completed&&<td><p className='text-success ' >Tamamlandi</p></td>}
                                {!item.is_completed&&<td><button onClick={()=>this.UpdateTodo(item.id)} className='btn btn-danger btn-sm text-white' >Tamamla</button></td>}
                                
                            </tr>
                            )
                        })}
                       
                        
                    </tbody>
                </table>
                </div>
              </div>
            </div>
        )
    }

    UpdateTodo = async(todo_id)=>
    {
       try {



        const response = await AdminServices.updateIsCompleted(todo_id)
        const data= response.data
        console.log(data)
        const todo_list = this.state.data
        const index = todo_list.findIndex((item)=>{
            return item.id === todo_id
        })
        console.log(index,"fdfjdkf;dl")
        todo_list[index].is_completed = true
        this.setState({data:todo_list})
        toast.success("Updated",{position:'top-right', autoClose:true, closeButton:true})
       } 
       catch (error) {
        toast.error(error.message,{position:'top-right', autoClose:true, closeButton:true})
       }
    }
    async componentDidMount()
    {
        try {
            const cookies = new Cookies();
            const token = cookies.get("token")
        const response = await  AdminServices.getAllToDoList()
        const data = response.data
        console.log(data)
        this.setState({data:data})
        } 
        catch (error) {
            toast.error(error.message,{position:'top-right', autoClose:true, closeButton:true})
        }
    }
}

export default AdminTodoList