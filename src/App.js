import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import List from "./Components/List/List";
import Hotel from "./Components/Hotel/Hotel";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotel" element={<List/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
          </Routes>
        </BrowserRouter>
        
          
      </>
  );
}

export default App;
