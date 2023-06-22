import { NavLink } from 'react-router-dom';
import image from '../user.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="left">
        <h1 className="title">BookStore CMS</h1>
        <ul className="menu">
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/Category">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={image} alt="Avatar" className="avatar" />
      </div>
    </nav>
  </header>
);

export default Navbar;
