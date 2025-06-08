import './Intro.css'
import { motion } from 'framer-motion';

function Intro({msg, name, bio}) {

    return (
        <>
            <motion.div className='about-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}>
            <motion.div className='container-about-me-msg'
                initial={{y: -2400, }}
                animate={{y: 4, }}
                transition={{ duration: 0.8, ease: "easeIn", type: "spring", stiffness: 20 }}>
                    <p className='about-me-msg'>{msg}</p>
            </motion.div>

            <motion.div className='container-about-me-name'
                initial={{  y: 60, opacity: 0 }}
                animate={{  y: 100, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}>
                    <h1 className='about-me-name'>{name}</h1>
            </motion.div>

            <motion.div className='container-about-me-bio'
                initial={{  x: -200, opacity: 0 }}
                animate={{  x: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}>
                    <p className='about-me-bio'>{bio}</p>
                    
                </motion.div>
            </motion.div>
        </>


    );
}
export default Intro;