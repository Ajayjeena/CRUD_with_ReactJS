import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import LearningReact from './components/LearningReact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route path="/" element={<LearningReact/>} />
        <Route path="/all" element={<AllUser/>} />
        <Route path="/add" element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
