import React, { useState, useEffect } from 'react';
import { fetchRepositories } from '../githubService';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRepositories() {
      try {
        const repos = await fetchRepositories();
        setRepositories(repos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getRepositories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {repositories.map(repo => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="project-details">
              <p><strong>Language:</strong> {repo.language}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
