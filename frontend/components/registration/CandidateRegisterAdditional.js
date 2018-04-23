import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ProgressBarAdditional from './ProgressBarAdditional'
import Dropzone from 'react-dropzone'

class CandidateRegisterAdditional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github: '',
      linkedin: '',
      website: '',
      selfbio: '',
      selectedFile: null,
      files: ''
    }
  }

  onDrop = (file) => {
   this.setState({
     files: file
   }, () => console.log('this.state.files after setting state', this.state.files));
 }

  handleAdditionalChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }




render() {
  console.log('page load files', this.state.files)
  return (
    <div>
      <ProgressBarAdditional />
      Github URL: <input type="text" name="github" placeholder="Github URL" onChange={this.handleAdditionalChange} /> <br />
      Linkedin URL: <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={this.handleAdditionalChange} /> <br />
      Personal Website URL <input type="text" name="website" placeholder="Personal Website URL"  onChange={this.handleAdditionalChange} /> <br />
      Tell us about yourself: <textarea type="text" name="selfbio" onChange={this.handleAdditionalChange} defaultvalue= "Tell us about yourself" placeholder="Tell us about yourself"/> <br />
      <button> Upload Resume </button>
      <Link style={{float: 'left'}} to='/register/candidate/profile'> Back </Link>
      <Link style={{float: 'right'}} to=""> Done </Link>


        <div className="dropzone">
          <Dropzone onDrop={this.onDrop}>
            <div>
              <p>Drop or click to add a profile picture</p>
              {this.state.files.length === 0 ? '' :
              <img src={this.state.files[0].preview} style={{"height": "60px", "width": "50px", "margin": "5px", "border": "1px solid black"}} />}
            </div>
          </Dropzone>
        </div>
      </div>


  );
}
}

export default withRouter(CandidateRegisterAdditional);
