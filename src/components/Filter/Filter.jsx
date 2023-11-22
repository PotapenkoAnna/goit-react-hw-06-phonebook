import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name</label>
      <input
        className={css.filterName}
        type="text"
        onInput={event => dispatch(setFilter(event.target.value.toLowerCase()))} 
      />
    </div> 
  );
} 