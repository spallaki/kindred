import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import RegisterBoth from '../../components/registration/RegisterBoth';
import CandidateRegisterEducation from '../../components/registration/CandidateRegisterEducation';
import CandidateProfileContainer from './CandidateProfileContainer';
import CandidateRegisterAdditional from '../../components/registration/CandidateRegisterAdditional';
import PrivateRouteCand from '../../components/authentication/PrivateRouteCand';
import Pending from '../../components/Pending';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('REGISTER CONTAINER', this.props);
    return (
      <div>
        <Route
          exact
          path="/register"
          render={props => (<RegisterBoth
            loggedInCand={this.props.loggedInCand}
            loggedInRef={this.props.loggedInRef}
            registerRef={this.props.registerRef}
            registerCand={this.props.registerCand}
            tempLogin={this.props.tempLogin}
            loggedInTemp={this.props.loggedInTemp}
          />)}
        />

        <Route
          exact
          path="/register/cand/education"
          render={props => (<CandidateRegisterEducation
            loggedInTemp={this.props.loggedInTemp}
            loggedInCand={this.props.loggedInCand}
            registerCand={this.props.registerCand}
          />)}
        />

        <Route
          exact
          path="/register/cand/profile"
          render={props => (<CandidateProfileContainer
            loggedInTemp={this.props.loggedInTemp}
            loggedInCand={this.props.loggedInCand}
            registerCand={this.props.registerCand}
          />)}
        />

        <Route
          exact
          path="/register/cand/additional"
          render={props => (<CandidateRegisterAdditional
            loggedInTemp={this.props.loggedInTemp}
            loggedInCand={this.props.loggedInCand}
            registerCand={this.props.registerCand}
          />)}
        />

        <PrivateRouteCand
          exact
          path="/register/cand/pending"
          component={Pending}
          loggedInCand={this.props.loggedInCand}
          loggedInTemp={this.props.loggedInTemp}
          registerCand={this.props.registerCand}
        />
      </div>
    );
  }
}

RegisterContainer.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  registerRef: PropTypes.func.isRequired,
  registerCand: PropTypes.func.isRequired,
  loginRef: PropTypes.func.isRequired,
};

export default withRouter(RegisterContainer);
