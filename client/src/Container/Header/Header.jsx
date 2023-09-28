import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.png";
import Circle from "../../assets/circle.svg";
import ReactIcon from "../../assets/react.png";
import ReduxIcon from "../../assets/redux.png";
import SaasIcon from "../../assets/sass.png";
const Header = () => {
  const Icon = [ReactIcon, ReduxIcon, SaasIcon];
  return (
    <div className="header" id="home">
      <motion.div
        className="badge"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="badge-1">
          <span>👋</span>
          <div>
            <p>Hello, I am</p>
            <h1>Kamlesh</h1>
          </div>
        </div>
        <div className="badge-2">
          <p>Mern Stack Developer</p>{" "}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="profile"
      >
        <img src={Profile} alt="Profile_Image" />

        <motion.img
          src={Circle}
          alt="Circle"
          className="circle-image"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.img>
      </motion.div>

      <motion.div
        className="icons"
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {Icon.map((icon) => (
          <div className="icon-img" key={icon}>
            <img src={icon} alt="icon" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
