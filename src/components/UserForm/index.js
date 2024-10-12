import './index.css'
import {Component} from 'react'
class UserForm extends Component {
  state = {name: '', socialMedia: '', images: ''}
  onChangeName = event => {
    this.setState({name: event.target.value})
  }
  onChangeMedia = event => {
    this.setState({socialMedia: event.target.value})
  }
  onChangeImage = event => {
    this.setState({images: event.target.value})
  }
  onSubmitForm = event => {
    event.preventDefault()
  }
  renderForm = () => {
    const {name, socialMedia, images} = this.state
    return (
      <div className="card">
        <form className="forms" onSubmit={this.onSubmitForm}>
          <h1 className="heading">User Submission Form</h1>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={this.onChangeName}
            id="name"
          />
          <label className="label" htmlFor="social">
            Social Media Handle:
          </label>
          <input
            type="text"
            value={socialMedia}
            onChange={this.onChangeMedia}
            id="social"
          />
          <label className="label" htmlFor="image">
            Upload Images:
          </label>
          <input
            type="file"
            value={images}
            onChange={this.onChangeImage}
            id="image"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
  render() {
    return <div className="form">{this.renderForm()}</div>
  }
}

export default UserForm
