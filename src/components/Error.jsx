import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
    <div style={{textAlign: 'center' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , gap: '20px', marginTop: '50px'}}>
        <img src="https://static.vecteezy.com/system/resources/previews/005/883/254/non_2x/page-not-found-404-error-concept-illustration-free-vector.jpg" alt="Error 404" style={{height:350}} />
        <h1>404 - Página no encontrada</h1>
        <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
    </div>  
  )
}

export default Error 