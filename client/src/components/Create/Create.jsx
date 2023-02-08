import React from 'react';
import styles from './Create.module.css';
import Footer from '../Foot/Footer';
import NavBar2 from '../NavBar2/NavBar2';
import image from "../Create/background.jpg"

const Create = () => {
  return (
    <div className={styles.contenerceater}>
      <NavBar2/>
    
     <img className= {styles.image}  src={image} alt="no found" />

      <Footer/>
    </div>
  )
}

export default Create
