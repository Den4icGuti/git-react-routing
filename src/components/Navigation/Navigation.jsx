import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import styles from '../Navigation/Navigation.module.css';
const Navigation = () => {
return <nav>
  <NavLink to="/Home"
    className={styles.link}
    activeclassname={styles.activeLink}
  >
    Главная
  </NavLink>
  <NavLink to="/authors"
    className={styles.link}
    activeclassname={styles.activeLink}
  >
    Авторы</NavLink>
  
  <NavLink to="/books"
    className={styles.link}
    activeclassname={styles.activeLink}
  >Книги</NavLink>
  <hr />
</nav>
}

export default Navigation;