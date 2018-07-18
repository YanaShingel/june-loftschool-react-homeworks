import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAutorized } from 'ducks/auth';

class PrivateRoute extends PureComponent {
  render() {
    const { component: Component, isAuthorized, path, exact } = this.props;
    return (
      <Route
        exact={exact}
        path={path}
        render={() => (isAuthorized ? <Component /> : <Redirect to="/login" />)}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAutorized(state)
});

export default connect(mapStateToProps)(PrivateRoute);
