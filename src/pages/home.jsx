import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component
{
    render()
    {
        return(
            <div>
                 <div className="d-flex justify-content-center container">
                <div className="col-md-12">
                    
                        <div className='text-center' >
                        <h1  class="ml15">
                            <span class="word">Hoş</span>
                            <span class="word">Geldiniz</span>
                        </h1>
                        </div>
                       
                        
                    
                    <div style={{ marginTop: '10%' }}>
                        <Link to="/login" className='btn btn-primary btn-block  ' >Giriş</Link>
                        <Link to="/register" className='btn btn-success  mt-4 btn-block ' >Kayıt ol</Link>
                    </div>
                </div>
                
            </div>
            </div>
        )  
    }
}

export default Home