import React from 'react';
import styles from './Funcionalidades.module.css'





const Funcionalidades = () => {
  return (


    <div className={styles.filtros}>
      
      <div className={styles.div1}>
        <select className={styles.div2} >

          <option > Ordenar por...</option>
          <option >A-Z</option>
          <option >Z-A</option>
          <option >Rating Asc</option>
          <option >Rating Desc</option>

        </select>

      </div>
      

      <div className={styles.div3}>
            <select className={styles.div4} >
              <option >Generos</option> 
            </select>
      </div>
      


     <div className={styles.div5}>
          <select className={styles.div6} >
            <option >Filtrar por Origen</option>
            <option >API</option>
            <option >Created</option>
          </select>
     </div>
      



    </div>
  )
}

export default Funcionalidades
