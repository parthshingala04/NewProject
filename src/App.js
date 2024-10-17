import { createContext, useState } from 'react';
import './App.css';
import Child from './Pratice/Child';

export const global = createContext();
function App() {
  const [color, setcolor] = useState('red')
  return (
    <>
    <h1>ajsduafghkakhb</h1>
      <global.Provider value={{data : color}} />
      <Child />
      <global.Provider />
    </>
  );
}

export default App;
