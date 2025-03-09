import { motion } from "framer-motion";

const projects = [
  {
    title: "Forbes Ranking",
    image: "/4.png",
    links: [{ label: "Visit Site", url: "https://forbes-ranking.vercel.app/" }],
    technologies: "HTML, JS, CSS",
    description: `During the 2022 school year, I was challenged to create a website that was both informative and visually engaging.
      I dedicated countless hours to research, design, and coding. This project not only demonstrates my technical skills 
      but also my commitment to delivering high-quality work by integrating dynamic interactive components that reflect real-world financial data.`,
  },
  {
    title: "Engineering Club Website",
    image: "/2.jpg",
    links: [{ label: "Visit Site", url: "https://clubinge-lgf.vercel.app/" }],
    technologies: "HTML, JS, CSS",
    description: `This project represents my passion for engineering and leadership. I built the website for my high school engineering club 
      with an emphasis on responsiveness and modern design. I managed tight deadlines and collaborated with team members to implement features 
      that highlighted our achievements and ambitions, showcasing my persistent work ethic and attention to detail.`,
  },
  {
    title: "Family Businesses Websites",
    image: "/7.png",
    links: [
      { label: "Lili Land", url: "https://lililand.tn/" },
      { label: "CleanAir", url: "https://clean-air.vercel.app/" },
    ],
    technologies: "HTML, JS, CSS / NextJS",
    description: `Working on these websites for my parents’ businesses was both a personal and professional challenge. 
      I carefully balanced aesthetic design with functional elements to deliver two distinct sites: one for an amusement park and one for an air purification company. 
      My relentless effort and commitment ensured that both projects met high-quality standards while remaining fully responsive and user-friendly.`,
  },
  {
    title: "Restaurant Websites",
    image: "/3.JPG",
    links: [
      { label: "Le Fumoir", url: "https://lefumoir.github.io" },
      { label: "Kenko", url: "https://kenkofoodbar.github.io/" },
    ],
    technologies: "HTML, JS, CSS",
    description: `In June 2023, I collaborated with a friend to develop websites for local restaurants. 
      This project required intensive coordination, creativity, and a deep understanding of each brand's identity. 
      My dedication to ensuring a seamless user experience is evident in the attention given to responsive design and interactive features that significantly enhance online presence.`,
  },
  {
    title: "Medianet Internship Project",
    image: "/1.jpg",
    links: [
      { label: "Visit Site", url: "https://front-prod-jade.vercel.app/" },
    ],
    technologies: "NextJS, Tailwind, MongoDB",
    description: `During my internship at Medianet, I took part in a collaborative project aimed at developing an on-demand local service platform.
      I contributed extensively to both front-end and back-end development, optimizing performance and ensuring the application was both robust and user-friendly.
      This project is a testament to my perseverance, technical proficiency, and ability to work effectively within a team under pressure.`,
  },
  {
    title: "Association Website",
    image: "/5.png",
    links: [
      {
        label: "Visit Site",
        url: "https://interact-club-marsa-mind.vercel.app/",
      },
    ],
    technologies: "NextJS, Tailwind",
    description: `Between December 2023 and July 2024, I led the redesign of an association’s website to better communicate its mission and activities.
      I integrated dynamic content, responsive layouts, and interactive elements to create an engaging user experience.
      This project highlights my commitment to excellence and my ability to drive impactful digital transformations through hard work and innovation.`,
  },
  {
    title: "TunisianPass",
    image: "/6.png",
    links: [{ label: "Visit Site", url: "https://tunisian-pass.tn" }],
    technologies: "NextJS, Tailwind, MongoDB",
    description: `In June 2024, I co-founded TunisianPass, a startup aimed at solving online visibility challenges for businesses in Tunisia.
      I meticulously developed the platform, ensuring every feature was optimized for performance and user engagement.
      This project reflects my entrepreneurial spirit, unwavering dedication, and the ability to translate hard work into measurable success, with a significant impact in just a few months.`,
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="portfolio-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <div className="button-group">
                {project.links &&
                  project.links.map((link, i) => (
                    <button
                      key={i}
                      className="link-button"
                      onClick={() =>
                        window.open(link.url, "_blank", "noopener,noreferrer")
                      }
                    >
                      {link.label}
                    </button>
                  ))}
              </div>
              <p>
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .portfolio-section {
          padding: 5rem 2rem;
          background: #2a2a2a;
          color: #f0f0f0;
          min-height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          font-family: "Helvetica Neue", sans-serif;
          margin-bottom: 2rem;
          text-align: center;
        }
        .projects {
          display: grid;
          padding: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          background: #1a1a1a;
          padding: 1.5rem;
          border: 2px solid #333;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          text-align: left;
        }
        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 1rem;
        }
        .project-info h2 {
          font-family: "Helvetica Neue", sans-serif;
          margin-bottom: 0.5rem;
        }
        .button-group {
          margin-bottom: 1rem;
        }
        .link-button {
          background: transparent;
          color: #f0f0f0;
          border: 2px solid #f0f0f0;
          padding: 0.5rem 1rem;
          cursor: pointer;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          transition: background 0.3s ease, color 0.3s ease;
          font-family: "Helvetica Neue", sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
        .link-button:hover {
          background: #f0f0f0;
          color: #1a1a1a;
        }
        .project-info p {
          margin: 0.5rem 0;
          font-family: "Helvetica Neue", sans-serif;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .projects {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Portfolio;
