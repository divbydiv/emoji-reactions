import React from 'react';
import './ReactionPickerItem.css';

const ReactionPickerItem = ({ item, selectReactionCallback }) => {
  const onClick = () => {
    selectReactionCallback(item);
  }
  
  return (
    <button onClick={onClick} className='reaction-picker-item'>{item.label}</button>  
  );
}

export default ReactionPickerItem;
