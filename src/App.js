import './App.css';
import emLogo from './em_logo.png'
import instagramLogo from './instagram.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <img className="logo" src={emLogo} alt="E. M. Makes logo" />
        </p>
      </header>
      <div className='contact'>
      <h2>Dunmanway, Co.Cork</h2>
      <h3>Tel: +353 (0) 83 012 5037</h3>
      <h3>emily.montgomery.makes@gmail.com</h3>
      </div>
      <div>
      <a href="https://www.instagram.com/e.m.makes" target="_blank" rel="noopener noreferrer">
          <img className='contact-icon'src={instagramLogo} alt="Instagram logo"/>
      </a>
      </div>
    </div>
  );
}

export default App;
