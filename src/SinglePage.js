import React from 'react'
import { bookContext } from './App';
import { useContext, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './singlepage.css'
import Footer from './Footer';

export default function SinglePage() {
  let ID = useLocation();
  let { book, bgs2, bgs3, bgs4, bgsButton1, txt, txt1, txt5, txt6, txt7 } = useContext(bookContext);
  let i = 1;
  return (
    <>
      <div className='main-single' >
        <div className='singlepage' style={{ backgroundColor: bgs2 }}>
          {
            book.map((item, index) => (
              item.key === ID.state.id ?
                <>
                  {/* This is the left section of the single page  */}
                  <div className='left' style={{ backgroundColor: bgs4 }}>
                    <p><img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg`} alt='' /></p>

                    <p className='btns'>
                      <button style={{ backgroundColor: bgsButton1 }}>Want to Read <span> | </span><i class="fa-solid fa-caret-down"></i></button>
                    </p>

                  </div>
                  {/* This is right section of the single page */}
                  <div className='right'>
                    <p id='para1' style={{ color: txt1 }} ><i>An edition of {item.title} <span style={{ fontSize: '1rem' }}>({item.first_publish_year})</span></i></p>
                    <h1 style={{
                      fontFamily: 'cursive', fontSize: '3rem', marginBottom: '0', color: txt
                    }}
                    >{item.title_suggest}</h1>
                    <p id='para2'><i style={{ color: txt1 }}>translated into English verse</i></p>
                    {item.author_name ?
                      <p id='para3'>
                        <span style={{ color: txt1 }}>by </span>
                        {item.author_name.map(author => (
                          <NavLink to='/' ><span style={{ fontSize: '1.1rem' }}>{author} </span></NavLink>
                        ))}
                      </p>
                      : null}
                    <div className='div1'
                      style={{ backgroundColor: bgs3 }}>
                      <p>
                        <h5 style={{ color: txt }} >Publish Date</h5>
                        <p style={{ color: txt1 }} >{item.publish_date[0]}</p>
                      </p>
                      <p>
                        <h5 style={{ color: txt }}>Publisher</h5>
                        <NavLink to='/'><p >{item.publisher[0]}</p></NavLink>
                      </p>
                      <p>
                        <h5 style={{ color: txt }}>Language</h5>
                        <NavLink to='/'><p>English</p></NavLink>
                      </p>

                    </div>
                    <div className='div2' style={{ color: '#04AA6D' }}>
                      {item.number_of_pages_median ?
                        (<><h2 style={{ marginBottom: '0' }}>Pages</h2> <p style={{ marginTop: '4px' }}>{item.number_of_pages_median}</p></>)
                        : null}

                    </div>
                    <div className='div3'>
                      <h1 style={{ color: txt5 }}>Book Details</h1>
                      <hr />
                      {item.publish_place ?
                        (
                          <p>
                            <h4 style={{ color: txt6 }}>Published in </h4>
                            {item.publish_place.length > 3 ?
                              <p style={{ color: txt7 }}><span >{item.publish_place[1]}, </span><span>{item.publish_place[2]} </span></p>
                              : <p style={{ color: txt7 }}><span>{item.publish_place}</span></p>}
                          </p>
                        )
                        : null}
                      <p style={{ color: txt7 }}>
                        <h4 style={{ color: txt6 }}>Edition Notes</h4>
                        <p>
                          <p style={{ marginBottom: '0' }}>Printed in India.</p>
                          <p style={{ marginTop: '0' }}>Imperfect: v. 5 of L.C. set wanting.</p>
                        </p>
                      </p>
                      <p >
                        <h4 style={{ color: txt6 }}>ID Numbers</h4>
                        <p style={{ color: txt7 }}>Open Library  <span style={{ marginLeft: '2vw' }}>{item.cover_edition_key}</span></p>
                      </p>
                      <p>
                        {item.ia ?
                          <>
                            <h4 style={{ color: txt6 }}>Internet Archive</h4>
                            <p style={{ color: txt7 }}>Open Library <span style={{ marginLeft: '2vw' }}>{item.ia.length > 1 ? <p>{item.ia[0]} ,{item.ia[1]}</p> : item.ia}</span></p>
                          </> : null}
                      </p>
                    </div>
                  </div>
                </> : null
            ))
          }
        </div>

      </div>
      <Footer />
    </>
  )
}
