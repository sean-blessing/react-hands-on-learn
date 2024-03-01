import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Saving Project: ', project);
  };

  return (
    <>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
