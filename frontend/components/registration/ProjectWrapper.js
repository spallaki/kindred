import React from 'react';
import { withRouter } from 'react-router-dom'
import ProjectForm from './ProjectForm'
import AddProjectButton from './AddProjectButton'

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props);
  }



  render(){
    const { projectArr, addProject, removeProject, onChange, projectFormShown, toggleProjectForm, makeProjectEditable, addProjectCloseForm, addEditedProject } = this.props
    // projectArr.map((project, i) => console.log('project is', project, i))

    // const ProjectWrapper = ({ projectArr, addProject, removeProject, onChange, projectFormShown, toggleProjectForm}) => (
    return (
      <div style={{ border: '1px solid purple' }}>
        <h3>Projects</h3>
        {projectArr.length === 0 ? <p> Projects are a great way to show off your skills. Add your first project </p> : ''}
        <div>
          {projectArr.map((project, i) => {
            return (
              project.editable ?
              // <div>
              //   <div style={{ display: "flex", flexDirection: "column" }}>
              //   Title: <input type="text" name="title" value={project.title} onChange={this.handleInputChange} />
              //   Description: <input type="text" name="description" value={project.description} onChange={this.handleInputChange} />
              //   Start: <input type="text" name="projectstart" value={project.projectstart} onChange={this.handleInputChange} />
              // </div>
              <ProjectForm addEditedProject={addEditedProject} title={project.title} description={project.description} projectstart={project.projectstart} id={project.id} editable={true} addProjectCloseForm={addProjectCloseForm} editedVersion={true} positionArray={i}/>
              /* <button onClick={() => this.addProjectCloseForm(this.state.title, this.state.description, this.state.projectstart, this.state.editable)}> Save </button> */

             :
            <div style={{border: '1px solid green'}} key={project.id}>
              Title: {project.title} <br/>
              Description: {project.description} <br/>
              Start date: {project.projectstart}<br/>
              <button onClick={(e) => removeProject(project.id, e)}> Delete </button>
              <button onClick={(e) => makeProjectEditable(project.id, e)}> Edit </button>
            </div>
          )})}
        </div>
        {projectFormShown ? <div> <ProjectForm addProjectCloseForm = {addProjectCloseForm} />  </div> : <button onClick={toggleProjectForm}> Add a Project</button>}
      </div>
    )
  }
};

export default withRouter(ProjectWrapper);
