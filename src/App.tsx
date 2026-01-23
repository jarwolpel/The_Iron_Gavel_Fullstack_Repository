import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import MainMenu from "./components/pages/MainMenu";
import BattleScreen from "./components/common/BattleScreen/BattleScreen";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          {/* Render Main Menu Page */}
          <Route index element={
            <MainMenu></MainMenu>
          }
          />
          {/* Render */}
          <Route index element={
            <BattleScreen></BattleScreen>
          }
          />
      </Route>
    </Routes>
  )
}
export default App
