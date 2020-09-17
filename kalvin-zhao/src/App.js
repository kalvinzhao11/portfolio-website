import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'particlesjs'

function App() {

  window.onload = () => {
    Particles.init({
      selector: '.background',
      responsive: [
        {
          breakpoint: 
    768
    ,
          options: {
            maxParticles: 
    200
    ,
            color: 
    '#48F2E3'
    ,
            connectParticles: 
    false
          }
        }, {
          breakpoint: 
    425
    ,
          options: {
            maxParticles: 
    100
    ,
            connectParticles: 
    true
          }
        }, {
          breakpoint: 
    320
    ,
          options: {
            maxParticles: 
    0
     
    // disables particles.js
          }
        }
      ]
    });
  };

  return (
    <>
    <div className="App">
    <h1>Kalvin Zhao</h1>
    </div>
    <canvas class="background"></canvas>
    <script src="path/to/particles.min.js"></script>
    </>
  );
}

export default App;
