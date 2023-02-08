import React from "react";
import styles from "../CardVideoGame/CardVideogame.module.css";
import { NavLink } from "react-router-dom";

class CardVideogame extends React.Component {
    
  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.image} width="400px" height="250px" alt="" />
        <div className={styles.card__content}>
          <h3 className={styles.nombre}>{this.props.name}</h3>
          <p className={styles.genres}>{this.props.genres}</p>
          <p className={styles.rating}>⭐{this.props.rating}</p>


          <NavLink to={`/detail/${this.props.id}`} className={styles.navLink}>
            <span className={styles.leer_mas}>Leer más</span>
          </NavLink>
        
        </div>
      </div>
    );
  }
}

export default CardVideogame;