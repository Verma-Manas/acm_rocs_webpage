import React from 'react';


function Speak() {
  return (
    <section id='speakers' className="speaker" style={{backgroundColor:"rgb(15, 0, 125)"}}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}><strong>Speakers</strong></h1>

      <section className="speaker-grid">
        <section className="speaker-item">
          <img src="https://iitjammu.ac.in/faculty/documents/images/1673249931167.jpeg" alt="Speaker 1" />
          <p>Dr. Samaresh Bera</p>
          <p>Assistant Professor</p>
          <p>IIT Jammu</p>
        </section>
        <section className="speaker-item">
          <img src="https://www.iiitd.ac.in/sites/default/files/arunb.jpg" alt="Speaker 2" />
          <p>Dr. Arun Balaji Buduru</p>
          <p>Associate Professor (CSE, HCD)</p>
          <p>IIIT Delhi</p>
        </section>
        <section className="speaker-item">
          <img src="https://www.iiitd.ac.in/sites/default/files/rajiv_0.jpg" alt="Speaker 3" />
          <p>Dr. Rajiv Raman</p>
          <p>Associate Professor (CSE, Math)</p>
          <p>IIIT Hyderabad</p>
        </section>
        <section className="speaker-item">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQFxozsUtOOCSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517743945396?e=1736985600&v=beta&t=Ta-tmSGHQ4XhTlWk4njEvVTpVbln8VHeKXuTDIm1sE8" alt="Speaker 4" />
          <p>Dr. Sourangshu Bhattacharya</p>
          <p>Associate Professor (CSE)</p>
          <p>IIT Kharagpur</p>
        </section>
      </section>
    </section>
  );
}

export default Speak;
