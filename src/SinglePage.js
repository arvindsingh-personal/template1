import React from 'react'
import { bookContext } from './App';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './singlepage.css'



export default function SinglePage() {
  let ID = useLocation();
  let { book } = useContext(bookContext)
  return (
    <div className='main-single'>
<div className='singlepage'>
      {
        book.map((item, index) => (
          item.key === ID.state.id ?
            <>
              <div className='left'>
                <p><img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} /></p>

                <p className='btns'>
                <button>Want to Read <span> | </span><i class="fa-solid fa-caret-down"></i></button>
                </p>

              </div>

              <div className='right'>
                <p id='para1'><i>An edition of {item.title} {item.first_publish_year}</i></p>
                <h1 style={{
                  fontFamily:'cursive', fontSize:'3rem', marginBottom:'0'
                }}
                >{item.title_suggest}</h1>
                <p id='para2'><i>translated into English verse</i></p>
                {item.author_name ?
                <p id='para3'>
                  <span>by </span> 
                  {item.author_name.map(author => (
                  <span style={{ fontSize: '1.1rem' }}>{author} </span>
                ))}
                  </p>
                : null }
              </div>
            </> : null
        ))
      }
    </div>

    </div>
  )
}
