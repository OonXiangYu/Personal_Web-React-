import { useState } from "react";
//image path
import intern from "../assets/SE_intern.png";
import ps from "../assets/problemSolving.png";
import sql_basic from "../assets/SQL_Basic.png";
import sql_int from "../assets/SQL_intermediate.png";
import wellsFargo from "../assets/wellFargo.png";
import graduate from "../assets/graduate.png";
import softSkill from "../assets/softskill.png";

//icon for button
import hackerRank from "../assets/hackerRank.jpg";
import forage from "../assets/forage.jpg";
import tarumt from "../assets/tarumt.png";

function Skill() {
  //default content
  const defaultHackerRank = (
    <>
      <div className="mb-5">
        <span className="fw-bold fs-2 text-warning">
          Software Engineer Internship Certification
        </span>
        <br />
        <div className="row mt-4">
          <div className="col-7">
            <img src={intern} alt="SE_intern" width={500} />
          </div>
          <div className="col-5">
            <p className="fw-bold fs-4 text-warning mt-4">Skill Involved :</p>
            <p className="fw-bold fs-5 text-white mb-5">
              Java <br /> Problem Solving <br /> SQL
            </p>
            <br />
            <p className="mt-5">
              <a
                href="https://www.hackerrank.com/certificates/iframe/26879a0c19cd"
                target="_blank"
                className="fs-5 fw-bold"
              >
                My Certification
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <span className="fw-bold fs-2 text-warning">
          Basic Problem Solving Certification
        </span>
        <br />
        <div className="row mt-4">
          <div className="col-7">
            <img src={ps} alt="Problem Solving" width={500} />
          </div>
          <div className="col-5">
            <p className="fw-bold fs-4 text-warning mt-4">Skill Involved :</p>
            <p className="fw-bold fs-5 text-white mb-5">
              Java <br /> Problem Solving <br />
              <br />
            </p>
            <br />
            <p className="mt-5">
              <a
                href="https://www.hackerrank.com/certificates/iframe/2fbe29f7cbb9"
                target="_blank"
                className="fs-5 fw-bold"
              >
                My Certification
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <span className="fw-bold fs-2 text-warning">
          Intermediate SQL Certification
        </span>
        <br />
        <div className="row mt-4">
          <div className="col-7">
            <img src={sql_int} alt="SQL_Intermediate" width={500} />
          </div>
          <div className="col-5">
            <p className="fw-bold fs-4 text-warning mt-4">Skill Involved :</p>
            <p className="fw-bold fs-5 text-white mb-5">
              SQL <br />
              <br />
              <br />
              <br />
            </p>
            <br />
            <p className="mt-5">
              <a
                href="https://www.hackerrank.com/certificates/iframe/b5ebcd9272f7"
                target="_blank"
                className="fs-5 fw-bold"
              >
                My Certification
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5">
        <span className="fw-bold fs-2 text-warning">
          Basic SQL Certification
        </span>
        <br />
        <div className="row mt-4">
          <div className="col-7">
            <img src={sql_basic} alt="SQL_Basic" width={500} />
          </div>
          <div className="col-5">
            <p className="fw-bold fs-4 text-warning mt-4">Skill Involved :</p>
            <p className="fw-bold fs-5 text-white mb-5">
              SQL <br />
              <br />
              <br />
              <br />
            </p>
            <br />
            <p className="mt-5">
              <a
                href="https://www.hackerrank.com/certificates/iframe/ce58cc104b48"
                target="_blank"
                className="fs-5 fw-bold"
              >
                My Certification
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );

  const [content, setContent] = useState<JSX.Element | null>(
    <>{defaultHackerRank}</>
  );

  const handleButtonClick = (buttonType: string) => {
    if (buttonType === "hackerRank") {
      setContent(<>{defaultHackerRank}</>);
    } else if (buttonType === "forage") {
      setContent(
        <div className="mb-5">
          <span className="fw-bold fs-2 text-warning">
            Wells Fargo - Software Engineer Job Simulation
          </span>
          <br />
          <div className="row mt-4">
            <div className="col-7">
              <img src={wellsFargo} alt="Wells Fargo" width={500} />
            </div>
            <div className="col-5">
              <p className="fw-bold fs-4 text-warning mt-4">Skill Involved :</p>
              <p className="fw-bold fs-5 text-white mb-5">
                Java <br /> ERD <br />
                <br />
              </p>
              <br />
              <p className="mt-5">
                <a
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Wells%20Fargo/9Wvq4L2WCFQDyyPp3_Wells%20Fargo_7KYrRZYhgt7WatrSA_1728128895899_completion_certificate.pdf"
                  target="_blank"
                  className="fs-5 fw-bold"
                >
                  My Certification
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    } else if (buttonType === "tarumt") {
      setContent(
        <>
          <div className="mb-5">
            <span className="fw-bold fs-2 text-warning">
              Diploma Graduate with Distinction
            </span>
            <br />
            <div className="row mt-4">
              <div className="col-7">
                <img src={graduate} alt="Graduate" width={450} />
              </div>
              <div className="col-5">
                <p className="fw-bold fs-4 text-warning mt-4">
                  CGPA :
                </p>
                <p className="fw-bold fs-5 text-white mb-5">
                  3.78 out of 4.0 <br /> <br /> <br />
                  <br />
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="mb-5 pb-5">
            <span className="fw-bold fs-2 text-warning">
              Diploma Soft Skill Competency
            </span>
            <br />
            <div className="row mt-4">
              <div className="col-7">
                <img src={softSkill} alt="softSkill" width={450} />
              </div>
              <div className="col-5">
                <p className="fw-bold fs-4 text-warning mt-4">
                  Award :
                </p>
                <p className="fw-bold fs-5 text-white mb-5">
                  Bronze <br /> <br /> <br />
                  <br />
                </p>
                <br />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start mt-5">
        {/* Button group container */}
        <div className="mt-5" role="group">
          <button
            type="button"
            className="btn btn-warning text-dark mx-3"
            onClick={() => handleButtonClick("hackerRank")}
          >
            <span className="fs-6 fw-bold">
              <img
                src={hackerRank}
                alt="Hacker Rank"
                className="me-2"
                width={30}
              />
              Hacker Rank
            </span>
          </button>
          <button
            type="button"
            className="btn btn-warning text-dark mx-3"
            onClick={() => handleButtonClick("forage")}
          >
            <span className="fs-6 fw-bold">
              <img src={forage} alt="Forage" className="me-2" width={30} />
              Forage
            </span>
          </button>
          <button
            type="button"
            className="btn btn-warning text-dark mx-3"
            onClick={() => handleButtonClick("tarumt")}
          >
            <span className="fs-6 fw-bold">
              <img src={tarumt} alt="TARUMT" className="me-2" width={30} />
              TARUMT
            </span>
          </button>
        </div>
      </div>
      <br />

      {/* Display content */}
      <div className="mt-5">{content}</div>
    </>
  );
}

export default Skill;
