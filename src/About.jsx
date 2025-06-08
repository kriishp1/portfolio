import './About.css'
import { motion } from 'framer-motion'

function About({ heading, title, bio, location, email}) {
    return (

        <>
        <motion.div
            initial={false}
            viewport={{ once: false }} 
            transition={{ duration: 0.8, ease: [0.42, 0, 1, 1] }}>
            <motion.div className='description-container'>
                    <h1 className='heading'>{heading}</h1>
                    <h2 className='sub-heading'>{title}</h2>
                    <p className='description'>{bio}</p>
            </motion.div>
                
            <motion.div className='pic-container'>
                <img className='dog-pic' src={`${import.meta.env.BASE_URL}dog.jpg`} />
                <img className='lego-pic' src={`${import.meta.env.BASE_URL}lego.jpg`} />
                <img className='hiking-pic' src={`${import.meta.env.BASE_URL}hiking.jpg`} />
                <p className='location'>Location: {location}</p>
                <p className='email'>Email: {email}</p>
            </motion.div>
        </motion.div>

        </>

    );
}

export default About;
