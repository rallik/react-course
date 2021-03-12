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
  title: 'The Very Hungry Caterpillar',
  author: 'Eric Carle',
  source: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg"
}

const thirdbook = {
  title: 'The Code Breaker2',
  author: 'Stephen King',
  source: "https://images-na.ssl-images-amazon.com/images/I/81LoD65Jy6L._AC_UL200_SR200,200_.jpg"
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
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem repudiandae quae facilis consequuntur magnam autem soluta consequatur minima mollitia.</p>
        </Book>
        <Book
          source={secondbook.source}
          title={secondbook.title}
          author={secondbook.author}
        />
        <Book
          source={thirdbook.source}
          title={thirdbook.title}
          author={thirdbook.author}
        />

      </section>
    </main>
  );
}


const Book = (props) => {
  // console.log(props);
  const { source, title, author, children } = props;
  return (
    <article className='book'>
      <img src={source} alt=""/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      {children}
    </article> 
  )
}



ReactDom.render(<Booklist />, document.getElementById('root'))
