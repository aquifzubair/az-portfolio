import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard; 