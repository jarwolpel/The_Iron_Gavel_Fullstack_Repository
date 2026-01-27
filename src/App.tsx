import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import { LoginPage } from "./components/pages/LoginPage";
import { useState } from "react";
import type { UserData } from "./types/userDataType";
import { CreateAccount } from "./components/pages/CreateAccount";


function App() {
  const [loggedInUser, setLoggedInUser] = useState<UserData | null>();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route element={
            <LoginPage/>
          }/>
          <Route index element={
            <CreateAccount/>
          }/>
      </Route>
    </Routes>
  );
}
export default App
