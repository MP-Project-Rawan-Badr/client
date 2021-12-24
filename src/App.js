import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import StartPage from './Components/startPage';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path="/" element={<StartPage />} />
     <Route exact path="/header" element={<Header />} />
     <Route exact path="/home" element={<Home />} />
     <Route exact path="/footer" element={<Footer />} />

     </Routes>
    </div>
  );
}

export default App;
