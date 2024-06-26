import React, { useRef } from "react";
import "./About.css";
import { motion, useInView, useAnimation } from "framer-motion";
import nipun from "../../assets/nipun.jpg";
import anagha from "../../assets/anagha.png";
import garg from "../../assets/garg.jpeg";
import agarwal from "../../assets/agarwal.jpg1.jpg";
const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0.5, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      <h1 className="heading">Our Team</h1>
      <p className="description">
        Meet our dynamic web development team, a synergy of innovation,
        expertise, and outstanding customer service.
      </p>
      <div className="team-container">
        <div className="member">
          <img src={nipun} alt="" />
          <h2>Nipun S Nair</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src={anagha} alt="" />
          <h2>Anagha R Warrier</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src={garg} alt="" />
          <h2>Aditya Garg</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src={agarwal} alt="" />
          <h2>Aditya Agarwal</h2>
          <h3>Web Developer</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
