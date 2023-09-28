import React from "react";
import mailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/mobile.png";
import WhatsappIcon from "../../assets/what.png"
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <h1>
        Take coffee & <span>chat with me</span>
      </h1>
      <div className="contact">
        <div className="box">
          <img src={mailIcon} alt="" />
          <a href="mailto:alex20150001969@gmail.com">
            alex20150001969@gmail.com
          </a>
        </div>
        <div className="box">
          <img src={phoneIcon} alt="" />
          <a href="tel:+919667760692">+919667760692</a>
        </div>
        <div className="box">
          <img src={WhatsappIcon} alt="" />
          <a href="https://wa.me/9667760692" target="_blank"  rel="noopener noreferrer">Whatsapp</a>
        </div>
      </div>


    </div>
  );
};

export default Footer;
