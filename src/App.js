import React from 'react';
import { InspirationalImage } from './features/inspirationalImage/InspirationalImage.js';
import { InspirationalImageLeftArrow } from './features/inspirationalImage/InspirationalImageLeftArrow.js';
import { InspirationalImageRightArrow } from './features/inspirationalImage/InspirationalImageRightArrow.js';
import { Weather } from './features/weather/Weather.js';
import { GoalsForm } from './components/goalsForm/GoalsForm.js';
import { Goals } from './features/goals/Goals.js';
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
        <div className="goals-container">
          <GoalsForm />
          <Goals />
        </div>
        <InspirationalImageRightArrow />
      </main>
      <footer>
        <InspirationalQuote />
      </footer>
    </div>
  );
}

export default App;
