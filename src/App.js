import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Book from './Book';
import SinglePage from './SinglePage';

export const bookContext = createContext();

function App() {
  const [book, setBook] = useState([]);
  const [bookName, setBookName] = useState('ramayan');
  return (
    <div className="App">
      <bookContext.Provider value={{book, setBook, bookName, setBookName}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Book />} />
          <Route path='/singlePage' element={<SinglePage />} />
        </Routes>
      </bookContext.Provider>
    </div>
  );
}

export default App;
