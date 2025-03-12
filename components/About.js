import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-section "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content ">
        <img src="/photo.jpg" alt="Hedi Fourati" className="profile-pic" />
        <div className="bio">
          <p>
            <strong>Hedi Fourati - CEO of TunisianPass</strong>
          </p>
          <p>Born on 15/01/2007 in La Marsa, Tunisia</p>
          <p>
            My dream is to innovate beyond limits. I believe that the more I
            learn, the more I can create. My goal is to satisfy my curiosity
            through learning and to apply this knowledge to innovate in
            technology. "I have many passions, but my greatest is computing. I
            started coding at the age of 8, entirely self-taught, and I have
            never stopped since. I constantly work on new projects, feeding my
            insatiable curiosity and desire for innovation.
          </p>
          <p>Welcome to my portfolio!</p>
          <br />
          <a className="contact2-button" target="_blank" href="/resume.pdf">
            Open my resume
          </a>
          <br />
          <br />
          <br />

          <a className="contact-button" href="/#portfolio">
            Discover my projects
          </a>
          <br />
        </div>
      </div>
      <style jsx>{`
        .about-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #1a1a1a;
          color: #f0f0f0;
          margin: auto auto;
          text-align: center;
          items: center;
          justify-content: center;
          align-items: center;
          height: 100vh;


        }

        
        h1 {
          font-family: "Helvetica Neue", sans-serif;
          margin-bottom: 2rem;
          text-align: center;

        }
        .about-content {
          display: flex;
          text-align: center;

          flex-direction: column;
          align-items: center;
          height: 100vh;


        }
        .profile-pic {
            padding: 0.5rem;
            margin-top: 0.5rem;
            top: 5;
            padding-top: 0.5rem;
          width: 200px;
          height: 200px;
          rounded: 100px;
          border-radius: 100px;
          object-fit: cover;
          margin-bottom: 2rem;
        }
        .bio p {
            display:flex
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
          font-family: "Helvetica Neue", sans-serif;
          width: 50%;
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .contact-button {
            background: transparent;
            color: #f0f0f0;
            border: 2px solid #f0f0f0;
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            transition: background 0.3s ease, color 0.3s ease;
            font-family: "Helvetica Neue", sans-serif;
            font-size: 1rem;
          }
          .contact-button:hover {
            background: #f0f0f0;
            color: #1a1a1a;
          }

          .contact2-button {
            background: white;
            color: #1a1a1a;
            border: 2px solid #1a1a1a;
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            transition: background 0.3s ease, color 0.3s ease;
            font-family: "Helvetica Neue", sans-serif;
            font-size: 1rem;
          }
          .contact2-button:hover {
            background: transparent;
            color: #f0f0f0;
          }
      `}</style>
    </motion.div>
  );
};

export default About;
