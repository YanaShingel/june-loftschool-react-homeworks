import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import { getIsAutorized, logout } from '../../ducks/auth';
import { connect } from 'react-redux';

class AppRouter extends PureComponent {
  handleClick = () => {
    this.props.logout;
  }

  render() {
    const { isAutorized } = this.props;

    debugger
    return (
      <main>
        {isAutorized ? (<button onClick={this.handleClick}> Logout </button>) : null }
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/users/me" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isAutorized: getIsAutorized(state)
})

const mapDispatchToProps = {
  logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
