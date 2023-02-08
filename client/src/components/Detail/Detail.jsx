import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getVideogame } from "../../redux/actions/index";
import img from "./Detail.jpg";
import s from "./Detail.module.css";
import Loading from "../Loading/Loading";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../Foot/Footer'

function Detail() {
  const [carga, setCarga] = useState(true);
  const { id } = useParams(); //*rutas dinamicas, Podemos acceder a cualquier parámetro de ruta de una ruta declarada con su componente asociado usando el hook useParams.
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getVideogame(id)).then(() => setCarga(false));
  }, [dispatch, id]);

  const details = useSelector((state) => state.videogame);
  //console.log(details)

  if (carga) {
    return <Loading />;
  }

  var regex = /(<([^>]+)>)/gi;

  return (
    <div className={s.containerdetail}>
      <NavBar2/>
    <div className={s.wrapper}>
      <div className={s.main_card}>
        <div className={s.card_left}>
          <div className={s.card_details}>
            <h1 className={s.nombre}>{details.name}</h1>
            <div className={s.card_cat}>
              <p className={s.rating}>⭐ {details.rating}</p>
              <p className={s.genres}>
                {details.genres?.map((g) => (g.name ? g.name : g)).join("| ")}
              </p>
              <p className={s.fecha}> {details.released}</p>
            </div>
            <div className={s.description}>
              {details.description?.replace(regex, "").replace("&#39", "")}
            </div>
            <div className={s.plataformas}>
              🎮: {details.platforms?.join(", ")}
            </div>
          </div>
        </div>
        <div className={s.card_right}>
          <img
            src={details.image ? details.image : img}
            alt={`${details.name}'s`}
            width="300px"
            height="150px"
          />
        </div>
      </div>
      <div>
        <NavLink to={"/home"} className={s.btn}>
          <span>↵ Back Home</span>
        </NavLink>
      </div>
    </div>
        <Footer/>
    </div>


  );
}

export default Detail;

