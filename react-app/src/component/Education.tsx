import "./Education.css";
import { useState } from "react";

//image path
import chkl_1 from "../assets/chkl_1.png";
import chkl_2 from "../assets/chkl_2.png";
import chkl_3 from "../assets/chkl_3.png";
import tarumt_1 from "../assets/tarumt_1.png";
import tarumt_2 from "../assets/tarumt_2.png";
import tarumt_3 from "../assets/tarumt_3.png";
import gc_1 from "../assets/gc_1.png";
import gc_2 from "../assets/gc_2.png";
import gc_3 from "../assets/gc_3.png";

function Education() {
  const [content, setContent] = useState<JSX.Element | null>(
    <>
      <p className="mt-4 fs-4 font-monospace text-white">
        The stonemason shattered the stone on the 101st strike, but it was the
        cumulative effort of the 100 preceding strikes that made it possible.
      </p>
    </>
  );

  const handleClick = (id: number) => {
    if (id === 1) {
      setContent(
        <>
          <div className="row">
            <div className="col">
              <div className="uni_slider-container">
                <div className="uni_slider">
                  <img src={chkl_1} alt="Image 1" />
                  <img src={chkl_2} alt="Image 2" />
                  <img src={chkl_3} alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="col">
              <span className="font-monospace fw-bold fs-2 text-primary mt-5">
                High School
              </span>
              <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
                &#123;
              </span>
              <br />
              <span className="fs-4 fw-bold font-monospace text-info">
                January 2017 - Marh 2022
              </span>
              <br />
              <p className="mt-4 fs-5 font-monospace text-white">
                Graduate with<span className="text-info"> SPM </span>
                certificate, equivalent with
                <span className="text-info"> O-level </span>
                <br />
                <br />
                Trilingual education, consisting of:
                <br />
                <div className="mt-3">
                  <span className="mt-1 ms-5 fs-5 font-monospace text-danger">
                    &#123;
                  </span>
                  <span className="text-info mx-3 mt-5">Mandarin</span>
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                <div className="mt-3">
                  <span className="mt-1 ms-5 fs-5 font-monospace text-danger">
                    &#123;
                  </span>
                  <span className="text-info mx-3 mt-5">English</span>
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                <div className="mt-3">
                  <span className="mt-1 ms-5 fs-5 font-monospace text-danger">
                    &#123;
                  </span>
                  <span className="text-info mx-3 mt-5">Malay</span>
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
              </p>
              <span className="mt-1 fs-4 fw-bold font-monospace text-warning">
                &#125;
              </span>
            </div>
          </div>
        </>
      );
    }
    if (id === 2) {
      setContent(
        <>
          {" "}
          <div className="row">
            <div className="col">
              <div className="uni_slider-container">
                <div className="uni_slider">
                  <img src={tarumt_1} alt="Image 1" />
                  <img src={tarumt_2} alt="Image 2" />
                  <img src={tarumt_3} alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="col">
              <span className="font-monospace fw-bold fs-2 text-primary mt-5">
                Diploma
              </span>
              <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
                &#123;
              </span>
              <br />
              <span className="fs-4 fw-bold font-monospace text-info">
                June 2022 - June 2024
              </span>
              <br />
              <p className="mt-4 fs-5 font-monospace text-white">
                Graduate Diploma in Computer Science with a
                <span className="text-info mx-3 mt-5">CGPA of 3.78 </span>
                <br />
                <br />
                <p className="fs-6">
                  Learned a variety of programming languages including:
                </p>
                <div className="text-info fs-6 ms-5">
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  C
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  C#
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  Java
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  8086 Assembly
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                <p className="fs-6">Completed two web development projects:</p>
                <div className="text-info fs-6">
                  <span className="text-white ms-5">First project used </span>
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  HTML
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  CSS
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  JavaScript
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                <div className="text-info fs-6">
                  <span className="text-white ms-5">Second project used </span>
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  JSP
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  Servlet
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  ,
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#123;
                  </span>
                  JPA
                  <span className="fs-6 mx-1 font-monospace text-danger">
                    &#125;
                  </span>
                  <span className="text-white">to build a </span>
                  <span className="text-white ms-5">
                    web application with NetBeans and the GlassFish server.
                  </span>
                </div>
              </p>

              <span className="mt-1 fs-4 fw-bold font-monospace text-warning">
                &#125;
              </span>
            </div>
          </div>
        </>
      );
    }
    if (id === 3) {
      setContent(
        <>
          <div className="row">
            <div className="col">
              <div className="uni_slider-container">
                <div className="uni_slider">
                  <img src={gc_1} alt="Image 1" />
                  <img src={gc_2} alt="Image 2" />
                  <img src={gc_3} alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="col">
              <span className="font-monospace fw-bold fs-2 text-primary mt-5">
                Degree
              </span>
              <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
                &#123;
              </span>
              <br />
              <span className="fs-4 fw-bold font-monospace text-info">
                September 2024 - Present
              </span>
              <br />
              <p className="mt-4 fs-5 font-monospace text-white">
                <div className="mt-3">
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#123;
                  </span>
                  <span className="text-info mx-3 mt-5">Python</span>
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                Numerical Optimization
                <br />
                GUI & HCI Programming
                <br />
                <br />
                <div className="mt-3">
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#123;
                  </span>
                  <span className="text-info mx-3 mt-5">Java</span>
                  <span className="mt-1 fs-5 font-monospace text-danger">
                    &#125;
                  </span>
                </div>
                <br />
                Concurrent Development
                <br />
              </p>
              <span className="mt-1 fs-4 fw-bold font-monospace text-warning">
                &#125;
              </span>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="mt-5">
        <br />
        <span className="font-monospace fw-bold fs-2 text-primary mt-5">
          Education
        </span>
        <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
          &#123;
        </span>
        <div className="mt-5">
          <span className="fs-4 fw-bold font-monospace text-white">
            Learning is a lifelong journey that transforms challenges into
            opportunities for growth.
          </span>
        </div>
        <br />
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <span className="font-monoscape fs-5 fw-bold text-warning">
              2017
            </span>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_point" onClick={() => handleClick(1)}></div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_point" onClick={() => handleClick(2)}></div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_point" onClick={() => handleClick(3)}></div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="uni_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <span className="font-monoscape fs-5 fw-bold text-warning">
              2024
            </span>
          </div>
        </div>
        <div className="row mt-5">
          {content}
          <br />
          <span className="mt-1 fs-4 fw-bold font-monospace text-warning">
            &#125;
          </span>
        </div>
      </div>
    </>
  );
}

export default Education;
