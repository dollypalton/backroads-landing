import logo from "../images/logo.svg";

import Sociallink from "./Sociallink";
import Pagelink from "./Pagelink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <Pagelink
          parentClass="nav-links"
          parentId="nav-links"
          childClass="nav-link"
        />

        <Sociallink parentClass="nav-icons" childClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
