import React from "react";
import "./testimonials.scss";
import data from './data';
const Testimonials = () => {
  return (
<>


    <div className="testimonials" id="testimonials">
   <h2>Testimonials</h2>
      <div className="container">
{data.map(dataFeatch=>(

        <div className={dataFeatch.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="userImg"
              src={dataFeatch.img}
              alt=""
            />
            <img src={dataFeatch.icon} alt="" className="right" />
          </div>

          <div className="center">{dataFeatch.desc}</div>
          <div className="bottom">
              <h3>{dataFeatch.name}</h3>
              <h4>{dataFeatch.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div> 
     </>
  );

};

export default Testimonials;
