import { Routes, Route} from "react-router-dom";
import './App.css'

import { Layout } from './components/common/layout/layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          
      </Route>
    </Routes>
  )
}
export default App
