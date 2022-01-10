import React from 'react'

const ListaTareas = ({tareas, editar, eliminarTarea}) => {
    return (
        <div>
            <ul className="list-group">
                {
                    tareas.map((item) => {
                        return (
                            <li className='list-group-item background-color-primary border-secondary' key={item.id}>
                                <span className='lead color-secondary'>{item.nombreTarea}</span>
                                    <button
                                        className="btn background-third text-light btn-sm float-end mx-2"
                                        onClick={() => eliminarTarea(item.id)}>
                                        Eliminar
                                    </button>
                                    <button
                                        className="btn background-color-secondary text-light btn-sm float-end"
                                        onClick={() => editar(item)}>
                                        Editar
                                    </button>
                            </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}

export default ListaTareas
