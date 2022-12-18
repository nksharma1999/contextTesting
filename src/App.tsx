import React from 'react';
import { Home } from './Components/Home';
import { ContextProvider } from './Contexts/TestingContext';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Home />
      </ContextProvider>
    </div>
  );
}

export default App;
