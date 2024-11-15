import { Link } from "react-router-dom";
//image path
import home from "../assets/home.png";
import work from "../assets/work.png";
import education from "../assets/education.png";
import skill from "../assets/skill.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Oscar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/home">
                <img src={home} className="me-2" alt="Home" width="18" />
                Home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/work">
                <img src={work} className="me-2" alt="Work" width="18" /> Work
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/education">
                <img
                  src={education}
                  className="me-2"
                  alt="Education"
                  width="18"
                />
                Education
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/skill">
                <img src={skill} className="me-2" alt="Skill" width="18" />
                Skill
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
