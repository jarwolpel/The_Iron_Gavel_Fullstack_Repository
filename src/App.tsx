import { Routes, Route} from "react-router-dom";
import './App.css'
import { useState } from "react"
import { Layout } from './components/common/layout/layout';
import MainMenu from "./components/pages/MainMenu";
import BattleScreen from "./components/common/BattleScreen/BattleScreen";
import CreateBattle from "./components/pages/CreateBattle";
import LoadBattle from "./components/pages/LoadBattle";
import { LoginPage } from "./components/pages/LoginPage";
import { initialBattles } from "../data/battleList";
import type { Battle } from "../data/battleList";


function App() {

  const [battles, setBattles] = useState<Battle[]>(initialBattles);

  const handleBattleCreate = (name: string, description: string) => {
    const newBattle: Battle = {
      id: Date.now().toString(), // Simple ID generation
      name,
      description,
    };
    setBattles([...battles, newBattle]);
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

          {/* Render Main Menu Page */}
          <Route index element={<MainMenu />}
          />

          {/* Render Create Battle screen */}
          <Route 
            path="/create-battle"
            element={<CreateBattle onBattleCreate={handleBattleCreate} />}
            >
            <Route 
              path="characterselect"
              element={"<CharacterSelect />"}
            />
          </Route>

          {/* Render Load Battle screen */}
          <Route 
            path="/load-battle"
            element={<LoadBattle battles={battles}/>}
            >
          </Route>

          {/* Render Battle screen */}
          <Route path="/battles">
            <Route 
            path="battle-screen"
            element={<BattleScreen />}
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
