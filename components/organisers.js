import React from 'react';

function Organisers() {
  return (
    <div id='organiser' className='organ-container'>
      <br/><br/>
      <h1 className='organ-heading' style={{color:"rgb(0, 23, 85)"}}>Organisers</h1>
      <div className='organ-images'>
        <section className='organ'>
          <img 
            src="https://event.india.acm.org/wp-content/uploads/2023/08/acm_india_council_logo.svg" 
            alt="Organisers 1" 
          />
        </section>
        <section className='organ'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdNcTWznKvHNZUwv_J-nAimGANHhyDhDZdmBJV1L2KaNbgpgmMLDoA5TSQ8L_mLSNqTU&usqp=CAU" 
            alt="Organisers 2" 
          />
        </section>
      </div>
      <br/><br/>
    </div>
  );
}

export default Organisers;
