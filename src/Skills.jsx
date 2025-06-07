import './Skills.css'
import { motion } from 'framer-motion';

function Skills() {

    return (
    <>
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            viewport={{ once: false, amount: 0.6 }}>
            <h1 className='skills-heading'>Skills</h1>
            <div className="scroller">
                <ul className="skill-list scroller__inner">
                    <li>
                        <img className='html' src='html.png'></img>
                        <span>HTML</span>
                    </li>
                    <li>
                        <img className='css' src='css.png'></img>
                        <span>CSS</span>
                    </li>
                    <li>
                        <img className='js' src='js.png'></img>
                        <span>JS</span>
                    </li>
                    <li>
                        <img className='cpp' src='c++.png'></img>
                        <span>C++</span>
                    </li>
                    <li>
                        <img className='py' src='py.png'></img>
                        <span>Python</span>
                    </li>
                     <li>
                        <img className='react' src='react.png'></img>
                        <span>React</span>
                    </li>

                    <li>
                        <img className='html' src='html.png'></img>
                        <span>HTML</span>
                    </li>
                    <li>
                        <img className='css' src='css.png'></img>
                        <span>CSS</span>
                    </li>
                    <li>
                        <img className='js' src='js.png'></img>
                        <span>JS</span>
                    </li>
                    <li>
                        <img className='cpp' src='c++.png'></img>
                        <span>C++</span>
                    </li>
                    <li>
                        <img className='py' src='py.png'></img>
                        <span>Python</span>
                    </li>
                     <li>
                        <img className='react' src='react.png'></img>
                        <span>React</span>
                    </li>
                </ul>
            </div>
        </motion.div>
    </>
    );
}

export default Skills;