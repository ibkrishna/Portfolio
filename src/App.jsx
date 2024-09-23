import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import SocialMedia from "./components/SocialMedia";
import { ImWhatsapp } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <SocialMedia/> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div className="quick-contact">
        <a href="tel:+919511469185" title="Call Us">
          <FiPhoneCall style={{ color: "#0079FF" }} />
        </a>
        <a href="https://wa.me/+919511469185" target="_blank" rel="noopener noreferrer" title="Whatsapp">
          <ImWhatsapp style={{ color: "#25d366" }} />
        </a>
      </div>





      </div>
    </BrowserRouter>



  );
}

export default App;
