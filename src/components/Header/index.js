import './index.css'
import {FaTwitter} from 'react-icons/fa'
const Header = () => (
  <nav className="nav-items">
    <div className="navbar">
      <h1 className="heading">
        LightShot
        <br />
        screen capture tool
      </h1>
      <select className="select">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <button className="button">Sign in</button>
      <div className="logo">
        <FaTwitter className="twitt" />
        <p className="text">f</p>
      </div>
      <button className="button">Download Lightshot for free</button>
    </div>
  </nav>
)

export default Header
