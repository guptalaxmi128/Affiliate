import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../Navbar.css";
import "./Dashboard.css";
function Dashboard() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [ham, setham] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1030px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1030px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const cross = () => {
    setham(!ham);
  };
  const close = () => {
    if (show === false) {
      setshow(true);
      setshow1(false);
    } else {
      setshow(false);
      setshow1(false);
    }
  };
  const close1 = () => {
    if (show1 === false) {
      setshow1(true);
      setshow(false);
    } else {
      setshow1(false);
      setshow(false);
    }
  };
  return (
    <>
      <nav className={ham ? "main-nav1" : "main-nav"}>
        {/* 1st logo part  */}
        <div className="logo">
          {ham ? (
            <img
              className="logopic"
              src="https://affiliateindians.com/ai/assets/logo-small.png"
              alt="location"
            ></img>
          ) : (
            <img
              className="logopic1"
              src={
                matches
                  ? "https://affiliateindians.com/ai/assets/logo-small.png"
                  : "https://affiliateindians.com/ai/assets/logo_white.png"
              }
              alt="location"
            ></img>
          )}
        </div>
        <div className="ham">
          <span className={ham ? "top topcross" : "top"} onClick={cross}></span>
          <span
            className={ham ? "middle middlecross" : "middle"}
            onClick={cross}
          ></span>
          <span
            className={ham ? "bottom bottomcross" : "bottom"}
            onClick={cross}
          ></span>
        </div>
        {/* 2nd menu part  */}
      </nav>
      <div className="home">
        {/* sidebar */}

        <div className="sidebar-container">
          {ham ? (
            <div>
              {matches ? (
                <div>
                  <div className="home-left">
                    <div className="dashboard">
                      <NavLink to="/Dashboard">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="dashboard-text">Dashboard</span>
                      </NavLink>
                    </div>
                    <div className="user">
                      <NavLink to="/Registeredusers">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="user-text">Registered User</span>
                      </NavLink>
                    </div>
                    <div className="leaads">
                      <NavLink to="/Leads">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="leaads-text">Leads</span>
                      </NavLink>
                    </div>
                    <div className="memb">
                      <NavLink to="/Member">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="memb-text"> Members</span>
                      </NavLink>
                    </div>
                    <div className="advisors">
                      <div className="advisors-outer">
                        <LinkOutlinedIcon className="link-icon" />

                        <span className="advisors-text">Advisors</span>

                        <KeyboardArrowRightIcon
                          onClick={close}
                          className={show ? "key-icon-clicked" : "key-icon"}
                        />
                      </div>
                      <div
                        className={show ? "advisors-inner" : "advisors-inner1"}
                      >
                        <NavLink to="/Addadvisor">
                          <div className="add-advisors">Add Advisors</div>
                        </NavLink>
                        <NavLink to="/Viewadvisor">
                          <div className="view-advisors">View Advisors</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="schedule">
                      <div className="schedule-outer">
                        <LinkOutlinedIcon className="link-icon" />

                        <span className="schedule-text">Schedule Bookings</span>

                        <KeyboardArrowRightIcon
                          onClick={close1}
                          className={show1 ? "key-icon1-clicked" : "key-icon1"}
                        />
                      </div>
                      <div
                        className={show1 ? "schedule-inner" : "schedule-inner1"}
                      >
                        <NavLink to="/Schedulebooking">
                          <div className="schedule-book">Schedule Booking</div>
                        </NavLink>
                        <NavLink to="/Schedulecalls">
                          <div className="schedule-call">Schedule Call</div>
                        </NavLink>
                        <NavLink to="/Mybooking">
                          <div className="my-booking">My Booking</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="admin-ewallet">
                      <NavLink to="/Ewallets">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="admin-ewallet-text">eWallet</span>
                      </NavLink>
                    </div>

                    <div className="logout">
                      <NavLink to="#">
                        <LogoutOutlinedIcon className="logout-icon" />
                        <span className="logout-text">Logout</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="home-left1">
                    <div className="dashboard2">
                      <div className="dashboard2-link">
                        <NavLink to="/Dashboard">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="dashboard2-content">
                        <NavLink to="/Dashboard">
                          <div className="dashboard2-content1">Dashboard</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="user2">
                      <div className="user2-link">
                        <NavLink to="/Registeredusers">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="user2-content">
                        <NavLink to="/Registeredusers">
                          <div className="user2-content1">Registered Users</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leaads2">
                      <div className="leaads2-link">
                        <NavLink to="/Leads">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="leaads2-content">
                        <NavLink to="/Leads">
                          {" "}
                          <div className="leaads2-content1">Leads</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="memb2">
                      <div className="memb2-link">
                        <NavLink to="/Member">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="memb2-content">
                        <NavLink to="/Member">
                          <div className="memb2-content1">Member</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="advisor2">
                      <div className="advisor2-link">
                        <LinkOutlinedIcon
                          style={{ fontSize: "25px" }}
                          className="link2-icon "
                        />
                      </div>
                      <div className="advisor2-content">
                        <div className="advisor2-content1">Advisor</div>
                        <NavLink to="/Addadvisor">
                          <div className="advisor2-content2">Add Advisor</div>
                        </NavLink>
                        <NavLink to="/Viewadvisor">
                          <div className="advisor2-content3">View Advisor</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="schedule2">
                      <div className="schedule2-link">
                        <LinkOutlinedIcon
                          style={{ fontSize: "25px" }}
                          className="link2-icon "
                        />
                      </div>
                      <div className="schedule2-content">
                        <div className="schedule2-content1">Schdeule</div>
                        <NavLink to="/Schedulebooking">
                          <div className="schedule2-content2">
                            Schdeule booking
                          </div>
                        </NavLink>
                        <NavLink to="/Schedulecalls">
                          <div className="schedule2-content3">
                            Schedule Calls
                          </div>
                        </NavLink>
                        <NavLink to="/Mybooking">
                          <div className="schedule2-content4">My Booking</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="ewallets2">
                      <div className="ewallets2-link">
                        <NavLink to="/Ewallets">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="ewallets2-content">
                        <NavLink to="/Ewallets">
                          <div className="ewallets2-content1">Ewallet</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="logout2">
                      <div className="logout2-link">
                        <NavLink>
                          <LogoutOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="logout2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="logout2-content">
                        <NavLink>
                          {" "}
                          <div className="logout2-content1">Logout</div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {matches ? (
                <div>
                  <div className="home-left1">
                    <div className="dashboard2">
                      <div className="dashboard2-link">
                        <NavLink to="/Dashboard">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="dashboard2-content">
                        <NavLink to="/Dashboard">
                          <div className="dashboard2-content1">Dashboard</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="user2">
                      <div className="user2-link">
                        <NavLink to="/Registeredusers">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="user2-content">
                        <NavLink to="/Registeredusers">
                          <div className="user2-content1">Registered Users</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leaads2">
                      <div className="leaads2-link">
                        <NavLink to="/Leads">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="leaads2-content">
                        <NavLink to="/Leads">
                          {" "}
                          <div className="leaads2-content1">Leads</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="memb2">
                      <div className="memb2-link">
                        <NavLink to="/Member">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="memb2-content">
                        <NavLink to="/Member">
                          <div className="memb2-content1">Member</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="advisor2">
                      <div className="advisor2-link">
                        <LinkOutlinedIcon
                          style={{ fontSize: "25px" }}
                          className="link2-icon "
                        />
                      </div>
                      <div className="advisor2-content">
                        <div className="advisor2-content1">Advisor</div>
                        <NavLink to="/Addadvisor">
                          <div className="advisor2-content2">Add Advisor</div>
                        </NavLink>
                        <NavLink to="/Viewadvisor">
                          <div className="advisor2-content3">View Advisor</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="schedule2">
                      <div className="schedule2-link">
                        <LinkOutlinedIcon
                          style={{ fontSize: "25px" }}
                          className="link2-icon "
                        />
                      </div>
                      <div className="schedule2-content">
                        <div className="schedule2-content1">Schdeule</div>
                        <NavLink to="/Schedulebooking">
                          <div className="schedule2-content2">
                            Schdeule booking
                          </div>
                        </NavLink>
                        <NavLink to="/Schedulecalls">
                          <div className="schedule2-content3">
                            Schedule Calls
                          </div>
                        </NavLink>
                        <NavLink to="/Mybooking">
                          <div className="schedule2-content4">My Booking</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="ewallets2">
                      <div className="ewallets2-link">
                        <NavLink to="/Ewallets">
                          <DashboardOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="dashboard2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="ewallets2-content">
                        <NavLink to="/Ewallets">
                          <div className="ewallets2-content1">Ewallet</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="logout2">
                      <div className="logout2-link">
                        <NavLink>
                          <LogoutOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="logout2-icon "
                          />
                        </NavLink>
                      </div>
                      <div className="logout2-content">
                        <NavLink>
                          {" "}
                          <div className="logout2-content1">Logout</div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="home-left">
                    <div className="dashboard">
                      <NavLink to="/Dashboard">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="dashboard-text">Dashboard</span>
                      </NavLink>
                    </div>
                    <div className="user">
                      <NavLink to="/Registeredusers">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="user-text">Registered User</span>
                      </NavLink>
                    </div>
                    <div className="leaads">
                      <NavLink to="/Leads">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="leaads-text">Leads</span>
                      </NavLink>
                    </div>
                    <div className="memb">
                      <NavLink to="/Member">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="memb-text"> Members</span>
                      </NavLink>
                    </div>
                    <div className="advisors">
                      <div className="advisors-outer">
                        <LinkOutlinedIcon className="link-icon" />

                        <span className="advisors-text">Advisors</span>

                        <KeyboardArrowRightIcon
                          onClick={close}
                          className={show ? "key-icon-clicked" : "key-icon"}
                        />
                      </div>
                      <div
                        className={show ? "advisors-inner" : "advisors-inner1"}
                      >
                        <NavLink to="/Addadvisor">
                          <div className="add-advisors">Add Advisors</div>
                        </NavLink>
                        <NavLink to="/Viewadvisor">
                          <div className="view-advisors">View Advisors</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="schedule">
                      <div className="schedule-outer">
                        <LinkOutlinedIcon className="link-icon" />

                        <span className="schedule-text">Schedule Bookings</span>

                        <KeyboardArrowRightIcon
                          onClick={close1}
                          className={show1 ? "key-icon1-clicked" : "key-icon1"}
                        />
                      </div>
                      <div
                        className={show1 ? "schedule-inner" : "schedule-inner1"}
                      >
                        <NavLink to="/Schedulebooking">
                          <div className="schedule-book">Schedule Booking</div>
                        </NavLink>
                        <NavLink to="/Schedulecalls">
                          <div className="schedule-call">Schedule Call</div>
                        </NavLink>
                        <NavLink to="/Mybooking">
                          <div className="my-booking">My Booking</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="admin-ewallet">
                      <NavLink to="/Ewallets">
                        <DashboardOutlinedIcon className="dashboard-icon" />
                        <span className="admin-ewallet-text">eWallet</span>
                      </NavLink>
                    </div>

                    <div className="logout">
                      <NavLink to="#">
                        <LogoutOutlinedIcon className="logout-icon" />
                        <span className="logout-text">Logout</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {ham && <div className="home-left2">
        <div className="dashboard">
        <NavLink to="/Dashboard">
          <DashboardOutlinedIcon className="dashboard-icon" />
          <span className="dashboard-text">Dashboard</span>
        </NavLink>
      </div>
      <div className="user">
        <NavLink to="/Registeredusers">
          <DashboardOutlinedIcon className="dashboard-icon" />
          <span className="user-text">Registered User</span>
        </NavLink>
      </div>
      <div className="leaads">
        <NavLink to="/Leads">
          <DashboardOutlinedIcon className="dashboard-icon" />
          <span className="leaads-text">Leads</span>
        </NavLink>
      </div>
      <div className="memb">
        <NavLink to="/Member">
          <DashboardOutlinedIcon className="dashboard-icon" />
          <span className="memb-text"> Members</span>
        </NavLink>
      </div>
      <div className="advisors">
        <div className="advisors-outer">
          <LinkOutlinedIcon className="link-icon" />

          <span className="advisors-text">Advisors</span>

          <KeyboardArrowRightIcon
            onClick={close}
            className={show ? "key-icon-clicked" : "key-icon"}
          />
        </div>
        <div
          className={show ? "advisors-inner" : "advisors-inner1"}
        >
          <NavLink to="/Addadvisor">
            <div className="add-advisors">Add Advisors</div>
          </NavLink>
          <NavLink to="/Viewadvisor">
            <div className="view-advisors">View Advisors</div>
          </NavLink>
        </div>
      </div>

      <div className="schedule">
        <div className="schedule-outer">
          <LinkOutlinedIcon className="link-icon" />

          <span className="schedule-text">Schedule Bookings</span>

          <KeyboardArrowRightIcon
            onClick={close1}
            className={show1 ? "key-icon1-clicked" : "key-icon1"}
          />
        </div>
        <div
          className={show1 ? "schedule-inner" : "schedule-inner1"}
        >
          <NavLink to="/Schedulebooking">
            <div className="schedule-book">Schedule Booking</div>
          </NavLink>
          <NavLink to="/Schedulecalls">
            <div className="schedule-call">Schedule Call</div>
          </NavLink>
          <NavLink to="/Mybooking">
            <div className="my-booking">My Booking</div>
          </NavLink>
        </div>
      </div>

      <div className="admin-ewallet">
        <NavLink to="/Ewallets">
          <DashboardOutlinedIcon className="dashboard-icon" />
          <span className="admin-ewallet-text">eWallet</span>
        </NavLink>
      </div>

      <div className="logout">
        <NavLink to="#">
          <LogoutOutlinedIcon className="logout-icon" />
          <span className="logout-text">Logout</span>
        </NavLink>
      </div>
        </div>}
        {/* sidebar */}
        {matches ? (
          <div>
            <div
              className={ham ? "dashboard-home-right" : "dashboard-home-right1"}
            >
              <div className="right-header">
                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    paddingLeft: "10px",
                  }}
                >
                  Dashboard
                </div>
                <div className="sidewords">
                  <NavLink
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                    }}
                    to="#"
                  >
                    Home
                  </NavLink>
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                    }}
                  >
                    
                  </p>
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="dashboard-right-block-container">
                <div className="right-dashboard">
                  <div className="right-dashboard1">
                    <p className="right-dashboard1-text1">Pending Users-</p>
                    <p className="right-dashboard1-text2">1172</p>
                  </div>
                  <div className="right-dashboard2">
                    <p className="right-dashboard1-text1">Paid Users-</p>
                    <p className="right-dashboard1-text2">296</p>
                  </div>
                  <div className="right-dashboard3">
                    <p className="right-dashboard1-text1">Blocked Users-</p>
                    <p className="right-dashboard1-text2">10</p>
                  </div>
                  <div className="right-dashboard4">
                    <p className="right-dashboard1-text1">Total Commisions-</p>
                    <p className="right-dashboard1-text2">228576.8</p>
                  </div>
                </div>
              </div>
              <div className="copyright">2020 © copyright</div>
            </div>
          </div>
        ) : (
          <div>
            <div
              className={ham ? "dashboard-home-right1" : "dashboard-home-right"}
            >
              <div className="right-header">
                <div className="header-heading">Dashboard</div>
                <div className="sidewords">
                  <NavLink
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                    }}
                    to="#"
                  >
                    Home
                  </NavLink>
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                    }}
                  >
                    
                  </p>
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="dashboard-right-block-container">
                <div className="right-dashboard">
                  <div className="right-dashboard1">
                    <p className="right-dashboard1-text1">Pending Users-</p>
                    <p className="right-dashboard1-text2">1172</p>
                  </div>
                  <div className="right-dashboard2">
                    <p className="right-dashboard1-text1">Paid Users-</p>
                    <p className="right-dashboard1-text2">296</p>
                  </div>
                  <div className="right-dashboard3">
                    <p className="right-dashboard1-text1">Blocked Users-</p>
                    <p className="right-dashboard1-text2">10</p>
                  </div>
                  <div className="right-dashboard4">
                    <p className="right-dashboard1-text1">Total Commisions-</p>
                    <p className="right-dashboard1-text2">228576.8</p>
                  </div>
                </div>
              </div>
              <div className="copyright">2020 © copyright</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
