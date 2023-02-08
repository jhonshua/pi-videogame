import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import  {getAllVideogames} from "../../redux/actions";
import img from "./26538.jpg";
import CardVideogame from "../CardVideoGame/CardVideogame";
import styles from "../Videogames/Videogames.module.css"
import Loading from "../Loading/Loading";






const Videogames = ({ currentGames }) => {


  const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);



    React.useEffect(() => {
        dispatch(getAllVideogames()).then(() => setCarga(false)); //*me traigo la action creators q me trae todos mis videojuegos de la API
      }, [dispatch]);
    

      if (carga) {
        return <Loading />;
      }
    return (
        <div className={styles.main} >
           {currentGames.length > 0 ? (
        currentGames?.map((v) => {
          return (
            <CardVideogame
              key={v.id}
              id={v.id}
              image={v.image ? v.image : img}
              name={v.name}
              genres={v.genres
                ?.map((e) => (typeof e === "object" ? e.name : e))
                .join(", ")}
              rating={v.rating}
            />
              );
            })
          ) : (
            <div>error</div>
          )}
        </div>
      );
          }

export default Videogames;
