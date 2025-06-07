import './App.css'
import ProfilePicture from './ProfilePicture'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Intro from './Intro'

function App() {

  return (
    <>
      <section id='profile-picture'>
      <ProfilePicture></ProfilePicture>
      <Intro
        msg="Hello World, I'm"
        name="Kriish"
        bio="Hi, I'm Kriish. I'm a second-year student at UIC studying computer science. 
              I found my joy for programming through Legos as a kid. 
              I've always liked building and figuring things out. 
              I enjoy creating things that people can actually use. 
              Feel free to reach out if you want to connect or talk about anything tech." 
        ></Intro>
      </section>
      
      <Skills></Skills>

      <section id='about'>
      <About
        heading="About me"
        title="Who am I?"
        bio="Outside of coding, I enjoy taking long walks, building Legos, hanging out with my dog, and getting outside to fish or hike. 
            I've made projects that use APIs to pull live data, handle user input, and create interactive features.
            I'm working toward becoming a full stack developer because I like building both the visual side and the behind-the-scenes logic.
            Thanks for stopping by my portfolio."
        location='Des Plaines, Illinois'
        email='kriishpatel27@gmail.com'>
        </About>
      </section>

      <section id='projects'>
        <Projects></Projects>
      </section>
    </>
  )
}

export default App
