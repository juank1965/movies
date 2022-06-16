import React from "react";
import style from "./Empty.module.css";

export default function Empty() {
  return (
    <div className={style.empty}>
      <h1>Your query returns no results</h1>
    </div>
  );
}
