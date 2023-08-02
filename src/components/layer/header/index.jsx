import { Link } from 'react-router-dom';

import { AUTH, LOCATION } from 'constants/index';

import './header.css';

function Header(props) {
  return (
    <header className="App-header">
      <ul className="d-flex justify-content-between mx-auto">
        {
          AUTH.map((item, index) => <li key={index} className="mr-3"><Link to={item.path}>{item.title}</Link></li>)
        }
      </ul>
    </header>
  )
}

export default Header;