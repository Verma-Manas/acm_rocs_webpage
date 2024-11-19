import React from 'react';

const WorkshopDetails = () => {
  return (
    <main className='homepage_structure'>
      <div className='homepage_text_structure'>
        <br /><br />
        <p className='homepage_text' style={{ fontSize: '2rem', textAlign: 'center', color: 'rgb(15, 0, 125)' }}>
          <strong>About the Workshop</strong>
        </p>
        <p className='homepage_text'>
          This workshop is jointly organized by ACM INDIA and MIET Jammu and aims to raise awareness about the research opportunities available in Computer Science. The event will feature talks from leading experts in various research domains, including Theoretical Computer Science, Computer Systems, Machine Learning, and other related areas of Computer Science.
        </p>
        <p className='homepage_text'>
          <strong>Important Details:</strong>
        </p>
        <p className='homepage_text'>Registration Deadline: 28th November 2024</p>
        <p className='homepage_text'>Venue: Auditorium, MIET Jammu</p>
        <p className='homepage_text'>Lunch and Snacks: Provided to all participants</p>
        <p className='homepage_text'>Certificate: Participants will receive a certificate at the end of the session</p>
        <p className='homepage_text'>Networking: Opportunity to interact with PhD students and faculty from MIET Jammu</p>
        <br />
        <p className='homepage_text' style={{ fontSize: '2rem', textAlign: 'center', color: 'rgb(15, 0, 125)' }}>
          <strong>About MIET Jammu</strong>
        </p>
        <p className='homepage_text'>
        Model Institute of Engineering and Technology (MIET Jammu) is a premier institution dedicated to providing high-quality education and research in the fields of engineering and technology. Established with the goal of creating a hub for academic excellence, MIET has proven to be responsive to the evolving needs of the industry and society. The Computer Science and Engineering department at MIET Jammu is renowned for its outstanding faculty, cutting-edge research, and commitment to fostering a dynamic learning environment.        </p>
        <br /><br />
      </div>
    </main>
  );
};

export default WorkshopDetails;
