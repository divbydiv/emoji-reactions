import React, { useState } from 'react';
import CardToolBarItem from './CardToolBarItem';
import ReactionPicker from './ReactionPicker';
import './CardToolBar.css';

const CardToolBar = ({ toggleReactionCallback }) => {
  const [reactionPickerisVisible, setReactionPickerisVisible] = useState(false);
  
  const toggleReactionPicker = () => {
    setReactionPickerisVisible(!reactionPickerisVisible);
  }

  const selectReactionCallback = (reaction) => {
    toggleReactionCallback(reaction);
    toggleReactionPicker();
  }

  const actions = [
    {id: 'like', label: 'Like', callback: toggleReactionPicker},
    {id: 'comment', label: 'Comment'},
    {id: 'share', label: 'Share'}
  ]

  return (
    <div className='card-tool-bar'>
      {reactionPickerisVisible ? <ReactionPicker selectReactionCallback={selectReactionCallback}/> : null }
      {actions.map((action) => <CardToolBarItem key={action.id} label={action.label} onClickCallback={action.callback} />)}
    </div>
  );
}

export default CardToolBar;
