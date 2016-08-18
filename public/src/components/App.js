import React, { Component } from 'react';
import Progress from "react-progress-2";
import "react-progress-2/main.css"

class App extends Component {
  componentWillMount() {

  }

  componentDidMount() {
    Progress.show();
    Progress.hide();
  }

  render() {
    return (
        <div>
          <Progress.Component />
          {this.props.children}
        </div>
    )
  }
}

export default App;