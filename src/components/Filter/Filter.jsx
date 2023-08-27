import React from 'react';
import { useDispatch } from 'react-redux';
import { filtered } from 'redux/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch()

  const changeFilter = e => {
  dispatch(filtered(e.currentTarget.value.toLowerCase().trim()))
  }
  
  return (
    <label>
    Find contacts by name
    <input type="text" onChange={changeFilter} />
  </label>
  )
}


export { Filter };
