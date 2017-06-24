import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { pinkA200 as hotPink } from 'material-ui/styles/colors.js';

import { LoadingSpinner } from './components/';

const homeIcon = (
  <IconButton
    iconStyle={{ height: 36, width: 36, fontSize: 35 }}
    style={{ height: 72, width: 72, padding: 16 }}
  >
    <FontIcon
      color="black"
      className="material-icons">
      home
    </FontIcon>
  </IconButton>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar iconElementLeft={homeIcon} style={{ backgroundColor: hotPink }}/>
          {this.state.isLoading ? <LoadingSpinner /> : <h2>Hello World</h2>}
        </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
