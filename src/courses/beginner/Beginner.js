import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import image1 from "../../assets/beginner/img1.png";
import image2 from "../../assets/beginner/img2.png";
import image3 from "../../assets/beginner/img3.png";
import image4 from "../../assets/beginner/img4.png";
import image5 from "../../assets/beginner/img5.png";
import image6 from "../../assets/beginner/img6.png";
import image7 from "../../assets/beginner/img7.png";
import image8 from "../../assets/beginner/img8.png";
import image9 from "../../assets/beginner/img9.jpg";
import image10 from "../../assets/beginner/img10.jpg";
import image11 from "../../assets/beginner/img11.jpg";
import "./beginner.css";
const Beginner = () => {
  return (
    <>
      <Navbar />
      <div className="card-container1" >
        <div className="card" style={{ width: "26rem",marginTop:'100px' }}>
          <img
            className="card-img-top"
            src={image1}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">
            AFFILIATE INDIANS MODEL
            </div>
            <div class="card-text">
            AFFILIATE INDIANS MODEL
            </div>
            <Link to={"/affiliate-indian-model"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem",marginTop:'100px' }}>
          <img
            className="card-img-top"
            src={image2}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE NICHE BLUEPRINT</div>
            <p className="card-text">AFFILIATE INDIAN MODEL</p>
            <Link to={"/affiliate-niche-blueprint"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem",marginTop:'100px' }}>
          <img
            className="card-img-top"
            src={image3}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE PRODUCT BLUEPRINT</div>
            <p className="card-text">AFFILIATE INDIAN</p>
            <Link to={"/affiliate-product"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem",marginTop:'100px' }}>
          <img
            className="card-img-top"
            src={image4}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFIILATE FUNNEL BLUEPRINT</div>
            <p className="card-text">
            AFFILIATE INDIAN
            </p>
            <Link to={"/affiliate-funnel"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-container1"> 
        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image5}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">
            INTERNET TRAFFIC BLUEPRINT
            </div>
            <div class="card-text">
            AFFILIATE INDIAN
            </div>
            <Link to={"/internet-traffic"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image6}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">EMAIL MARKETING FORMULA</div>
            <p className="card-text">AFFILIATE INDIAN</p>
            <Link to={"/email-marketing"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image7}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE BUDGET BLUEPRINT</div>
            <p className="card-text">AFFILIATE INDIAN</p>
            <Link to="#" className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image8}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE LEADGEN BLUEPRINT</div>
            <p className="card-text">
            AFFILIATE INDIAN
            </p>
            <Link to="#" className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-container1" >
        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image9}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">
            1-TO-1 STRATEGY SESSION(15 MIN)
            </div>
            <div class="card-text">
            AFFILIATE INDIAN
            </div>
            <Link to={"#"} className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image10}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE MAGIC CLUB(WEEKLY INNER CIRCLE)</div>
            <p className="card-text">AFFILIATE INDIAN</p>
            <Link to="#" className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image10}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILATHON PREMIER LEAGUE</div>
            <p className="card-text">AFFILIATE INDIAN</p>
            <Link to="#" className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "26rem" }}>
          <img
            className="card-img-top"
            src={image11}
            alt="Card cap"
            height="160px"
          />
          <div className="card-body">
            <div className="card-title">AFFILIATE INDIANS PARTNER</div>
            <p className="card-text">
            AFFILIATE INDIAN
            </p>
            <Link to="#" className="progress">
              <div className="progress-bar progress-bar-success">
                <p style={{ marginLeft: "20px", marginTop: "15px" }}>
                  90% Complete (success)
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
          <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="copyright">2020 © AFFIILATE INDIANS</div>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Beginner;
