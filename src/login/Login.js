import React from "react";
import "./login.css";
import background from "../assets/cube_dark.jpg";
import logo from "../assets/logo_white.png";
import arrow from "../assets/arrow-right.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="background">
        <img
          src={background}
          alt="background"
          className=" d-flex align-items-center background-image"
        />
        <div className="account-pages w-100">
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col-md-8 col-lg-6 col-xl-5"> */}
                <div className="text-center mb-4">
                  <div class="content">
                    <img src={logo} alt="logo" width="250px" />
                  </div>
                  <div className="card1 card-shadow">
                    <div className="card-body1" style={{ padding: "36px" }}>
                      <div className="text-center">
                        <h3
                          style={{ fontFamily: "Rajdhani", fontSize: "24px" }}
                        >
                          Welcome to Affiliate Indians!
                        </h3>
                      </div>
                      <div className="form-group pt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group ">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Link to="#" className="forgot-password">
                            Forgot your password?
                          </Link>
                        </div>
                      
                        <div className="col-md-6">
                          <div className="form-group mb-0 text-center">
                            <button className="btn">
                            <Link to={"/courses"} style={{textDecoration:'none',fontSize:'16px',color:'#000'}} >
                              <div
                                style={{
                                  flexDirection: "row",
                                  display: "flex",
                                }}
                              >
                                Login Now
                               &nbsp; &nbsp;
                                <img src={arrow} alt="arrow" width='20px' height='20px'  style={{ color:'#000'}}/>
                              </div>
                              </Link>
                            </button>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
