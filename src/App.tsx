import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import { LoginPage } from "./components/pages/LoginPage";
import { useState } from "react";
import { CreateAccount } from "./components/pages/CreateAccount";
import type { Credentials } from "./types/userCredentials";
import { userCredentials } from "../data/userCredentials";


function App() {
  //const [loggedInUser, setLoggedInUser] = useState<UserData | null>();

  // Creating state of user data in app.tsx so its accessible by all children.
  const [userDatabase, updateUserDatabase] = useState<Credentials[]>(userCredentials);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route element={
            <LoginPage
            userDatabase={userDatabase}
            />
          }/>
          <Route index element={
            <CreateAccount
            userDatabase={userDatabase}
            updateUserDatabase={updateUserDatabase}
            />
          }/>
      </Route>
    </Routes>
  );
}
export default App
