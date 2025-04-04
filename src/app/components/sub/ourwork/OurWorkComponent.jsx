"use client"

import React, { useState, useEffect, useRef } from "react";
import { Link } from '../../../../i18n/navigation';
import Image from "next/image";
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import "../../../../../styles/ourwork.css";
import { categories, projects } from "../../../../../projectData";
import { useTranslations } from "next-intl";

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const t = useTranslations()
  return (
    <section className="filters-container">
      <div className="filters">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          {t('All Projects')}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {t(category.label)}
          </button>
        ))}
      </div>
    </section>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const t = useTranslations()
  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={stopPropagation}>
        <div className="modal-header">
          <Image
            src={project.imageUrl}
            alt={`${project.title} detailed view`}
            className="modal-image"
            fill
          />
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-badges">
            <span className={`category-badge ${project.category}`}>
              {t(project.categoryDisplay)}
            </span>
            <span className="year-badge">
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {project.year}
            </span>
          </div>

          <h2 className="modal-title">{project.title}</h2>

          <p className="modal-description">{project.fullDescription}</p>

          <div className="modal-sections">
            <div className="modal-section">
              <h3 className="section-title">Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <svg viewBox="0 0 24 24" className="feature-icon">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="modal-gallery">
              <h3 className="section-title">Project Gallery</h3>
              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="gallery-img"
                    fill
                  />
                ))}
              </div>
            </div>
          )}

          {project.testimonial && (
            <div className="testimonial">
              <div className="testimonial-quote">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" className="quote-svg">
                    <path d="M10 11L2 11 2 17.2C2 19.7 4.3 22 6.8 22L6.8 22C9.3 22 11.6 19.7 11.6 17.2L11.6 15C11.6 12.2 9.3 9.9 6.5 9.9L6.5 9.9C6.4 9.9 6.1 9.9 6 9.9 7.6 6.6 10.1 4.4 13.3 3L13.3 3 11.1 0C6.1 2.1 2.1 6.2 2 11.1L10 11ZM22 11L14 11 14 17.2C14 19.7 16.3 22 18.8 22L18.8 22C21.3 22 23.6 19.7 23.6 17.2L23.6 15C23.6 12.2 21.3 9.9 18.5 9.9L18.5 9.9C18.4 9.9 18.1 9.9 18 9.9 19.6 6.6 22.1 4.4 25.3 3L25.3 3 23.1 0C18.1 2.1 14.1 6.2 14 11.1L22 11Z"></path>
                  </svg>
                </div>
                <p className="quote-text">{project.testimonial.quote}</p>
                <div className="quote-author">
                  <div className="author-avatar">
                    <Image
                      src={project.testimonial.avatarUrl}
                      alt={project.testimonial.author}
                      fill
                    />
                  </div>
                  <div className="author-info">
                    <p className="author-name">{project.testimonial.author}</p>
                    <p className="author-position">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="modal-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                View Live Demo
                <svg viewBox="0 0 24 24" className="btn-icon">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            )}

            <div className="social-links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub repository"
                >
                  <svg viewBox="0 0 24 24" className="social-icon">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              )}
              <Link href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function OurWorkComponent (){
  const t = useTranslations()
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  // Handle escape key press to close modal
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeProjectModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="our-work-page">
      <main className="main-content">
        {/* Page Header */}
        <section className="page-header">
          <h1 className="page-title">{t('Our Work')}</h1>
          <p className="page-description">
            {t('discover')}
          </p>
        </section>

        {/* Project Filters */}
        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Project Grid */}
        <section className="projects-container">
          <div className="projects-grid">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openProjectModal={openProjectModal}
              />
            ))}
          </div>

          {hasMoreProjects && (
            <div className="load-more">
              <button className="load-more-btn" onClick={loadMoreProjects}>
                {t('Load More Projects')}
                <svg className="load-more-icon" viewBox="0 0 24 24">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </section>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      )}
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};


