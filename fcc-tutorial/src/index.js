import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//setup vars
const firstbook = {
  title: 'The Code Breaker',
  author: 'Walter Isaacson',
  source: "https://images-na.ssl-images-amazon.com/images/I/41KMmXBPckL._SX327_BO1,204,203,200_.jpg"
}

const secondbook = {
  title: 'The Code Breaker2',
  author: 'Walter Isaacsonnnn',
  source: "https://images-na.ssl-images-amazon.com/images/I/41KMmXBPckL._SX327_BO1,204,203,200_.jpg"
}




function Booklist(){
  return (
    <main>
      <h1>The Booklist</h1>
      <section className='booklist'>
        <Book 
          source={firstbook.source}
          title={firstbook.title}
          author={firstbook.author}
        />
        <Book
          source={secondbook.source}
          title={secondbook.title}
          author={secondbook.author}
        />

      </section>
    </main>
  );
}


const Book = ({ source, title, author }) => {
  // console.log(props);
  // const { source, title, author } = props;
  return (
    <article className='book'>
      <img src={source} alt=""/>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article> 
  )
}



ReactDom.render(<Booklist />, document.getElementById('root'))
