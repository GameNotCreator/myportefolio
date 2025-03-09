import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact</h1>
      <center>
        <i>
        If you want to get in touch with me, feel free to contact me on LinkedIn, or use my personal contacts
        </i>
      </center>
      <br />
        <center>
            Mail : {" "}
            
            <a href="mailto:hedi_fourati@icloud.com">hedi_fourati@icloud.com</a>
            <br/>
            <br/>
            Phone : {" "}
            <a href="tel:+21628655624">+216 28 655 624</a>
            <br/>
            <br/>

        </center>
      <div className="button-group">
        <button
          className="contact-button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/hedi-fourati-816304218",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          LinkedIn
        </button>
        <button
          className="contact-button"
          onClick={() =>
            window.open(
              "https://github.com/GameNotCreator",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          GitHub
        </button>
      </div>
      <style jsx>{`
        .contact-section {
          align-items: center;
          padding: 5rem 2rem;
          background: #1a1a1a;
          color: #f0f0f0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-family: "Helvetica Neue", sans-serif;
          margin-bottom: 2rem;
          text-align: center
        }
        .button-group {
          justify-content: center;

          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
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
          text-transform: uppercase;
        }
        .contact-button:hover {
          background: #f0f0f0;
          color: #1a1a1a;
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;
