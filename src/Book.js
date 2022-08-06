import { bookContext } from './App';
import './book.css'
import { useContext } from 'react';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { lightBlue } from '@mui/material/colors';
import axios from 'axios';

export default function Book() {
  let { book, setBook, bookName } = useContext(bookContext);
  const url = `https://openlibrary.org/search.json?q=${bookName}&mode=ebooks&has_fulltext=true`;

  // This will execute as soon as page gets loaded
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setBook(response.data.docs)
      console.log(response.data.docs)
    })
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: '#ddfff5',
      padding: '2.5vw',
      width: '95vw',
      height: '100%'
    }}>
      {/* This map funtion will run upto the length of book array  */}
      {book.map((item, index) => (
        <div className='book'>
          <div className='img'>
            <p><NavLink to='/singlePage' state={{ id: item.key }}>
              <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} />
            </NavLink></p>
          </div>
          <div className='content'>
            <p style={{
              fontWeight: '600', fontSize: '1.4rem', marginBottom: '0', fontFamily: 'cursive'
            }}
            >{item.title_suggest}</p>
            <p><span style={{ color: 'rgb(66, 66, 66)', marginTop: '0' }}>by </span>
              {item.author_name ?
                item.author_name.map(author => (
                  <span style={{ fontSize: '1.1rem' }}>{author} </span>
                ))
                : null}
            </p>
            <p style={{ marginTop: '0', fontSize: '0.89rem', color: 'rgba(100, 100, 100' }}>First Published in {item.first_publish_year}</p>
            <p style={{ marginTop: '0', fontSize: '0.89rem', color: 'rgba(100, 100, 100' }}><span style={{ color: 'rgb(243, 102, 21)' }}>{item.edition_count} editions</span>
              {item.language ? <span style={{ textDecoration: 'underline' }}> in {item.language.length} language</span> : null}
              <span> --{item.ia.length} previewable</span>
            </p>
          </div>
          <div className='btns'>
            <button><NavLink to='/singlePage' state={{ id: item.key }}>
              View
            </NavLink>
            </button>
            <button>Want to Read <span> | </span><i class="fa-solid fa-caret-down"></i></button>
          </div>
        </div>
      )
      )}


    </div>
  )
}
