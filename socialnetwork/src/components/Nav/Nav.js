import React from 'react';
import {NavLink} from "react-router-dom";

/* css */

import classes from '../css/Nav.module.css';

/* css */

function Nav() {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
          </li>

          <li>
            <NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
          </li>

          <li>
            <a href="">Новости</a>
          </li>

          <li>
            <a href="">Музыка</a>
          </li>

          <li>
            <a href="">Настройки</a>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;