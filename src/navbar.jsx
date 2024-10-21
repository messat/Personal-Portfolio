import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav>
        <Link to="/">Home</Link>

        <Link to="/bio">About Me</Link>

        <Link to="/portfolio">Portfolio</Link>

        <Link to="/certification">Certification</Link>

        <Link to="/blogs">Blogs</Link>

        <Link to="/tutorials">Tutorials</Link>

        <Link to="/contact">Contact</Link>
      </nav> 
  );
};

export default Navbar;
