import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{
 width: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column',
}}
      >
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Container);
