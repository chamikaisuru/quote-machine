import './App.scss';
import colorArray from './colorsArray';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

let quoteDb = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {

  const [quote, setQuote] = useState('I didn’t fail the test. I just found 100 ways to do it wrong.');
  const [author, setAuthor] = useState('Teddy Roosevelt');
  const [randomNumber, setRandomNumber] = useState(0);
  const [quoteArray, setQuoteArray] = useState(null);
  const [accentcolor, setAccentcolor] = useState('#809900');

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJson = await response.json();
    setQuoteArray(parsedJson.quotes);


  }

  useEffect(() => {
    fetchQuotes(quoteDb)
  })
  console.log(colorArray);
  const generateRandomNumber = () => {
    let randomInteger = Math.floor(quoteArray.length * Math.random());
    setRandomNumber(randomInteger);
    setAccentcolor(colorArray[randomInteger]);
    setQuote(quoteArray[randomInteger].quote);
    setAuthor(quoteArray[randomInteger].author);

  }

  return (
    <div className="App">

      <header className="App-header" style={{ backgroundColor: accentcolor }}>
        <div id='quote-box' style={{ color: accentcolor }}>
          {/* <p>randomNUmber: {randomNumber}</p> */}
          <p id='text'><FontAwesomeIcon icon={faQuoteLeft } size="lg" id='fa' />{quote}</p>
          <p id='author'>-{author}</p>

          <div className='buttons'>
            <a id='tweet-quote' className='button' style={{ backgroundColor: accentcolor }} href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote}  - ${author}`)}> <FontAwesomeIcon icon={faTwitter} />
</a>

            <a id="tumblr-quote" className='button' style={{ backgroundColor: accentcolor }} href={encodeURI(`https://www.tumblr.com/new/quote?text=${quote}  - ${author}`)}>
            <FontAwesomeIcon icon={faTumblr} />
            </a>

            <button id='new-quote' className='button' style={{ backgroundColor: accentcolor }} onClick={() => generateRandomNumber()}>New Quote</button>

          </div>
          


        </div>
        <div className="footer">
      <p id='author'>By Chamika Madusanka</p>
      </div>
      </header>
      
      
    </div>
  );
}

export default App;
