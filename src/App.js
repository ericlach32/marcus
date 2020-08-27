import React from 'react';
import './styles/App.css';

// Components
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero heading='My Heading!'/>
      </header>
    </div>
  );
}

export default App;
