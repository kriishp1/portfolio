import './ProfilePicture.css'
import './navbar.css'
import { motion } from 'framer-motion';

function ProfilePicture() {
  return (
    <>
      <div className='navbar'>

        <motion.a className='nav-name' href='#profile-picture'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}>
          Kriish Patel
        </motion.a>

        <div className='nav-links'>
          <motion.a className='nav-about' href='#about'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.4}}>
            About
          </motion.a>

          <motion.a className='nav-portfolio' href='#projects'
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.4 }}>
            Projects
          </motion.a>
        </div>
      </div>

      <div className='nav-icons'>
        <a href="https://github.com/kriishp1"
          target='_blank'>
          <motion.img
            className='icon'
            src='github-img.png'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}>
          </motion.img>
        </a>

        <a
          href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BJTGRDJiBRHOIRYcOg4fwmw%3D%3D"
          target='_blank'>
          <motion.img
            className='icon'
            src='linkedIn-img.png'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}>
          </motion.img>   
        </a>
      </div>

      <motion.div
        className="profile-picture"
          initial={{ opacity: 0, x: 500  }}
          whileInView={{ opacity: 1 }}
          animate={{x:10}}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6}}
      >
        <img className="card" src="pfp.jpg" alt="Profile" />
      </motion.div>
    </>
  );
}

export default ProfilePicture;
