import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
        

        {filtro ? (
          <>
          <h2>{gastosFiltrados.length ? 'Gastos (Desliza hacia la derecha para editar o a la izquierda para eliminar)': 'No hay gastos en esta categoria'}</h2>
          {gastosFiltrados.map( gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
          </>
          ) : (
            <>
            <h2>{gastos.length ? 'Gastos (Desliza hacia la derecha para editar o a la izquierda para eliminar)': 'No hay gastos aún'}</h2>
            {gastos.map(gasto =>(
              <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
          ))}
          </>
          )
        }
    </div>
  )
}

export default ListadoGastos