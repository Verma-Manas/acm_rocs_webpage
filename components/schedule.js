// import React from 'react';

// const Schedule = () => {
//   const leftColumn = [
//     "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12"
//   ];
//   const middleColumn = [
//     "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20", "Item 21", "Item 22", "Item 23", "Item 24"
//   ];
//   const rightColumn = [
//     "Item 25", "Item 26", "Item 27", "Item 28", "Item 29", "Item 30", "Item 31", "Item 32", "Item 33", "Item 34", "Item 35", "Item 36"
//   ];

//   return (
//     <main id='schedule' className="schedule-main" >
//       <h2 className="schedule-heading">Schedule</h2>
      
//       <div className="grid-container">
//         <div className="grid-column left-column">
//           {leftColumn.map((item, index) => (
//             <div key={index} className="grid-item">{item}</div>
//           ))}
//         </div>
        
//         <div className="grid-column middle-column">
//           {middleColumn.map((item, index) => (
//             <div key={index} className="grid-item">{item}</div>
//           ))}
//         </div>

//         <div className="grid-column right-column">
//           {rightColumn.map((item, index) => (
//             <div key={index} className="grid-item">{item}</div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Schedule;

import React from 'react';

const Schedule = () => {
  return (
    <main id="location-embed" className="location-embed-container">
      <hr/>
      <br/><br/>
      <div className="venue-container">
      <h2>Venue</h2>
      <h3>Auditorium, MIET Kot Bhalwal, Jammu, Jammu and Kashmir 181122</h3>
    </div><br/><br/>
      <h3>Our Location</h3>

      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.428151746225!2d74.8165221!3d32.8122676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e87ad2533b009%3A0x77069456c55e9f86!2sModel+Institute+of+Engineering+and+Technology+(MIET)%2C+Jammu!5e0!3m2!1sen!2sin!4v1698637423384!5m2!1sen!2sin"
          title="Model Institute of Engineering and Technology"
          width="80%"
          height="500px"
          style={{border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
};

export default Schedule;
