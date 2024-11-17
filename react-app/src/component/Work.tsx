import "./Work.css";
import { useState } from "react";

//image path
import foofee_1 from "../assets/foofee_1.png";
import foofee_2 from "../assets/foofee_2.png";
import me_1 from "../assets/me_1.png";
import me_2 from "../assets/me_2.png";
import me_3 from "../assets/me_3.png";

function Work() {
  const [content, setContent] = useState<JSX.Element | null>(
    <>
      <p className="mt-4 fs-4 font-monospace text-white">
        Workplace challenges can be an opportunity for growth and learning,
        pushing us to improve our skills.
      </p>
    </>
  );

  const handleClick = (id: number) => {
    if (id === 1) {
      setContent(
        <div className="row">
          <div className="col">
            <div className="work_slider-container">
              <div className="ff_slider">
                <img src={foofee_1} alt="Image 1" />
                <img src={foofee_2} alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="col">
            <span className="font-monospace fw-bold fs-2 text-primary mt-5">
              Waiter
            </span>
            <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
              &#123;
            </span>
            <br />
            <span className="fs-4 fw-bold font-monospace text-info">
              April 2022 - June 2022
            </span>
            <br />
            <p className="mt-4 fs-5 font-monospace text-white">
              <span className="text-info">Clearing</span> restaurant areas to
              ensure a smooth pathway for customers.
              <br />
              <br />
              <span className="text-info">Serving</span> menus to customers and
              taking their orders to ensure a pleasant dining experience.
              <br />
              <br />
              <span className="text-info">Packing</span> delivery orders and
              handing them to delivery riders, coordinating the efficient
              distribution of meals to customers.
            </p>
            <br />
            <span className="mt-1 fs-4 fw-bold font-monospace text-warning">
              &#125;
            </span>
          </div>
        </div>
      );
    } else if (id === 2) {
      setContent(
        <>
          <div className="row">
            <div className="col">
              <div className="work_slider-container">
                <div className="me_slider">
                  <img src={me_1} alt="Image 1" />
                  <img src={me_2} alt="Image 2" />
                  <img src={me_3} alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="col">
              <span className="font-monospace fw-bold fs-2 text-primary mt-5">
                First Internship
              </span>
              <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
                &#123;
              </span>
              <br />
              <span className="fs-4 fw-bold font-monospace text-info">
                Nov 2023 - Feb 2024
              </span>
              <br />
              <p className="mt-4 fs-5 font-monospace text-white">
                Developed a simple
                <span className="text-info"> Visitor Management System </span>
                that interacts with the company’s previous internal software and
                hardware components like a card reader and controller.
                <br />
                <br />
                This project marked the first experience using
                <span className="text-info"> PHP </span> for development.
                <br />
                <br />
                <span className="text-info">Writing user manuals </span>for the
                company’s product to ensure customers can easily understand and
                use it.
              </p>
              <br />
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
          Work Experience
        </span>
        <span className="mx-1 fs-4 fw-bold font-monospace text-warning">
          &#123;
        </span>
        <br />
        <div className="mt-5">
          <span className="fs-4 fw-bold font-monospace text-white">
            I started working after completing my O-Levels.
          </span>
        </div>
        <br />
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <span className="font-monoscape fs-5 fw-bold text-warning">
              2022
            </span>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="work_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <div
              className="work_point"
              onClick={() => handleClick(1)}
            ></div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="work_glowing-line" />
          </div>
          <div className="col d-flex justify-content-center">
            <div
              className="work_point"
              onClick={() => handleClick(2)}
            ></div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="work_glowing-line" />
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

export default Work;
