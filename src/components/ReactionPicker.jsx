import React from 'react';
import ReactionPickerItem from './ReactionPickerItem';
import './ReactionPicker.css';

const ReactionPicker = ({ selectReactionCallback }) => {
  const items = [
    {id: 'like', label: '👍'},
    {id: 'love', label: '😍'},
    {id: 'hangry', label: '😡'},
    {id: 'cool', label: '😎'},
    {id: 'mindblowing', label: '🤯'},
    {id: 'yeah', label: '🙌'},
    {id: 'capisci', label: '🤌'},
  ];

  return (
    <div className='reaction-picker'>
      {items.map((item) => <ReactionPickerItem key={item.id} item={item} selectReactionCallback={selectReactionCallback} />)}
    </div>
  );
}

export default ReactionPicker;
