import logo from './ImageStorage/cat.png';
import bkgrd from './ImageStorage/hog-exploding.gif'
import {useState, useEffect} from 'react';
import './App.css';



function App() {

  const [sizeImg, incSizeImg] = useState(600);

  function imgSizeFunction(){
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

  return (
    <div className="App" 
    style={{
    backgroundImage: `url(${bkgrd})`,
    backgroundSize: '200px 100px',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    }}>
      
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" style={{ width: `${sizeImg}px`, height: `${sizeImg}px`}} />
        
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
          <button onClick={imgSizeFunction} className = "Button">Make it larger!</button>
      </div>
      
    </div>
  );
}

export default App;
