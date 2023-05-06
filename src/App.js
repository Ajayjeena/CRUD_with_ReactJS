import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
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
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
