import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { BsLinkedin } from "react-icons/bs";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{ zIndex: "9988" }}>
          <h1 className={`${styles.heroHeadText} text-white `}>
                Hi, I'm <span className='text-[#915EFF]'>Bal Krishna Pandey</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
               I develop visuals user <br className='sm:block hidden' />
              interfaces and web applications
            <br/>
            <a href="https://www.instagram.com/balkrishnapandey_/"> <i className="instagram-icon fa fa-instagram m-2" aria-hidden="true" /></a>
            <a href="https://www.facebook.com/balkrishna.pandey.3591267/">     <i className="fa fa-facebook-official m-2" aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/balkrishnapandey/"> <i className="linkedin-icon fa fa-linkedin-square m-2" aria-hidden="true" /> </a>
            <a href="https://github.com/iBkrishna"><i className="github-icon fa fa-github-square m-2" aria-hidden="true" /></a>


          </p>
          <div className="update_btn">
            <a href="https://www.linkedin.com/in/balkrishnapandey/"><button className="w-20 h-10 bg-blue-300  m-5 br-10 rounded-lg hover:bg-violet-600">Hire Me</button></a>

            <button  onClick={() => window.location = 'mailto:balkrishnapandey21@gmail.com'} className="w-20 h-10 bg-blue-300  m-5 br-10 rounded-lg hover:bg-violet-600">Mail Us</button>
           
          </div>
          {/* <div className="social_media">
           <div><BsLinkedin/></div> 
          </div> */}
        </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
