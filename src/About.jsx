import './About.css'
import { motion } from 'framer-motion'

function About({ heading, title, bio, location, email}) {
    return (

        <>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease:  [0.42, 0, 1, 1] }}
            viewport={{ margin: "-370px" }}>
            <motion.div className='description-container'>
                    <h1 className='heading'>{heading}</h1>
                    <h2 className='sub-heading'>{title}</h2>
                    <p className='description'>{bio}</p>
            </motion.div>
                
            <motion.div className='pic-container'>
                <img className='dog-pic' src='dog.jpg'></img>
                <img className='lego-pic' src='lego.jpg'></img>
                <img className='hiking-pic' src='hiking.jpg'></img>
                <p className='location'>Location: {location}</p>
                <p className='email'>Email: {email}</p>
            </motion.div>
        </motion.div>

        </>

    );
}

export default About;