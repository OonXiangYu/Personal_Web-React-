import { Link } from "react-router-dom";
//image path
import home from "../assets/home.png";
import work from "../assets/work.png";
import education from "../assets/education.png";
import skill from "../assets/skill.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white">Oscar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/home">
                <img src={home} className="me-2" alt="Home" width="25" />
                <span className="fs-6 text-white">Home</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/work">
                <img src={work} className="me-2" alt="Work" width="25" />
                <span className="fs-6 text-white">Work</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/education">
                <img
                  src={education}
                  className="me-2"
                  alt="Education"
                  width="25"
                />
                <span className="fs-6 text-white">Education</span>
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/skill">
                <img src={skill} className="me-2" alt="Skill" width="25" />
                <span className="fs-6 text-white">Cert</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
