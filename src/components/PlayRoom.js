import React from 'react';
import DrawContainer from './DrawContainer';

function PlayRoom() {
  return (
    <div>
      <h2>Welcome to the Play Room!</h2>
      <DrawContainer w={500} h={500} maxWidth={600}/>
    </div>
  );
}

export default PlayRoom;
