import React from 'react';
import { useContext } from 'react'; // Added useContext import
import './Projects.css';
import { StoreContext } from '../../Context/StoreContext';


function Projects() {
  const { project,user_list } = useContext(StoreContext);
  return (
    <div className='projects'>
      <h2>Projects</h2>
      {project.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-info">
            <div className="projectlogo"><img src={project.proj_img} alt="" srcset="" /></div>
            <div className="project-title">{project.title}</div>
            <div className="project-meta">
              <span>{project.referenceno}</span>
              <span className="project-date">Created {project.dateofcreation}</span>
            </div>
            <div className={`project-difficulty ${project.difficulty_level.toLowerCase()}`}>
              {project.difficulty_level}
            </div>
          </div>
          <div className="line"></div>
          <div className="project-data">
            <div className="tasks">
              <h2>Project Data</h2>
              <div>All tasks</div>
              <div>34</div>
              <div>Active tasks</div>
              <div>13</div>
            </div>
            <div className="assignees">
              <div>Assignees</div>
              <div className="assignee-list">
                {user_list.slice(0, 3).map((user, idx) => (
                  <img key={idx} src={user.user_image} alt={user.user_name} className="assignee-image" />
                ))}
                {user_list.length > 3 && <span className="extra-count">+{user_list.length - 3}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
