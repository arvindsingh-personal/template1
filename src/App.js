
import './App.css';
import Navbar from './Navbar';

import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Instagram from './instagram';
import { useState } from 'react';
import { createContext } from 'react';
import Signup from './Signup';
import './data.json'

const data = require('./data.json');

export const loginContext = createContext();
function App() {
  let Data = data.data;
  const [login, setLogin] = useState([]);
  const [userName, setUserName] = useState('');
  const [mainData, setMainData] = useState(Data);

 

  return (
    <div className="App">
      <loginContext.Provider value={{ login, setLogin, userName, setUserName,mainData, setMainData }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/homepage' element={<Instagram />} />
        </Routes>
      </loginContext.Provider>
    </div>
  );
}

export default App;
