import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Navbar from "./Components/Navbar"
import StartPage from './Components/startPage';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Routes>
     <Route exact path="/" element={<StartPage />} />
     <Route exact path="/header" element={<Header />} />
     </Routes>
    </div>
  );
}

export default App;
