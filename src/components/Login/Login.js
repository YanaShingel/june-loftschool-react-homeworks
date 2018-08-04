import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authorize, logout, getIsAuthorized } from '../../ducks/auth';

class Login extends Component {
  state = {
    token: ''
  };

  handleChange = event => {
    this.setState({ token: event.target.value });
  };

  handleKeyPress = event => {
    const { authorize } = this.props;
    if (event.key === 'Enter') {
      authorize(this.state.token);
    }
  };

  render() {
    const { token } = this.state;
    const { isAuthorized } = this.props;
    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    }
    return (
      <div className="login-wrapper">
        <div className="login">
          <p>
            Получить токен нужно на своей странице github, перейдите по
            <a href="https://github.com/settings/tokens">адресу</a> и создайте
            себе токен. Запишите куда-нибудь токен, так как после создай доступ
            к нему будет только один раз.
          </p>
          <input
            className="input-login"
            placeholder="auth_token"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            value={token}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = {
  authorize,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
