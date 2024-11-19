import React from 'react';
import '../app.css';  

function Directions() {
  return (
    <section className="directions">
        <h1 align='left'>Venue</h1>
        <p align='left'>Lecture Hall-01, D Block</p>
<p align='left'>MIET, Jammu</p>
<p align='left'>Kot Bhalwal</p>
<p align='left'>J&K, India-181122</p>
<div className='directionsmiet'>
        <h2>MIET Directions</h2>
      <iframe
        width="600"
        height="450"
        align ="left"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/dir//Kot+Bhalwal,+Jammu,+Jammu+and+Kashmir+181122/@32.8122406,74.7366958,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391e87ad2533b009:0x77069456c55e9f86!2m2!1d74.819097!2d32.8122676?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">
      </iframe>
      </div>
    </section>
  );
}

export default Directions;
