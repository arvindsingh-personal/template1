import React from 'react'
import { bookContext } from './App';
import { useContext, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './singlepage.css'

export default function SinglePage() {
  let ID = useLocation();
  let { book } = useContext(bookContext);
  let i = 1;
  return (
    <div className='main-single'>
      <div className='singlepage'>
        {
          book.map((item, index) => (
            item.key === ID.state.id ?
              <>
                {/* This is the left section of the single page  */}
                <div className='left'>
                  <p><img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} /></p>

                  <p className='btns'>
                    <button>Want to Read <span> | </span><i class="fa-solid fa-caret-down"></i></button>
                  </p>

                </div>
                {/* This is right section of the single page */}
                <div className='right'>
                  <p id='para1'><i>An edition of {item.title} <span style={{ fontSize: '1rem' }}>({item.first_publish_year})</span></i></p>
                  <h1 style={{
                    fontFamily: 'cursive', fontSize: '3rem', marginBottom: '0'
                  }}
                  >{item.title_suggest}</h1>
                  <p id='para2'><i style={{ color: 'gray' }}>translated into English verse</i></p>
                  {item.author_name ?
                    <p id='para3'>
                      <span>by </span>
                      {item.author_name.map(author => (
                        <NavLink to='/' ><span style={{ fontSize: '1.1rem' }}>{author} </span></NavLink>
                      ))}
                    </p>
                    : null}
                  <div className='div1'>
                    <p>
                      <h5 >Publish Date</h5>
                      <p>{item.publish_date[0]}</p>
                    </p>
                    <p>
                      <h5>Publisher</h5>
                      <NavLink to='/'><p>{item.publisher[0]}</p></NavLink>
                    </p>
                    <p>
                      <h5>Language</h5>
                      <NavLink to='/'><p>English</p></NavLink>
                    </p>

                  </div>
                  <div className='div2'>
                    {item.number_of_pages_median ?
                      (<><h2 style={{ marginBottom: '0' }}>Pages</h2> <p style={{ marginTop: '4px' }}>{item.number_of_pages_median}</p></>)
                      : null}

                  </div>
                  <div className='div3'>
                    <h1>Book Details</h1>
                    <hr />
                    {item.publish_place ?
                      (
                        <p>
                          <h4>Published in </h4>
                          {item.publish_place.length > 3 ?
                            <p><span>{item.publish_place[1]}, </span><span>{item.publish_place[2]} </span></p>
                            : <p><span>{item.publish_place}</span></p>}
                        </p>
                      )
                      : null}
                    <p>
                      <h4>Edition Notes</h4>
                      <p>
                        <p style={{ marginBottom: '0' }}>Printed in India.</p>
                        <p style={{ marginTop: '0' }}>Imperfect: v. 5 of L.C. set wanting.</p>
                      </p>
                    </p>
                    <p >
                      <h4>ID Numbers</h4>
                      <p>Open Library  <span style={{ marginLeft: '2vw' }}>{item.cover_edition_key}</span></p>
                    </p>
                    <p>
                      {item.ia ?
                        <>
                          <h4>Internet Archive</h4>
                          <p>Open Library <span style={{ marginLeft: '2vw' }}>{item.ia}</span></p>
                        </> : null}
                    </p>
                  </div>
                </div>
              </> : null
          ))
        }
      </div>

    </div>
  )
}
