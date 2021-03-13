import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {data} from './books';
import Book from './book'
//setup vars
  
function App() {
  return ( 
    <main>
      <h1>The Booklist</h1>
      <Booklist />
    </main>

  );
}


function Booklist(){
  return (
    <section className='booklist'>
      {data.map((book) => {
        return (
          <Book key={book.id} {...book} />
        );
      })}
    </section>
  );
}






ReactDom.render(<App />, document.getElementById('root'))
