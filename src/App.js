import logo from './ImageStorage/cat.png';
import bkgrd from './ImageStorage/hog-exploding.gif';
import money from './ImageStorage/money.gif';
import coins from './ImageStorage/coinrain.gif';
import { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [sizeImg, incSizeImg] = useState(600);

  function imgSizeFunction() {
    incSizeImg(sizeImg + 40);
  }

  function imageDestroy() {
    const imageElement = document.querySelector('.App-logo');
    const appLinkElement = document.querySelector('.App-link');
    if (sizeImg >= 1200) {
      imageElement.style.animation = 'shatter 3s forwards'
      appLinkElement.style.opacity = '100'
    }
  }

  useEffect(imageDestroy, [sizeImg]);

  const [inputText, getInputText] = useState('');

  const handleChange = (event) => {
    getInputText(event.target.value);
  }

  if (inputText.toString().toLowerCase() === "yes") {
    document.querySelector('.Coin-fall').style.opacity = '100'
    document.querySelector('.InputBox').style.display = 'none'
  }


  function Prosperity() {
    document.querySelector('.App').style.backgroundImage = `url(${money})`
    document.querySelector('.InputBox').style.opacity = '100'

  }

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bkgrd})`,
        backgroundSize: '200px 100px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
      }}>

      <img src={coins} className="Coin-fall" style={{ backgroundSize: 'cover', minHeight: '100vh', opacity: '0', position: 'absolute' }} alt="coins" />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" style={{ width: `${sizeImg}px`, height: `${sizeImg}px` }} />

        <a
          className="App-link"
          href="https://youtu.be/QuNhTLVgV2Y"
          target="_blank"
          rel="noopener noreferrer"
        >
          He got too big :(
        </a>

      </header>

      <div>
        <button onClick={imgSizeFunction} className="Button">Make it larger!</button>
      </div>

      <div>
        <button onClick={Prosperity} className="MoneyButton">See your future</button>
      </div>

      <input
        className="InputBox"
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="AFFIRM YES TO CLAIM!!!"
      />

    </div>
  );
}

export default App;
