import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import { LoginPage } from "./components/pages/LoginPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={
            <LoginPage/>
          }/>
      </Route>
    </Routes>
  );
}
export default App
