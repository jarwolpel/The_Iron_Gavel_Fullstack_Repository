import { useState } from 'react'
import { Routes, Route, Router} from "react-router-dom";
import './App.css'

import EventsLog, { appendEventToLog } from './components/BattleScreen/BattleScreenEventsLog/EventsLog'
import { Layout } from './components/common/layout/layout';
import BattleScreen from './components/BattleScreen/BattleScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          
      </Route>
    </Routes>
  )
}
export default App
