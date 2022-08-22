import React, { Component } from 'react'


class NotFound extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                    <div  className="card">
                        <div className="card-body">
                            <h1 style={{fontSize:'19vw',fontFamily:'monospace',color:'brown'}} className='text-center' >404</h1>
                            <p className='text-center'>İstediğiniz Sayfa Bulunamadı</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound