import React, { useState } from "react";
import "./contact.scss";
const Contact = () => {
const [massage, setMassage] = useState(false);



const clickSubmit = (e) =>{
    e.preventDefault();
    setMassage(true);
}

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onClick={clickSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {massage && <span>Message Send</span>}
        </form>
      </div>
    </div>
  );
};
export default Contact;
