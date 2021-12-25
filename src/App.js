import { Routes, Route } from 'react-router-dom';
import './App.css';
import ActivateEmail from './Components/activeEmail';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/login';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Register from './Components/register';
import StartPage from './Components/startPage';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path="/" element={<StartPage />} />
     <Route exact path="/header" element={<Header />} />
     <Route exact path="/navbar" element={<Navbar />} />

     <Route exact path="/home" element={<Home />} />
     <Route exact path="/footer" element={<Footer />} />
     <Route exact path="/register" element={<Register />} />
     <Route exact path="/activate/:token" element={<ActivateEmail />} />
     <Route exact path="/login" element={<Login />} />


     <Route exact path="/posts" element={<Posts />} />


     </Routes>
    </div>
  );
}

export default App;
