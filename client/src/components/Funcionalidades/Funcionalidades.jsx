import React from 'react';
import styles from './Funcionalidades.module.css'





const Funcionalidades = () => {
  return (


    <div className={styles.filtros}>
      
      
      <select >
        <option > Ordenar por...</option>
        <option >A-Z</option>
        <option >Z-A</option>
        <option >Rating Asc</option>
        <option >Rating Desc</option>
      </select>


      <select >
        <option >Generos</option> 
      </select>

      <select >
        <option >Filtrar por Origen</option>
        <option >API</option>
        <option >Created</option>
      </select>



    </div>
  )
}

export default Funcionalidades
