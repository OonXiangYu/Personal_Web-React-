//image path
import profilePic from "../assets/profile_pic.png";
import malaysia from "../assets/malaysia.png";
import ireland from "../assets/ireland.png";
import linkedIn from "../assets/linkedIn.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

function Home() {
  return (
    <div className="container mt-5">
      <div className="row mb-5"></div>
      <div className="row mt-5">
        <div className="col-8 text-left">
          <p className="fs-4 fw-bold font-serif text-warning">Hi Everyone</p>
          <br />
          <p className="fs-1 fw-bold text-white">I'm Oscar Oon,</p>
          <p className="fs-4 fw-bold font-serif text-white mb-5">
            Computer Science Student
          </p>
          <br />
          <br />
          <p className="text-warning fs-6 fw-bold">
            Nationality :
            <img src={malaysia} className="mx-5" alt="nationality" width="30" />
          </p>
          <p className="text-warning fs-6 fw-bold mt-4">BirthDate : 08/10/2004</p>
          <br />
          <br />
          <p className="text-white fs-6 fw-bold mt-4">Contact Me :</p>
          <div className="mt-4">
          <a href="https://www.linkedin.com/in/oscaroon/" target="_blank">
            <img src={linkedIn} className="me-5" alt="LinkedIn" width="30" />
          </a>
          <a href="https://github.com/OonXiangYu" target="_blank">
            <img src={github} className="mx-5" alt="Github" width="30" />
          </a>
          <a href="mailto:oscaroonjob@gmail.com" target="_blank">
            <img src={gmail} className="mx-5" alt="Gmail" width="30" />
          </a>
          </div>
          <br />
          <div className="mt-4">
            <img src={ireland} className="me-5" alt="Ireland" width="30" />
            <span className="text-white fs-6 fw-bold">353 083 076 6427</span>
          </div>
          <br />
          <div className="mt-4">
          <img src={malaysia} className="me-5" alt="malaysia" width="30" />
          <span className="text-white fs-6 fw-bold">6016-325-2636</span>
          </div>
        </div>
        <div className="col-4 text-center">
          <img
            src={profilePic}
            className="mt-5"
            alt="profile_picture"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
