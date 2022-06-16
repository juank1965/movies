import React from "react";
import { FaSpinner } from "react-icons/fa";
import style from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={style.spinner}>
      <FaSpinner className={style.spinning} size={60} />
    </div>
  );
}

export default Spinner;
