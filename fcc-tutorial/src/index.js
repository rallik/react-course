import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//setup vars
const title = 'The Code Breaker';
const author = 'Walter Isaacson';
const source = "https://images-na.ssl-images-amazon.com/images/I/41KMmXBPckL._SX327_BO1,204,203,200_.jpg";

function App(){
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
      <Book author/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}


const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img 
        src={source}
        alt=""
      />
      <h3>{title}</h3>
  <h4 style={{color:'#617d98'}}>{author}</h4>
    </article> 
  )
}



ReactDom.render(<App />, document.getElementById('root'))
