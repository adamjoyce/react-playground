import React from 'react';

import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';

class App extends React.Component {
  componentDidMount() {
    baseStyles(theme);
  }

  render() {
    return (
      <span style={{background: 'palevioletred'}}>Love ya React x</span>
    );
  }
}

export default App;
