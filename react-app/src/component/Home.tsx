//image path
import profilePic from "../assets/profile_pic.png";
import malaysia from "../assets/malaysia.png";
import ireland from "../assets/ireland.png";
import linkedIn from "../assets/linkedIn.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

import "./Home.css";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row mb-5"></div>
      <div className="row mt-5">
        <div className="col-8 text-left">
          <p className="fs-4 fw-bold font-monospace text-primary">
            Hi Everyone
            <span className="fs-4 fw-bold font-monospace text-warning">
              &#123;
            </span>
          </p>
          <br />
          <p className="fs-2 fw-bold font-monospace text-white">
            I'm
            <span className="fs-2 fw-bold font-monospace text-info mx-2">
              Oscar Oon
            </span>
            ,
          </p>
          <p className="fs-4 fw-bold font-monospace text-white mb-5">
            Computer Science Student
          </p>
          <br />
          <p className="text-warning fs-5 fw-bold font-monospace">
            I am an enthusiastic and curious computer science undergraduate with
            a passion for exploring new technologies and ideas.
            <br />
            Originally from
            <img src={malaysia} className="mx-3" alt="Malaysia" width="20" />, I
            am currently studying in
            <img src={ireland} className="mx-3" alt="Ireland" width="20" />,
            <br />
            eager to expand my knowledge and experience in the field.
          </p>
          <br />
          <span className="fs-4 fw-bold font-monospace text-warning">
            &#125;
          </span>
          <br />
          <br />
          <p className="fs-4 fw-bold font-monospace text-primary">
            Contact Me
            <span className="fs-4 fw-bold font-monospace text-warning">
              &#123;
            </span>
          </p>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/oscaroon/"
              target="_blank"
              className="image"
            >
              <img
                src={linkedIn}
                className="hover-image me-5"
                alt="LinkedIn"
                width="30"
              />
            </a>
            <a
              href="https://github.com/OonXiangYu"
              target="_blank"
              className="image"
            >
              <img
                src={github}
                className="hover-image mx-5"
                alt="Github"
                width="30"
              />
            </a>
            <a
              href="mailto:oscaroonjob@gmail.com"
              target="_blank"
              className="image"
            >
              <img
                src={gmail}
                className="hover-image mx-5"
                alt="Gmail"
                width="30"
              />
            </a>
          </div>
          <br />
          <span className="fs-4 fw-bold font-monospace text-warning">
              &#125;
          </span>
        </div>
        <div className="col-1 text-start">
          <div className="line" />
        </div>
        <div className="col-3 text-center mt-5">
          <img
            src={profilePic}
            className="ms-5 mt-5"
            alt="profile_picture"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
