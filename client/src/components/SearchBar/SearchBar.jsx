import React from 'react'
import styles from  './SearchBar.module.css'
import lupa from './images/lupa.png'





const SearchBar = () => {




  return (


    <div >
      <from>
        <div >        
          <input className={styles.SearchGame} placeholder="Search Game"/>
            <button  className={styles.buttonSearch}>
                <img className={styles.lupa}  src={lupa} alt="lupa" />
            </button>
        </div>
      </from>
    </div>

    
  )
}

export default SearchBar
