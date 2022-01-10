import React from 'react'

const Mensaje = ({mensaje}) => {
    return (
        <div className='alert alert-danger mt-2' role="alert">
            {mensaje}
        </div>
    )
}

export default Mensaje
