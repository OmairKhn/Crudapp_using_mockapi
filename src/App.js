import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Compunents/Read";
import './App.css';
import {Create} from './Compunents/Create';
import {Update} from "./Compunents/Update";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route  path="/" element={<Create/>}> </Route>
    <Route  path="/read" element={<Read/>}> </Route>
    <Route  path="/update" element={<Update/>}></Route>
</Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
