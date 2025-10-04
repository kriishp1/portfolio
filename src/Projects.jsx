import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ margin: "-200px", ease: [0.42, 0, 1, 1] }}
      >
        <motion.div>
          <p className="projects">Projects</p>
        </motion.div>

        <div className="projects-container">
          <motion.div className="project-frame">
            <img
              className="project-img"
              src="Example.PNG"
              alt="profile picture"
            ></img>
            <h2 className="project-title">Respondr</h2>
            <p className="stack">HTML, CSS, JavaScript</p>
            <p className="project-text">
              Respondr is an interactive web application that visualizes natural
              disasters on a map. Designed for public awareness, research, and
              emergency preparedness, it allows users to explore geospatial
              disaster data through a streamlined, responsive interface.
            </p>
          </motion.div>

          <motion.div className="project-frame">
            <img
              className="project-img"
              src="Capture.PNG"
              alt="profile picture"
            ></img>
            <h2 className="project-title">RoleRader</h2>
            <p className="stack">REST API, Express.js, Twilio</p>
            <p className="project-text">
              An Express.js application that scans 100+ internship postings,
              filters them by title and location, and sends real-time SMS alerts
              via Twilio. Automates the internship search process, helping users
              quickly find the most relevant opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
