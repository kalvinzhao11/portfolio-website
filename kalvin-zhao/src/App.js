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
    <br></br>

    <h4>NASA Pic Of The Day</h4>

    <h4>Stock Academy (In Developement)</h4>
    <a href="https://stock-academy-io.vercel.app/">website</a>
    <a href=""></a>
    </div>
    <canvas class="background"></canvas>
    <script src="path/to/particles.min.js"></script>
    </>
  );
}

export default App;
