import React from 'react'

const OptionSelect = ({ handleChange, order }) => 
  <select value={order} onChange={handleChange}>
    <option value={'default'}>Sort by...</option>
    <option value={'name-asc'}>Name (A-Z)</option>
    <option value={'name-desc'}>Name (Z-A)</option>
    <option value={'price-asc'}>Price (low to high)</option>
    <option value={'price-desc'}>Price (high to low)</option>
  </select>

export default OptionSelect