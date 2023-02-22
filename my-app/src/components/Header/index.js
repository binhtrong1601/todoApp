import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        <Link to="/">All</Link>
      </div>
      <div className={styles.item}>
        <Link to="/active">Active</Link>
      </div>
      <div className={styles.item}>
        <Link to="/completed">Completed</Link>
      </div>
    </div>
  );
};

export default Header;
