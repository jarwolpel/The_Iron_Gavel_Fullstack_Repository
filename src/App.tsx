import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/common/nav/Nav'
import EventsLog, { appendEventToLog } from './components/common/BattleScreenEventsLog/EventsLog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <EventsLog />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// Test example of appending to event log
// Can add a bulk import function later if needed but for now this
// should be good.
appendEventToLog("Player 1 Swings his Sword!");
appendEventToLog("Player 2 Dodges!");
appendEventToLog("Player 2 Shoots an arrow");
appendEventToLog("Player 1 is hit for 4 damage!");
appendEventToLog("Player 1 charges at Player 2");
appendEventToLog("Player 2 is knocked to the ground!");
appendEventToLog("Player 1 Stabs his sword.");
appendEventToLog("Player 2 is hit for 10 damage!");

export default App
