

import { useState } from 'react';

function App() {

  const[quote,setQuote]=useState('')

  const quotegenerate=()=>{
    fetch('https://dummyjson.com/quotes')
    .then(res=>res.json())
    .then(data=>{console.log(data)
                var num=Math.floor(Math.random()*30);
                var test=data.quotes[num].quote;
                var auth=data.quotes[num].author
                console.log(num)
                const randquote={
                  quotes:test,
                  author:auth
                }
                setQuote(randquote)
    }
    );
  }
  return (
    <div className="App">
      <div className="container">
      <button className='btn btn-success mt-5 ' onClick={quotegenerate}>Random Quotes Genertor</button>
        <h3 className='mt-5'>{quote.quotes}</h3>
      
      </div>
    </div>
  );
}

export default App;