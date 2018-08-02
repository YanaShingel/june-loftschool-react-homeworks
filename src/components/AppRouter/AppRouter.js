import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import { getIsAuthorized, logout } from '../../ducks/auth';
import { getNetworkErrorMessage, getIsError } from '../../ducks/network';

class AppRouter extends PureComponent {
  // handleClick = () => {
  //   this.props.logout();
  // };
  componentDidMount() {
    // clearTokenApi();
  }

  render() {
    const { isAuthorized, isError, errorNetworkMessage } = this.props;

    return (
      <main>
        {isError ? (
          <p className="error-message">{errorNetworkMessage}</p>
        ) : null}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  isError: getIsError(state),
  errorNetworkMessage: getNetworkErrorMessage(state)
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
