import React from 'react';
import { Weather } from './features/weather/Weather.js';
import { GoalsContainer } from './components/goalsContainer/GoalsContainer.js';
import { InspirationalImage } from './features/inspirationalImage/InspirationalImage.js';
import { InspirationalImageLeftArrow } from './features/inspirationalImage/InspirationalImageLeftArrow.js';
import { InspirationalImageRightArrow } from './features/inspirationalImage/InspirationalImageRightArrow.js';
import { InspirationalQuote } from './features/inspirationalQuote/InspirationalQuote.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <InspirationalImage />
      <main className="App-main">
        <InspirationalImageLeftArrow />
        <GoalsContainer />
        <InspirationalImageRightArrow />
      </main>
      <footer>
        <InspirationalQuote />
      </footer>
    </div>
  );
}

export default App;
