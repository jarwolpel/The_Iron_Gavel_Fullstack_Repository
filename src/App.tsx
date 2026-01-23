import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';
import MainMenu from "./components/pages/MainMenu";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          {/* Render the different pages that are inside the layout component */}
          <Route index element={
            <MainMenu></MainMenu>
          }
          />
      </Route>
    </Routes>
  )
}
export default App
