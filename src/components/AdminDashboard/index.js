import './index.css'
import Header from '../Header'
import UserForm from '../UserForm'
import {Component} from 'react'
class AdminDashboard extends Component {
  state = {username: '', password: ''}
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onLoginForm = event => {
    event.preventDefault()
  }
  renderForm = () => {
    const {username, password} = this.state
    return (
      <div className="card">
        <form className="forms" onSubmit={this.onLoginForm}>
          <h1 className="heading">Admin Login</h1>
          <label className="label" htmlFor="user">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            id="user"
          />
          <label className="label" htmlFor="pass">
            Password:
          </label>
          <input
            type="text"
            value={password}
            onChange={this.onChangePassword}
            id="pass"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
  render() {
    return (
      <div className="form">
        <Header />
        <UserForm />
        {this.renderForm()}
      </div>
    )
  }
}

export default AdminDashboard
