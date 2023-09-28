import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { TbMenu } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { client} from "../../client";

const Navbar = () => {
  const links = ["home", "About", "Work", "Skill", "Contact"];
  const [toggle, setToggle] = useState(false);
  const [resume, setResume] = useState([]);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchtResume = async () => {
      try {
        const query = `*[_type == "resume"]`;
        const response = await client.fetch(query);
        const ref = response[0].resume.asset._ref;
        const withOutfile = ref.replace('file-','');
         const finalLink = withOutfile.replace('-pdf','.pdf')
         setResume(finalLink);
      } catch (error) {
        console.log(error);
      }
    };

    fetchtResume();
  }, []);




  const downloadResume  = ()=>{
    const pdfUrl = `https://cdn.sanity.io/files/l1sjm9rs/pdataset/${resume}`; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; 
        link.download = 'resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  return (
    <div className="navbar">
      <h1 className="logo">Kamlesh</h1>
      <div className="links">
        <ul>
          {links.map((item) => (
            <a href={"#" + item} key={item}>
              <li key={item}>
                <div className="circle"></div>
                {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <button className="resume" onClick={()=>downloadResume()}>
        Resume <FiExternalLink />
      </button>

      <div className="toggle">
        <TbMenu onClick={toggleMenu} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="toggle-div"
          >
            <HiX onClick={toggleMenu} className="toggle-cross" />
            <ul>
              {links.map((item) => (
                <a href={"#" + item} key={item} onClick={toggleMenu} >
                  <li key={item}>{item}</li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
