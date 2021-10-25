import React, { useState } from "react";
import "./work.scss";
import worksData from "./worksData";
const Work = () => {
  const [slider, setSlider] = useState(0);

  const changeSlider = (event) => {
    event === "left"
      ? setSlider(slider > 0 ? slider - 1 : 2)
      : setSlider(slider < worksData.length - 1 ? slider + 1 : 0);
  };

  return (
    <>
      <div className="work" id="work">
        <div
          className="slider"
          style={{ transform: `translateX(-${slider * 100}vw)` }}
        >
          {worksData.map((dataFetch) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="lefContainer">
                    <div className="imgContainer">
                      <img src={dataFetch.icon} alt="" />
                    </div>
                    <h2>{dataFetch.title}</h2>
                    <p>{dataFetch.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>

                <div className="right">
                  <img
                    src="https://i.ytimg.com/vi/ytpvF0y9zI8/maxresdefault.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <img
          src="assets/arrow.png"
          alt=""
          className="arrow left"
          onClick={() => changeSlider("left")}
        />
        <img
          src="assets/arrow.png"
          alt=""
          className="arrow right"
          onClick={()=>changeSlider()}
        />
      </div>
    </>
  );
};

export default Work;
