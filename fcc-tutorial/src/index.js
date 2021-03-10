import React from 'react';
import ReactDom from 'react-dom';


function Booklist(){
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}


const Book = () => {
  return (
    <article>
    <Image></Image>
    <Title/>
    <Author/>
  </article>
  )
}

const Image = () => (
  <img 
    src="https://images-na.ssl-images-amazon.com/images/I/41KMmXBPckL._SX327_BO1,204,203,200_.jpg"
    alt="The Code Breaker by Walter Isaacson"
  />
)

const Title = () => <h1>The Code Breaker</h1>;

const Author = () => <h4>Walter Isaacson</h4>;

ReactDom.render(<Booklist />, document.getElementById('root'))
