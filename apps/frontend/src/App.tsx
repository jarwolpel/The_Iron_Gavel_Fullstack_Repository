/**----------------React----------------- */
import { Routes, Route} from "react-router-dom";
// import { useState } from "react";

/**----------------Misc----------------- */
import './App.css'

/**----------------Components----------------- */
import { Layout } from './components/common/layout/layout';
import MainMenu from "./components/pages/MainMenu";
import BattleScreen from "./components/common/BattleScreen/BattleScreen";
import CreateBattle from "./components/pages/CreateBattle";
import LoadBattle from "./components/pages/LoadBattle";
import { LoginPage } from "./components/pages/LoginPage";
import { CreateAccount } from "./components/pages/CreateAccount";
import { CharacterSelect } from "./components/common/characterselect/Characterscreen";
import { Favorites } from "./components/pages/FavoriteCharacter";

/**----------------Hooks----------------- */
import { useBattles } from "./hooks/useBattles";

/**----------------APIS----------------- */

/**----------------Types----------------- */

function App() {

  const { battles, createBattle } = useBattles();

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

          {/* Render Main Menu Page */}
          <Route index element={<MainMenu />}
          />

          {/* Render Create Battle screen */}
          <Route 
            path="/create-battle"
            element={<CreateBattle onBattleCreate={createBattle} />}
            >
            <Route 
              path="characterselect"
              element={<CharacterSelect/>}
            />
          </Route>
          {/*TEST ROUT for character screen*/}
            <Route
            path="/test-character-select2"
            element={<CharacterSelect />}>
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
          <Route path="/accounts/login"
            element={<LoginPage/>}
          />
          <Route path="/accounts/createAccount"
            element={<CreateAccount/>}
          />
          {/* Favorites screen */}
          <Route 
            path="/Favorites"
            element={<Favorites/>}
            >
          </Route>
      </Route>
    </Routes>
  );
}
export default App
