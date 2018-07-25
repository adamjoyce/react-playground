import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  Panel,
  NavBar,
  NavItem,
  ColorPanel,
  ColorPanelWrapper
} from './style';

const NavLink = (props) => (
  <NavItem><Link {...props} style={{ color: 'inherit' }} /></NavItem>
);

const RGB = ({match}) => {
  const {params} = match;
  return (
    <ColorPanel
      style={{background: `rgb(${params.r}, ${params.g}, ${params.b})`}}>
      rgb({params.r}, {params.g}, {params.b})
    </ColorPanel>
  );
}

const HSL = ({match}) => {
  const {params} = match;
  return (
    <ColorPanel
      style={{background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`}}>
      hsl({params.h}, {params.s}%, {params.l}%)
    </ColorPanel>
  );
}

class RouterTransitions extends React.Component {
  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <React.Fragment>
            <Panel>
              <Route exact path="/" render={() => (
                <Redirect to="/hsl/10/90/50"/>
              )}/>

              <NavBar>
                <NavLink to="/hsl/10/90/50">Red</NavLink>
                <NavLink to="/hsl/120/100/40">Green</NavLink>
                <NavLink to="/rgb/33/150/243">Blue</NavLink>
                <NavLink to="/rgb/240/98/146">Pink</NavLink>
              </NavBar>
            </Panel>

            <ColorPanelWrapper>
              <TransitionGroup style={{height: `100%`}}>
                <CSSTransition key={location.key} timeout={1000} classNames='slide'>
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                    <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </ColorPanelWrapper>
          </React.Fragment>
        )} />
      </Router>
    );
  }
}

export default RouterTransitions;
