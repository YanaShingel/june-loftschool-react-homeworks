import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { autorize, logout, getIsAutorized } from '../../ducks/auth';

class Login extends PureComponent {
  state = {
    login: ''
  };

  handleChange = event => {
    this.setState({ login: event.target.value });
  };

  handleKeyPress = event => {
    const { autorize } = this.props;
    if (event.key === 'Enter') {
      autorize(this.state.loginInput);
    }
  };

  render() {
    const { isAuthorized } = this.props;
    debugger
    if (isAuthorized) {
      return <Redirect to='/users/me'/>
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
            value={this.state.loginInput}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAutorized(state)
})

const mapDispatchToProps = {
  autorize,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
