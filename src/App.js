
import './App.css';
import Homepage from './Homepage';
import FoodDetail from './FoodDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/:id" exact element={<FoodDetail/>} />
      </Routes>
    </BrowserRouter>
     
     </div>
  );
}

export default App;
