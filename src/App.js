import './App.css';
import emLogo from './images/background.jpeg';
import chair1 from './images/chair1.jpeg';
import chair2 from './images/chair2.jpeg';
import chair3 from './images/chair3.jpeg';
import chair4 from './images/chair4.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  const chairImages = [chair1, chair2, chair3, chair4];
  
  return (
    <div className="App">
      <div className='contact'>
        <img className="logo" src={emLogo} alt="E. M. Makes logo" />
        <h1>Professional Upholstery Service 
          <br></br>
          by Emily Montgomery.
        </h1>
        <h2>Based in Dunmanway, covering West Cork.</h2>
        <h3>Tel: +353 (0) 83 012 5037</h3>
        <h3><a href="mailto:emily.montgomery.makes@gmail.com" style={{ color: 'white' }}>emily.montgomery.makes@gmail.com</a></h3>
        <h3>
          <a href="https://www.instagram.com/e.m.makes" target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>
            @e.m.makes
          </a>
        </h3>
      </div>
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} autoPlay={true} interval={10000} infiniteLoop={true}>
        {chairImages.map((image, index) => (
          <div key={index}>
            <img className="carousel-image" src={image} alt={`Chair ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;

