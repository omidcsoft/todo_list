import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Cookies from 'universal-cookie';

class Register extends Component
{
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
    state = {username:"", email:"", password:""}
    render()
    {
        return(
            <div style={{position:'relative',left:'22%'}} className='container' >
            <div className="row">
                <div className="col-md-6 ">
                   <div style={{minHeight:'450px'}} className="card">
                    <div className="card-body">
                      <div className='d-flex'>
                      <h1>Kayıt Sayfası</h1>
                      <a href="">Giriş Yap</a>
                      </div>
                    <form onSubmit={this.handlerSubmitRegisterForm} style={{marginTop:'70px'}} className='form-group ' >
                        <input onChange={e=>this.setState({username:e.target.value})} name='username' value={this.state.username} placeholder='Kullanıcı Adınızı Giriniz' type="text" className='form-control ' />
                        {this.validator.message('username', this.state.username, 'required|min:4')}

                        <input  onChange={e=>this.setState({email:e.target.value})} name='email' value={this.state.email} placeholder='E-Postanizi Girin' type="email" className='form-control mt-3' />
                        {this.validator.message('email', this.state.email, 'required|email')}

                        <input  onChange={e=>this.setState({password:e.target.value})} name='password' value={this.state.password} placeholder='Şifrenizi Girin' type="password" className='form-control mt-3' />
                        {this.validator.message('password', this.state.password, 'required|min:8')}
                     
                        <button className='btn btn-success btn-block mt-3' >send</button>
                    </form>
                    </div>
                   </div>
                </div>
            </div>
         </div>
        )
    }

    handlerSubmitRegisterForm = (event)=>
    {
        
        if(this.validator.allValid())
        {

        }
        else{
            
            this.validator.showMessages()
            this.forceUpdate()
        }
        event.preventDefault()
    }
}

export default Register