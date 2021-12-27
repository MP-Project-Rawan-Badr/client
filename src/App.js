import { Routes, Route } from 'react-router-dom';
import './App.css';
import ActivateEmail from './Components/activeEmail';
import Appointment from './Components/appointment';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Inquiries from './Components/inquiries';
import Inquiry from './Components/inquiry';
import Login from './Components/login';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import Posts from './Components/Posts';
import Profile from './Components/profile';
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
     <Route exact path="/inquiries" element={<Inquiries />} />
     <Route exact path="/appointment" element={<Appointment />} />
     <Route exact path="/profile" element={<Profile />} />
     <Route exact path="/post/:id" element={<Post />} />
     <Route exact path="/inquiry/:id" element={<Inquiry />} />





     </Routes>
    </div>
  );
}

export default App;
