import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-svg-spinner';
import {
  fetchFollowersRequest,
  getFollowersData,
  getFollowersIsFetching
} from '../../ducks/followers';

class Followers extends PureComponent {
  componentDidMount() {
    this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const { isFetching, ids } = this.props;
    debugger;
    if (isFetching) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }
    if (!isFetching && !ids.length) {
      return <div>Такой пользователь отсутствует</div>;
    }
    return (
      <ul>
        {ids.map((el, i) => (
          <li key={el.id}>
            <img
              className="follower-avatar"
              src={el.avatar_url}
              alt={el.login}
            />
            <Link to={`/users/${el.login}`}>{el.login}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: getFollowersIsFetching(state),
  ids: getFollowersData(state)
});

const mapDispatchToProps = { fetchFollowersRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
