import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import {Link} from 'react-router-dom'
import AccountServices from "../../services/account_services"
import Cookies from 'universal-cookie';
import {toast,ToastContainer} from "react-toastify"

class Login extends Component {
    constructor()
    {
        super()
        this.cookies = new Cookies();
        if(this.cookies.get('token'))
        {
            window.location.replace("http://localhost:3000/user/todo-list");
        }
      
        this.validator = new SimpleReactValidator({
            messages:{
                required:'Bu Alan Zorunlu',
                email:'Gecersiz E-posta',
                min:'En Az 4 Harf olmali'
            },
            element:message=><div style={{fontSize:'14px'}} className='text-danger' >{message}</div>
        });

    }
    state = {username:"",  password:"", token:""}
    render() {
      
       
        return (
         
         <div style={{position:'relative',left:'22%'}} className='container' >
            <ToastContainer/>
            <div className="row">
                <div className="col-md-6 ">
                   <div style={{height:'360px'}} className="card">
                    <div className="card-body">
                        <div className='d-flex'>
                        <h1 className='text-primary'>Giriş Sayfası</h1>
                        <Link to="/register">Kayıt Ol</Link>
                        </div>
                    <form onSubmit={this.handlerLoginSubmitForm} style={{marginTop:'70px'}} className='form-group' >
                    <input onChange={e=>this.setState({username:e.target.value})} name='username' value={this.state.username} placeholder='Kullanıcı Adınızı Giriniz' type="text" className='form-control ' />
                    {this.validator.message('username', this.state.username, 'required|min:4')}


                    <input  onChange={e=>this.setState({password:e.target.value})} name='password' value={this.state.password} placeholder='Şifrenizi Girin' type="password" className='form-control mt-3' />
                        {this.validator.message('password', this.state.password, 'required|min:8')}
                        <button type='submit' className='btn btn-success btn-block mt-3' >send</button>
                    </form>
                    </div>
                   </div>
                </div>
            </div>
         </div>
           
        )
    }

    handlerLoginSubmitForm = async (event)=>
    {
       
        if(this.validator.allValid())
        {
            const username = event.target.username.value
            const password = event.target.password.value
            const user = {username,password}
            
           AccountServices.login(user)
           .then(res=>{
           
            if(res.statusText==="OK")
            {
               
                console.log(res)
                this.setState({username:username})
              
                const token = res.data.auth_token
                console.log(token)
               
                this.cookies.set('token', token, { path: '/' });
                toast.success("Giriş Yaptınız",{position:'top-right', autoClose:true, closeButton:true})
             
               

            }
           })
           .catch(er=> toast.error(er.message,{position:'top-right', autoClose:true, closeButton:true}))
           
        }
        else{
            
            this.validator.showMessages()
            this.forceUpdate()
        }
       
        event.preventDefault()
        // window.location.replace("http://localhost:3000/user/todo-list");
    }
}

export default Login