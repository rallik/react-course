const Book = (props) => {
    // console.log(props);
    const { source, title, author } = props;
    
    return (
      <article className='book'>
        <img onMouseOver={() => console.log('this works too')} src={source} alt=''/>
        <h3>{title}</h3>
        <h4>{author}</h4>
        {/* <button type='button' onClick={clickHandler}>Button</button> */}
      </article> 
    )
  };

  export default Book;