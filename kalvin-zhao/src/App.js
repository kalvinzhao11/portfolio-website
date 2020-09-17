import React from 'react';
import './App.css';
import Particles from 'particlesjs'

function App() {

  window.onload = () => {
    Particles.init({
      selector: '.background',
    });
  };

  return (
    <>
    <div className="App">
    <h1>Kalvin Zhao</h1>
    <h2>Frontend Developer | NC State Alumni</h2>
    <h3><a href="https://www.linkedin.com/in/kalvinzhao/">https://www.linkedin.com/in/kalvinzhao/</a> | <a href="https://github.com/kalvinzhao11">https://github.com/kalvinzhao11</a></h3>
    <br></br>
    <h4>NASA Picture Of The Day</h4>
    <p><a href="https://nasa-photo-of-the-day-alpha-one.vercel.app/">Website</a></p>
    <p><a href="https://github.com/kalvinzhao11/nasa-photo-of-the-day/tree/kalvin-zhao">Github</a></p>

    <h4>Stock Academy (In Developement)</h4>
    <a href="https://stock-academy-io.vercel.app/">Website </a>
    <a href="https://github.com/kalvinzhao11/stock-academy">Github</a>
    </div>
    <canvas class="background"></canvas>
    <script src="path/to/particles.min.js"></script>
    </>
  );
}

export default App;
