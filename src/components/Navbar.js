import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <h1 className="title">BookStore</h1>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Category">Category</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
