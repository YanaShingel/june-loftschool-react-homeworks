import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from 'ducks/users';
import Followers from '../Followers';
import { getIsFetching, getUserData } from '../../ducks/users';

class UserPage extends PureComponent {
  render() {
    let qwe = this.props;
    debugger;
    return (
      <div className="user-page">
        <div className="user">
          <div className="user-avatar" />
          <div className="user-desription" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetched: getIsFetching(state),
  user: getUserData(state)
});

const mapDispatchToProps = {
  fetchUserRequest
};

export default withRouter(
  connect(
    mapDispatchToProps,
    mapStateToProps
  )(UserPage)
);
