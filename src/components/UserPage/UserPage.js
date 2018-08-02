import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserRequest, getIsFetching, getUserData } from 'ducks/users';
import Followers from '../Followers';
// import Followers from '../Followers';

class UserPage extends PureComponent {
  componentDidMount() {
    this.props.fetchUserRequest();
  }

  render() {
    let avatar_url, login, followers, public_repos;

    if (this.props.user.data) {
      // {avatar_url, login, followers, repos_url} = this.props.user.data;
      avatar_url = this.props.user.data.avatar_url;
      login = this.props.user.data.login;
      followers = this.props.user.data.followers;
      public_repos = this.props.user.data.public_repos;
    }
    debugger;

    return (
      <div className="user-page">
        <div className="user-logout">
          <button>Logout</button>
        </div>
        <div className="user-wrapper">
          <div className="user-info">
            <div className="user-avatar">
              <img className="user__image" src={avatar_url} alt={login} />
            </div>
            <div className="user-desription">
              <h3>{login}</h3>
              <p>Followers: {followers}</p>
              <p>Public repos: {public_repos}</p>
            </div>
          </div>
        </div>
        <Followers login={login} />
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
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
