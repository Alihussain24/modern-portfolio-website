import React, { useEffect, useRef } from "react";
import "./intor.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 2000,
      typeSpeed:  100,
      backSpeed: 80,
      showCursor: true,
      strings: ["HTML", "CSS", "JavaScript", "React", "Node"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
     
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Ali hussain</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#protfolio">
          <img className="arrow" src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="left">
        <div className="imgCls">
          <img
            src="assets/122570512_155717616235707_4740575384334848521_n-removebg-preview.png"
            alt=""
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
