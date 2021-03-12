import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//setup vars
  const books = [
  {
    id: 1,
    title: 'The Code Breaker',
    author: 'Walter Isaacson',
    source: "https://images-na.ssl-images-amazon.com/images/I/41KMmXBPckL._SX327_BO1,204,203,200_.jpg"
  },
  {
    id: 2,
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    source: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg"
  },
  {
    id: 3,
    title: 'The Code Breaker2',
    author: 'Stephen King',
    source: "https://images-na.ssl-images-amazon.com/images/I/81LoD65Jy6L._AC_UL200_SR200,200_.jpg"
  }
]

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
      {books.map((book) => {
        return (
          <Book key={book.id} {...book} />
        );
      })}
    </section>
  );
}


const Book = (props) => {
  // console.log(props);
  const { source, title, author } = props;
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className='book'>
      <img onClick={() => console.log('this works too')} src={source} alt=''/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      {/* <button type='button' onClick={clickHandler}>Button</button> */}
    </article> 
  )
}



ReactDom.render(<App />, document.getElementById('root'))
