import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/expert/image.jpg";
import Navbar from "../../Navbar/Navbar";

const Expert = () => {
  return (
    <>
      <Navbar />
     
        <div className="card-container">
          <div className="card" style={{ width: "28rem" }}>
            <img
              className="card-img-top"
              src={image}
              alt="Card cap"
              height="160px"
            />
            <div className="card-body">
              <div className="card-title">
                AFFILIATE INDIANS COUNCIL
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

export default Expert;
