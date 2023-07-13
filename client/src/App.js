
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>MERN APP</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
