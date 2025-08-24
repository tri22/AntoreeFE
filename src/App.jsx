
import './App.css'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    </Router>
  );
}

export default App;