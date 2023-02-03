import React from 'react';
import {Link} from "react-router-dom";
import styles from  './NavBar.module.css';
import logo from './images/logo.jpg';
import SearchBar from '../SearchBar/SearchBar';



const NavBar = () => {



  return (


    <div className={styles.contenedornavbar}>



            <img className={styles.logo} src={logo} alt="" />


              <div className={styles.contenNavBar}>

                <SearchBar/>
                    <div className={styles.menuNavBar}>

                      <Link to="/home"  style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div>Home</div>
                      </Link>


                      <Link to="/create"  style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div>Create Game</div>
                        </Link>

                        <Link to="/create"  style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div>About </div>
                        </Link>   
                    </div>
                    
              </div>

                    
   
    </div>



  )
}

export default NavBar