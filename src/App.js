import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
  
export default function Emoji(){
  const [chosenEmoji, setChosenEmoji] = useState(null);
  
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  
  return (
    <div>
      <h3>Emoji Picker</h3>
      {chosenEmoji ? (
        <span>Your Emoji: {chosenEmoji.emoji}</span>
      ) : (
        <span>No Emoji</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};
