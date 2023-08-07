import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import image1 from "../assets/AI BBC.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import "./course.css";

const Course = () => {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image1}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">
              AFFILIATE INDIANS BUSINESS BUILDER CHALLENGE
            </div>
            <div class="card-text">
              Everything you need to know to start affiliate marketing business
              in India
            </div>
            <Link to={"/basic"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "18px", marginTop: "15px" }}>
                  93.33% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image2}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE INDIANS MODAL</div>
            <p className="card-text">BEGINNER MEMBERSHIP</p>
            <Link to={"/beginner"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "18px", marginTop: "15px" }}>
                  93.33% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image3}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE INDIANS BLUEPRINT</div>
            <p className="card-text">PRO MEMBERSHIP → 17 BONUSES INSIDE</p>
            <Link to={"/pro"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "18px", marginTop: "15px" }}>
                  93.33% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image4}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE INDIANS COUNCIL</div>
            <p className="card-text">
              EXPERT MEMBERSHIP: Get involved in Hot-seat sessions with CEO &
              Founder to launch your online business → 17 BONUSES INSIDE.
            </p>
            <Link to={"/expert"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "18px", marginTop: "15px" }}>
                  93.33% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
