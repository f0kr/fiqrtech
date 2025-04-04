import { useTranslations } from 'next-intl';
import LazyImage from './LazyImage'

export default function ProjectCard ({ project, openProjectModal }) {
  const t = useTranslations()
  return (
    <div
      className="project-card"
      data-category={project.category}
      onClick={() => openProjectModal(project)}
    >
      <div className="project-image-container">
        <LazyImage
          src={project.imageUrl}
          alt={`${project.title} project preview`}
          className="project-image-wrapper"
        />
        <div className="project-overlay">
          <div className="project-category">
            <span className={`category-badge ${project.category}`}>
              {t(project.categoryDisplay)}
            </span>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-meta">
          <span className="project-year">
            <svg viewBox="0 0 24 24" className="icon">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {project.year}
          </span>
          <span className="project-tech">{project.technologiesDisplay}</span>
        </div>
      </div>
    </div>
  );
};