import React, { useEffect, useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import Loading from "../Loading/Loading";
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const query = '*[_type == "about"]';
        const response = await client.fetch(query);
        setAbouts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAbout();
  }, []);
  return (
    <div className="about" id="About">
      <h1 className="heading">
        i Know that <span>Good developer</span> <br /> means
        <span> Good Business</span>
      </h1>
      <div className="box">
        {abouts.length === 0 ? (
          <Loading />
        ) : (
          abouts.map((item) => (
            <motion.div
              key={item.title}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.85, type: "tween" }}
            >
              <img src={urlFor(item.imgUrl)} alt={item.img} />

              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
