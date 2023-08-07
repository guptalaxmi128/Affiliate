import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/AI BBC.jpg";
import Navbar from "../../Navbar/Navbar";

const Basic = () => {
  return (
    <>
      <Navbar />
     
        <div className="card-container">
          <div className="card" style={{ width: "28rem" }}>
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
              AFFILIATE INDIAN BUSINESS BUILDER CHALLENGE
              </div>
              <Link to={"/basic-content"} className="progress">
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
            <div className="col-md-12 text-center">
              <div className="copyright">2020 © copyright</div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Basic;
