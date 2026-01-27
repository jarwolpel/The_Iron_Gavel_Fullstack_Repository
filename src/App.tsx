import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import MainMenu from "./components/pages/MainMenu";
import BattleScreen from "./components/common/BattleScreen/BattleScreen";
import { LoginPage } from "./components/pages/LoginPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

          {/* Render Main Menu Page */}
          <Route index element={<MainMenu />}
          />

          {/* Render Battle screen */}
          <Route path="/battle-screen">
            <Route element={<BattleScreen />}
            />
          </Route>

          {/* Render Login Page & Create Account */}
          <Route path="/accounts">
            <Route 
            path="login"
            element={<LoginPage/>} 
            />
          </Route> 


      </Route>
    </Routes>
  );
}
export default App
