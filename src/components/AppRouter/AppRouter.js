import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import { getIsAuthorized, logout } from '../../ducks/auth';
import { getIsNetworkErrorPresent, getIsError } from '../../ducks/network';
import { getIsFetching } from '../../ducks/users';

class AppRouter extends PureComponent {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const {
      isAuthorized,
      isError,
      errorNetworkMessage,
      isFetching
    } = this.props;

    return (
      <main>
        {isError ? (
          <p className="error-message">{errorNetworkMessage}</p>
        ) : null}
        {isAuthorized &&
          !isFetching && <button onClick={this.handleLogout}>Logout</button>}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isError: getIsError(state),
  errorNetworkMessage: getIsNetworkErrorPresent(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  logout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
