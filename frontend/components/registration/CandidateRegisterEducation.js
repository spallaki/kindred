import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ProgressBarEducation from './ProgressBarEducation';
import Container2 from '../Container2';
import Footer from '../Footer';
import Header from '../Header';

class CandidateRegisterEducation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      degree: '',
      school: '',
      graduation: '',
      major: '',
    };
  }

  handleEducationChange = (event) => {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  saveCandidateEducation = () => {
    let candidateObject = JSON.parse(localStorage.getItem('candidateObject'));
    candidateObject.basic.location = this.state.city;
    candidateObject.eduArr = [{
      school_name: this.state.school,
      degree: this.state.degree,
      major: this.state.major,
      graduation: this.state.graduation,
    }];
    console.log('candidate object here', candidateObject);

    const newCandidateObject = Object.assign({}, candidateObject);
    candidateObject = localStorage.setItem('candidateObject', JSON.stringify(newCandidateObject));
    this.props.history.push('/register/cand/profile');
  };


  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'));
    console.log('EDUCATION COMPONENT', this.props);
    console.log('candidate object inside education', candidateObject);
    return (
      <div className="maindiv2" style={{ backgroundColor: '#FAFAFA' }}>
        <Header />
        <Container2>
          <img
            src="/progressBar.svg"
            style={{
width: '566px', height: '75px', marginTop: '60px', marginBottom: '60px',
}}
          />
          <div className="thanksFor">
            <div className="thanksline1">Thanks for signing up. Let’s talk about your background.</div>
            <div className="thanksline2">We use this information to help match you with jobs matching your area of expertise.</div>
          </div>
          <div className="educationDiv1" >
            <img className="educationImg" src="/Graduate.svg" alt="" />
            <div className="educationDiv2">
              <div className="educaLableDiv">
                <div className="educationLabel">CURRENT CITY</div>
                <div className="educationLabel">HIGHEST LEVEL OF EDUCATION</div>
                <div className="educationLabel">INSTITUTION NAME</div>
                <div className="educationLabel">GPA</div>
                <div className="educationLabel2">FIELD OF STUDY</div>
              </div>
              <div className="educaInputDiv">
                <input className="educationInput" type="text" name="city" placeholder="Enter city" onChange={this.handleEducationChange} />
                <input className="educationInput" type="text" name="degree" placeholder="Enter degree" onChange={this.handleEducationChange} />
                <input className="educationInput" type="text" name="school" placeholder="Enter school" onChange={this.handleEducationChange} />
                <input className="educationInput" type="text" name="gpa" placeholder="Enter GPA" onChange={this.handleEducationChange} />
                <input className="educationInput2" type="text" name="major" placeholder="Enter major" onChange={this.handleEducationChange} />
              </div>
            </div>
          </div>
          <div className="nextButtonDiv">
            <a className="nextButton" href="/app/register/cand/profile" onClick={this.saveCandidateEducation}>  Next </a> {/* Ignore href lint err */}
          </div>
        </Container2>
        <Footer />
      </div>
    );
  }
}

CandidateRegisterEducation.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterEducation);
