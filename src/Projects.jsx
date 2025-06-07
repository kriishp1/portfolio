import './Projects.css'
import { motion } from 'framer-motion';

function Projects() {
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.6 , ease: [0.42, 0, 1, 1] }}>
            <motion.div>
                <p className='projects'>Projects</p>
            </motion.div>


            <motion.div className='project-frame'>
                <img className="project-img" src='Example.PNG' alt="profile picture"></img>
                    <h2 className="project-title">Respondr</h2>
                    <p className='stack'>HTML, CSS, JavaScript</p>
                <p className="project-text">Respondr is an interactive web application that visualizes natural disasters on a map. 
                                            Designed for public awareness, research, and emergency preparedness, 
                                            it allows users to explore geospatial disaster data through a streamlined, responsive interface.
                </p>
                </motion.div>
        </motion.div>
        </>
    );
}

export default Projects;
