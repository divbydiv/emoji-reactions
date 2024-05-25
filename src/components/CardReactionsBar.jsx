import React from 'react';
import CardReactionsBarItem from './CardReactionsBarItem';
import './CardReactionsBar.css';

const CardReactionsBar = ({ reactions = [] }) => {
  return (
    <div className='card-reactions-bar'>
      {reactions.map((reaction) => <CardReactionsBarItem key={reaction.id} label={reaction.label} />)}
    </div>
  );
}

export default CardReactionsBar;
