import React, { useEffect, useState } from "react";
import "./work.scss";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
const Work = () => {
  const [work, setWork] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchWorkData = async () => {
      let query;
      if (filter) {
        query = `*[_type == 'work' && category =='${filter}']`;
      } else {
        query = "*[_type == 'work']";
      }

      const Response = await client.fetch(query);
      setWork(Response);
    };
    fetchWorkData();
  }, [filter]);

  return (
    <div className="work" id="Work">
      <h1>
        My creative <span>Portfolio</span> Section
      </h1>
      <div className="btn">
        <button
          className={filter === "" ? "active" : ""}
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          className={filter === "full_stack" ? "active" : ""}
          onClick={() => setFilter("full_stack")}
        >
          Full Stack
        </button>
        <button
          className={filter === "frontend" ? "active" : ""}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={filter === "backend" ? "active" : ""}
          onClick={() => setFilter("backend")}
        >
          Backend
        </button>
      </div>
      <div className="project-box">
        {work.length === 0 ? (
      <h1 className="notfound">coming <span>soon</span> 😊</h1>
        ) : (
          work.map((workItem) => (
            <motion.div
              className="project"
              key={workItem._id}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.85, type: "tween" }}
            >
              <img src={urlFor(workItem.imgurl)} alt="" />
              <h3>{workItem.title}</h3>
              <p>{workItem.description}</p>
              <div className="project-icon">
                <a
                  href={workItem.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={workItem.web_app_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillEye />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Work;
