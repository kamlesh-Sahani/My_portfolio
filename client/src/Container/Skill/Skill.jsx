import React, { useEffect, useState } from "react";
import "./skill.scss";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
const Skill = () => {
  const [skill, setSkill] = useState([]);
  const [exp, setExp] = useState([]);
  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const query = '*[_type =="skill"]';
        const queryExp = '*[_type =="experience"]';
        const response = await client.fetch(query);
        const responseExp = await client.fetch(queryExp);
        setSkill(response);
        setExp(responseExp);
        
      } catch (error) {}
    };

    fetchSkill();
  }, []);

  return (
    <div className="skill" id="Skill">
      <h1>
        Skill & <span>Experiences</span>
      </h1>
      <div className="main">
        {skill.length === 0 ? (
          <h1 className="notfound">
            coming <span>soon</span> 😊
          </h1>
        ) : (
          <motion.div className="img-container"  >
            {skill.map((skill) => (
              <motion.div
                className="img-box"
                key={skill._id}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.75,ease:'easeInOut' }}
              >
                <div
                  className="img"
                  style={{ backgroundColor: `${skill.background_color}` }}
                >
                  <img src={urlFor(skill.imgurl)} alt="skill" />
                </div>
                <p>{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

{
  exp.length === 0 ? "" :  <div className="exp-container">
  {
   exp && exp.map((e, i) => (
    <div className="exp" key={i}>
      <h3 className="year">{e.year}</h3>

      <div className="box-container">
        {e.roles.map((r, j) => (
          <div className="box" key={j}>
            <h3>{r.role_name}</h3>
            <p>{r.company_name}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
}
      
      </div>
    </div>
  );
};

export default Skill;
