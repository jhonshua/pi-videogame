import React from "react";
import loading from "./loading.gif";
import styles from "./Loading.module.css";

export default function PaginaDeCarga() {
  return (
    <div className={styles.box_loading}>
      <img src={loading} alt="" />
    </div>
  );
}
