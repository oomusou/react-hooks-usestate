import React from 'react';
import { useCount } from './counter';

const App = () => {
  const [count, addCount] = useCount();
  
  return (
    <div>
      <button onClick={ addCount }>+</button>
      <div>{ count }</div>
    </div>
  );
};

export default App;