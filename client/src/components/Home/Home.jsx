import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import styles from './Home.module.css'
import Funcionalidades from '../Funcionalidades/Funcionalidades'
import Footer from '../Foot/Footer'
import  Videogames  from "../Videogames/Videogames";






 



const Home = () => {




  const allGames = useSelector((state) => state.allVideogames);


  const [currentPage, setCurrentPage] = useState(1); //*Lo seteamos en 1 para que siempre empiece en la pagina 1.
  const gamesPerPage = 15; //* Determinamos la cantidad de cards renderizadas por pagina.
  const indexOfLastGame = currentPage * gamesPerPage; //* 1 * 15 = 15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; //* 15 - 15 = 0
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame); 




  return (

    <div className={styles.contenedorHome}>


       <NavBar/>
       <Funcionalidades/>
      
       <Videogames currentGames={currentGames}  />
       <div className={styles.foot}>
         <Footer/>
       </div>
      
       
       
 
    </div>

  )
}

export default Home
