import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Landing.module.css";

  
const LandingPage = () => {


  return (
    <div className={styles.main}>

    

  <div className={styles.content}>

   
  <Link to="/home">
  <button className={styles.button}>Go Home</button>
  </Link>


  </div>



</div>
  )
}

export default LandingPage
