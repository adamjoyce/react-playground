import React from 'react';

import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';

import RouterTransitions from '../RouterTransitions';

class App extends React.Component {
  componentDidMount() {
    baseStyles(theme);
  }

  render() {
    return (
      <RouterTransitions />
    );
  }
}

export default App;
