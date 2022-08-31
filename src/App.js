import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Book from './Book';
import SinglePage from './SinglePage';

export const bookContext = createContext(); 

function App() {
  const [book, setBook] = useState([]);
  const [bookName, setBookName] = useState('Harry Potter');
  const [bgs, setBgs] = useState('#ddfff5');
  const [bgs1, setBgs1] = useState('#ffffff');
  const [bgs2, setBgs2] = useState('aliceblue');
  const [bgs3, setBgs3] = useState('gainsboro');
  const [bgs4, setBgs4] = useState('#FFCFCF');
  const [bgsButton, setButtonBgs] = useState('rgb(243, 102, 21)');
  const [bgsButton1, setButtonBgs1] = useState('rgb(243, 102, 21)')
  const [txt, setText] = useState('black');
  const [txt1, setText1] = useState('rgb(66, 66, 66)');
  const [txt2, setText2] = useState('rgb(66, 66, 66)');
  const [txt3, setText3] = useState('brown');
  const [txt4, setText4] = useState('#0C0C0C');
  const [txt5, setText5] = useState('rgb(61, 61, 61)');
  const [txt6, setText6] = useState('rgb(56, 56, 56)');
  const [txt7, setText7] = useState('');
  return (
    <div className="App">
      <bookContext.Provider value={{ book, setBook, bookName, setBookName, bgs, setBgs, bgs1, setBgs1, bgs2, setBgs2, bgs3, setBgs3, bgs4, setBgs4, bgsButton, setButtonBgs, bgsButton1, setButtonBgs1, txt, setText, txt1, setText1, txt2, setText2, txt3, setText3, txt4, setText4, txt5, setText5, txt6, setText6, txt7, setText7 }} >
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
