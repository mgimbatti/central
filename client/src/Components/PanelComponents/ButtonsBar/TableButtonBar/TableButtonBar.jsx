import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faSlidersH, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import style from '../ButtonsBar.module.css';
import '../../globalFilters.css';

function openFilters() {
  document.getElementById('filters').className = 'openFilter';
}

function TableButtonBar({ rol, path }) {
  return (
    <div className={style.ctn}>
      <div className={style.elementsCtn}>
        <NavLink to={`/panel/${rol}`}>
          <label>
            <FontAwesomeIcon icon={faArrowLeft} />
            {' Dashboard'}
          </label>
        </NavLink>
        <div className={style.btnCtn}>
          <NavLink to={`/panel/${path}/create`} className={style.btnBar}>
            <FontAwesomeIcon icon={faPlus} />
            {' Create'}
          </NavLink>
          <button type="button" className={style.btnBar} onClick={openFilters}>
            <FontAwesomeIcon icon={faSlidersH} />
            {' Filter'}
          </button>
        </div>
      </div>
      <Filter />
    </div>
  );
}

export default TableButtonBar;
