import React, { useState } from 'react';
import About from './Components/About';
import Events from './Components/Events';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Head from './Components/Head';
import Prizes from './Components/Prizes';
import SideNav from './Components/SideNav';
import Sponsors from './Components/Sponsors';

function App(props) {
  return (
    <div>
      <SideNav></SideNav>
      <Head></Head>
      <About></About>
      {/* <Events></Events> */}
      {/* <Prizes></Prizes> */}
      <Sponsors></Sponsors>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;