import React, { useCallback, useState } from 'react';
import CardReactionsBar from './CardReactionsBar';
import CardToolBar from './CardToolBar';
import './Card.css';

const Card = () => {
  const [reactions, setReactions] = useState([]);

  const toggleReactionCallback = useCallback((reaction) => {
    const includesReaction = !!reactions.find((item) => item.id === reaction.id);
    let newReactions = [];

    if(includesReaction) {
      // Remove Reaction
      newReactions = reactions.filter((item) => item.id !== reaction.id);
    } else {
      // Add Reaction
      newReactions = reactions.concat(reaction);
    }
    
    setReactions(newReactions);
  }, [reactions]);

  return (
    <div className='card'>
      <div className='card-content'></div>
      { reactions.length > 0 ? <CardReactionsBar reactions={reactions} /> : null }
      <CardToolBar toggleReactionCallback={toggleReactionCallback} />
    </div>
  );
}

export default Card;