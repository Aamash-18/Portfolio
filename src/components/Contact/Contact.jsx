import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gw3p42h",
        "template_1dgqi2o",
        form.current,
        "WFMtoI2NKWeDEIMEM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          document.querySelectorAll(".user").value="";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const myFunc=()=>{
    document.getElementsByName("user_name").value="";
    document.getElementsByName("user_email").value="";
    document.getElementsByName("message").value="";
    console.log("DONE")
  }
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="c-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <button type="submit" className="button" onClick={myFunc}>Send</button>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
