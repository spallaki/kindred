import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Message from './Message';
import OptionsRef from './authentication/OptionsRef';
import OptionsCand from './authentication/OptionsCand';

class MessageThread extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
      arrayMessages: [
        {
          name: 'Ana',
          value: 'Hi Joe, we are looking for a React developer. Would you be interested?',
        },
        {
          name: 'Joe',
          value: 'Hi Ana, yes I am. Could you give me more details about this job position?',
        },
      ],
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      arrayMessages: [...this.state.arrayMessages, {
        name: 'Ana',
        value: this.state.value,
      }],
    });
  }

  render() {
    console.log('this.props inside message thread', this.props);
    const newArrayMessages = this.state.arrayMessages.map(message =>
      (<Message name={message.name} value={message.value} key={message.name} />));
    if (this.props.loggedInCand || this.props.loggedInRef) {
      return (
        <div>
          { this.props.loggedInCand ?
            <OptionsCand
              loggedInCand={this.props.loggedInCand}
              logoutCand={this.props.logoutCand}
            /> :
            <OptionsRef
              loggedInRef={this.props.loggedInRef}
              logoutRef={this.props.logoutRef}
            />
          }
          {/*
            <OptionsCand loggedInCand={this.props.loggedInCand}
            logoutCand={this.props.logoutCand} />
          */}
          Test message. Here are your messages.
          {newArrayMessages}
          <br />
          <br />
          <form onSubmit={this.handleSubmit}>
            <textarea type="text" placeholder="Type your message here" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Send message" />
          </form>
        </div>
      );
    }
    return <div> You must be logged in to view messages. </div>;
  }
}

MessageThread.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(MessageThread);
