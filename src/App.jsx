import { useState } from 'react'
import { nanoid } from 'nanoid';
import Mensaje from './components/Mensaje';
import ListaTareas from './components/ListaTareas';

function App() {
    //Hooks state
    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])
    const [error, setError] = useState(false)
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');

    const agregarTarea = (e) => {
        e.preventDefault();

        //Validar si el formulario esta vacio 
        if ([tarea].includes('')) {
            setError(true)
            return
        }

        //Agregar tarea a array de tareas, se crea ID con libreria nanoid
        setTareas([...tareas, {id: nanoid(), nombreTarea: tarea}])

        setTarea('');
        setError(false);
    }

    //Eliminar tareas
    const eliminarTarea = (id) =>{
        const arrayFiltrado = tareas.filter(item => item.id !== id )
        setTareas(arrayFiltrado);
    }

    //Editar tareas
    const editar = (item) => {
        setModoEdicion(true)
        setTarea(item.nombreTarea)
        setId(item.id)
    }

    const editarTareas = (e) => {
        e.preventDefault();

        if ([tarea].includes('')) {
            setError(true)
            return
        }

        const arrayEditado = tareas.map((item) => (
            item.id === id ? {id, nombreTarea: tarea} : item
        ))

        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        setId('')    
        
    }

  return (
    <div className="container mt-5">
        <h1 className='text-center font-roboto color-secondary fw-bold'>Tareas</h1>
        <hr />
          <div className="row d-flex flex-md-row">
                <div className="col-md-4 col-sm-12">
                  <h2 className='text-center font-roboto color-secondary'>
                      {
                          modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
                      }
                  </h2>
                  <form onSubmit={ modoEdicion ?  editarTareas : agregarTarea} className='mb-5 mx-2'>
                      <input type="text"
                          className='form-control mb-2 font-roboto'
                          placeholder='Ingrese Tarea'
                          onChange={e => setTarea(e.target.value)}
                          value={tarea} />
                      {
                          modoEdicion ?
                              (<div className="d-grid gap-2">
                                  <button className='btn font-roboto background-color-secondary text-light' type='submit'>Editar</button>
                               </div>)
                              :
                              (<div className="d-grid gap-2">
                                  <button className='btn background-color-secondary text-light font-roboto' type='submit'>Agregar</button>
                                </div>)
                      }

                  </form>
                  {error && <Mensaje mensaje='Debes ingresar una tarea' />}
              </div>
              <div className="col-md-8 col-sm-12">
                  <h2 className='text-center font-roboto color-secondary'>Lista de tareas</h2>
                  {
                    <ListaTareas
                    tareas={tareas}
                    editar={editar}
                    eliminarTarea={eliminarTarea} />
                        
                  }
              </div>

        </div>  
    </div>
  )
}

export default App
