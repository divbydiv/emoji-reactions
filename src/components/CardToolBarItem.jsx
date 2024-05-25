import React from 'react';
import './CardToolBarItem.css';

const CardToolBarItem = ({ label, onClickCallback }) => {
  return (
    <button onClick={onClickCallback} className='card-tool-bar-item '>{label}</button>
  );
}

export default CardToolBarItem;
