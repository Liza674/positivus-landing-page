// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './index.css';
import React from 'react';
import Header from './components/header';
import Hero from './components/heroSection';
import Services from './components/services';
import CaseStudies from './components/caseStudies';
import WorkingProcess from './components/workingProcess';
import Team from './components/team';
import Testimonials from './components/testimonials';
import ContactUs from './components/contactUs';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default App;
