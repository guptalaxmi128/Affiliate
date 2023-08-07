import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import WebIcon from "@mui/icons-material/Web";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import RampRightIcon from "@mui/icons-material/RampRight";
import "../Home/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockIcon from "@mui/icons-material/Lock";
import arrow from "../assets/arrow-right.png";
import "../Home/Home.css";
function DayContent() {
  const [ham, setham] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1030px)").matches
  );

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window
      .matchMedia("(max-width: 1030px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const cross = () => {
    setham(!ham);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
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

        <div className="course">
          <NavLink to="#">
            <div className="course-inner">
              <div>
                <WorkOutlineIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                My Courses
              </div>
            </div>
          </NavLink>
        </div>
        <div className="account">
          <NavLink to="/affiliateindians">
            <div
              className="account-inner"
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              <div>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Account <KeyboardArrowDownIcon />
              </div>
            </div>
          </NavLink>
          {isOpen && (
            <div className="dropdown-menu" onClick={closeDropdown}>
              <NavLink to="/profile" className="dropdown-item">
                <PersonOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                &nbsp;Profile
              </NavLink>
              <NavLink to="/settings" className="dropdown-item">
                <SettingsOutlinedIcon style={{ fontSize: "20px" }} />
                &nbsp;Settings
              </NavLink>
              <hr className="dropdown-line" />
              <NavLink to="/logout" className="dropdown-item">
                <LogoutOutlinedIcon style={{ fontSize: "18px" }} /> &nbsp;Logout
              </NavLink>
            </div>
          )}
        </div>

        <div className="support">
          <NavLink to="#">
            <div className="support-inner">
              <div>
                <AttachFileOutlinedIcon
                  style={{
                    fontSize: "30px",
                    transform: "rotate(45deg)",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Support <KeyboardArrowDownIcon />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="affiliate">
          <NavLink to="#">
            <div className="affiliate-inner">
              <div>
                <CurrencyRupeeOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Affiliates
              </div>
            </div>
          </NavLink>
        </div>
        <div className="advisor">
          <NavLink to="#">
            <div className="advisor-inner">
              <div>
                <ContactMailOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                {" "}
                My Advisor
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
      <div className="home">
        {/* sidebar */}

        <div className="sidebar-container">
          {ham ? (
            <div>
              {matches ? (
                <div>
                  <div className="home-left">
                    <div className="start">
                      <NavLink to="#">
                        <WebIcon style={{ marginRight: "10px" }} /> Day 1
                      </NavLink>
                    </div>
                    <div className="wallet">
                      <NavLink to="#">
                        <FolderOpenIcon style={{ marginRight: "10px" }} /> Day 2
                      </NavLink>
                    </div>
                    <div className="links">
                      <NavLink to="#">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Day 3
                      </NavLink>
                    </div>
                    <div className="leads">
                      <NavLink to="#">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />
                        Day 4
                      </NavLink>
                    </div>
                    <div className="members">
                      <NavLink to="#">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Day 5
                      </NavLink>
                    </div>
                    <div className="reports">
                      <NavLink to="#">
                        <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                        Day 6
                      </NavLink>
                    </div>
                    <div className="rank">
                      <NavLink to="#">
                        <ShowChartOutlinedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Day 7
                      </NavLink>
                    </div>
                    <div className="leader">
                      <NavLink to="#">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Day 8
                      </NavLink>
                    </div>
                    <div className="commisions">
                      <NavLink to="#">
                        <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                        Day 9
                      </NavLink>
                    </div>
                    <div className="stream">
                      <NavLink to="/stream">
                        <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
                        Day 10
                      </NavLink>
                    </div>
                    <div className="traffic">
                      <NavLink to="#">
                        <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO]
                        Day 11
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="home-left1">
                    <div className="start1">
                      <div className="start1-link">
                        <NavLink to="#">
                          <WebIcon
                            style={{ fontSize: "25px" }}
                            className="start1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="start1-content">
                        <NavLink to="#">
                          <div className="start1-content1">Day 1</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="ewallet1">
                      <div className="ewallet1-link">
                        <NavLink to="#">
                          <FolderOpenIcon
                            style={{ fontSize: "25px" }}
                            className="ewallet1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="ewallet1-content">
                        <NavLink to="/ewallet">
                          <div className="ewallet1-content1">Day 2</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="links1">
                      <div className="links1-link">
                        <NavLink to="/affiliate">
                          <PeopleOutlineIcon
                            style={{ fontSize: "25px" }}
                            className="links1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="links1-content">
                        <NavLink to="/affiliate">
                          <div className="links1-content1">Links</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leads1">
                      <div className="leads1-link">
                        <NavLink to="/lead">
                          <FormatListBulletedIcon
                            style={{ fontSize: "25px" }}
                            className="leads1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="leads1-content">
                        <NavLink to="/lead">
                          <div className="leads1-content1">Leads</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="members1">
                      <div className="members1-link">
                        <NavLink to="/members">
                          <PeopleOutlineIcon
                            style={{ fontSize: "25px" }}
                            className="members1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="members1-content">
                        <NavLink to="/members">
                          <div className="members1-content1">Members</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="reports1">
                      <div className="reports1-link">
                        <NavLink to="/reports">
                          <ArticleOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="reports1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="reports1-content">
                        <NavLink to="/reports">
                          <div className="reports1-content1">Reports</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="rank1">
                      <div className="rank1-link">
                        <NavLink to="/rank">
                          <ShowChartOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="rank1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="rank1-content">
                        <NavLink to="/rank">
                          <div className="rank1-content1">Rank</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leader1">
                      <div className="leader1-link">
                        <NavLink to="/leaderboard">
                          <FormatListBulletedIcon
                            style={{ fontSize: "25px" }}
                            className="leader1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="leader1-content">
                        <NavLink to="/leaderboard">
                          <div className="leader1-content1">Leaderboard</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="commisions1">
                      <div className="commisions1-link">
                        <NavLink to="/commisions">
                          <DiamondOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="commisions1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="commisions1-content">
                        <NavLink to="/commisions">
                          <div className="commisions1-content1">Commisions</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="stream1">
                      <div className="stream1-link">
                        <NavLink to="/stream">
                          <RampRightIcon
                            style={{ fontSize: "25px" }}
                            className="stream1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="stream1-content">
                        <NavLink to="/stream">
                          <div className="stream1-content1">
                            [PRO] Streams of Income
                          </div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="traffic1">
                      <div className="traffic1-link">
                        <NavLink to="/traffic">
                          <DragHandleIcon
                            style={{ fontSize: "25px" }}
                            className="traffic1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="traffic1-content">
                        <NavLink to="/traffic">
                          <div className="traffic1-content1">
                            [PRO] Get Traffic
                          </div>
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
                    <div className="start1">
                      <div className="start1-link">
                        <NavLink to="/affiliateindians">
                          <WebIcon
                            style={{ fontSize: "25px" }}
                            className="start1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="start1-content">
                        <NavLink to="#">
                          <div className="start1-content1">Day 1</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="ewallet1">
                      <div className="ewallet1-link">
                        <NavLink to="/ewallet">
                          <FolderOpenIcon
                            style={{ fontSize: "25px" }}
                            className="ewallet1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="ewallet1-content">
                        <NavLink to="/ewallet">
                          <div className="ewallet1-content1">Ewallet</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="links1">
                      <div className="links1-link">
                        <NavLink to="/affiliate">
                          <PeopleOutlineIcon
                            style={{ fontSize: "25px" }}
                            className="links1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="links1-content">
                        <NavLink to="/affiliate">
                          <div className="links1-content1">Links</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leads1">
                      <div className="leads1-link">
                        <NavLink to="/lead">
                          <FormatListBulletedIcon
                            style={{ fontSize: "25px" }}
                            className="leads1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="leads1-content">
                        <NavLink to="/lead">
                          <div className="leads1-content1">Leads</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="members1">
                      <div className="members1-link">
                        <NavLink to="/members">
                          <PeopleOutlineIcon
                            style={{ fontSize: "25px" }}
                            className="members1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="members1-content">
                        <NavLink to="/members">
                          <div className="members1-content1">Members</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="reports1">
                      <div className="reports1-link">
                        <NavLink to="/reports">
                          <ArticleOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="reports1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="reports1-content">
                        <NavLink to="/reports">
                          <div className="reports1-content1">Reports</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="rank1">
                      <div className="rank1-link">
                        <NavLink to="/rank">
                          <ShowChartOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="rank1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="rank1-content">
                        <NavLink to="/rank">
                          <div className="rank1-content1">Rank</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="leader1">
                      <div className="leader1-link">
                        <NavLink to="/leaderboard">
                          <FormatListBulletedIcon
                            style={{ fontSize: "25px" }}
                            className="leader1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="leader1-content">
                        <NavLink to="/leaderboard">
                          <div className="leader1-content1">Leaderboard</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="commisions1">
                      <div className="commisions1-link">
                        <NavLink to="/commisions">
                          <DiamondOutlinedIcon
                            style={{ fontSize: "25px" }}
                            className="commisions1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="commisions1-content">
                        <NavLink to="/commisions">
                          <div className="commisions1-content1">Commisions</div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="stream1">
                      <div className="stream1-link">
                        <NavLink to="/stream">
                          <RampRightIcon
                            style={{ fontSize: "25px" }}
                            className="stream1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="stream1-content">
                        <NavLink to="/stream">
                          <div className="stream1-content1">
                            [PRO] Streams of Income
                          </div>
                        </NavLink>
                      </div>
                    </div>

                    <div className="traffic1">
                      <div className="traffic1-link">
                        <NavLink to="/traffic">
                          <DragHandleIcon
                            style={{ fontSize: "25px" }}
                            className="traffic1-icon"
                          />
                        </NavLink>
                      </div>
                      <div className="traffic1-content">
                        <NavLink to="/traffic">
                          <div className="traffic1-content1">
                            [PRO] Get Traffic
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="home-left">
                    <div className="start">
                      <NavLink to="/day-content">
                        <LockIcon style={{ marginRight: "10px" }} />
                        Day 1
                      </NavLink>
                    </div>
                    <div className="wallet">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 2
                      </NavLink>
                    </div>
                    <div className="links">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 3
                      </NavLink>
                    </div>
                    <div className="leads">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} />
                        Day 4
                      </NavLink>
                    </div>
                    <div className="members">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 5
                      </NavLink>
                    </div>
                    <div className="reports">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 6
                      </NavLink>
                    </div>
                    <div className="rank">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 7
                      </NavLink>
                    </div>
                    <div className="leader">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 8
                      </NavLink>
                    </div>
                    <div className="commisions">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 9
                      </NavLink>
                    </div>
                    <div className="stream">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 10
                      </NavLink>
                    </div>
                    <div className="traffic">
                      <NavLink to="#">
                        <LockIcon style={{ marginRight: "10px" }} /> Day 11
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {ham && (
          <div className="home-left2">
            <div className="start">
              <NavLink to="/affiliateindians">
                <WebIcon style={{ marginRight: "10px" }} /> Start Here
              </NavLink>
            </div>
            <div className="wallet">
              <NavLink to="/ewallet">
                <FolderOpenIcon style={{ marginRight: "10px" }} /> eWallet
              </NavLink>
            </div>
            <div className="links">
              <NavLink to="/affiliate">
                <PeopleOutlineIcon style={{ marginRight: "10px" }} /> Affiliate
                Links
              </NavLink>
            </div>
            <div className="leads">
              <NavLink to="/lead">
                <FormatListBulletedIcon style={{ marginRight: "10px" }} />
                Leads
              </NavLink>
            </div>
            <div className="members">
              <NavLink to="/members">
                <PeopleOutlineIcon style={{ marginRight: "10px" }} /> Members
              </NavLink>
            </div>
            <div className="reports">
              <NavLink to="/reports">
                <ArticleOutlinedIcon style={{ marginRight: "10px" }} /> Reports
              </NavLink>
            </div>
            <div className="rank">
              <NavLink to="/rank">
                <ShowChartOutlinedIcon style={{ marginRight: "10px" }} /> Rank
              </NavLink>
            </div>
            <div className="leader">
              <NavLink to="/leaderboard">
                <FormatListBulletedIcon style={{ marginRight: "10px" }} />{" "}
                LeaderBoard
              </NavLink>
            </div>
            <div className="commisions">
              <NavLink to="/commisions">
                <DiamondOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                Commissions
              </NavLink>
            </div>
            <div className="stream">
              <NavLink to="/stream">
                <RampRightIcon style={{ marginRight: "10px" }} /> [PRO] Streams
                of Income
              </NavLink>
            </div>
            <div className="traffic">
              <NavLink to="/traffic">
                <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO] Get
                Traffic
              </NavLink>
            </div>
          </div>
        )}
        {/* sidebar */}
        {matches ? (
          <div>
            <div className={ham ? "home-right" : "home-right1"}>
            <div className="right-header">
                <div className="header-heading">Day 1 Training</div>
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
                  <img src={arrow} alt="arrow" width="15px" height="15px" />
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",

                      paddingRight: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    Training
                  </p>
                </div>
              </div>
              <div className="right-block-container">
                <div className="right-block1">
                  <div
                    className="right-block1-part1-container-day"
                    // style={{ padding: "1.5rem" }}
                  >
                    <iframe
                      width="690"
                      height="385"
                      src="https://www.youtube.com/embed/kOhF_hYYk0U"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-box-day gradient-danger">
                      <h2
                        className="header-title text-center text-white"
                        style={{ fontSize: "28px", margin: "24px 0" }}
                      >
                        Attention
                      </h2>
                      <h4
                        className="text-center text-white"
                        style={{
                          margin: "24px 10px",
                          fontSize: "18px",
                          lineHeight: "25px",
                        }}
                      >
                        Claim Your Free Bonus Scripts and Templates!
                      </h4>
                      <p
                        className="text-center text-white"
                        style={{
                          margin: "24px 5px",
                          fontSize: "16px",
                          lineHeight: "25px",
                        }}
                      >
                        Click The Button and Schedule Your Business Plan Call
                        with an Advisor Right Now!
                      </p>
                      <div align="center">
                        <button type="submit" className="schedule-btn">
                          Schedule Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-right-block2-container-day">
                  <div className="right-block2">
                    <div className="right-block2-inner">
                      <div className="innerheader-container">
                        <p className="innerheader">Your Assignments</p>
                      </div>
                      <div className="right-block2-inner-day">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              1
                            </p>
                          </div>
                        </div>
                        <p className="right-block2-day">
                          Schedule your 1-On-1 Business Plan Call with an
                          Advisor and claim your bonuses. We recommend choosing
                          time as soon as possible - our most successful
                          students got started on their Business Plan right
                          away.
                        </p>
                        <button className="call-btn">SCHEDULE CALL</button>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              2
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            Why did you join Affiliate Indians ?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="TO EARN RS. 5-LAKH PER MONTH."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              3
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            How much you want to earn per month?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="Write Your Views..."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              4
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            What is your goal (car/house/laptop/bike, etc. ) for
                            this year?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="Write Your Views..."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              5
                            </p>
                          </div>
                        </div>
                        <p className="right-block2-day">
                          IMPORTANT: Make sure to mark this lesson complete and
                          click â€œContinue To Next Stepâ€. The next lesson will
                          not unlock unless you do.
                        </p>
                        {/* <button className="call-btn">SCHEDULE CALL</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-right-block2-container-day1">
                  <div className="col-md-12">
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <div
                      className="col-md-6"
                      align="center"
                      style={{ fontSize: "25px", color: "#000" }}
                    >
                      <label style={{ fontSize: "24px" }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        &nbsp; Mark This Lesson Complete
                      </label>
                    </div>
                    <div className="col-md-6"   align="center"
                      style={{ fontSize: "25px", color: "#000" }}>
                      <button className="continue-btn">
                        Continue To Next Step
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={ham ? "home-right1" : "home-right"}>
              <div className="right-header">
                <div className="header-heading">Day 1 Training</div>
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
                  <img src={arrow} alt="arrow" width="15px" height="15px" />
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",

                      paddingRight: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    Training
                  </p>
                </div>
              </div>
              <div className="right-block-container">
                <div className="right-block1">
                  <div
                    className="right-block1-part1-container-day"
                    // style={{ padding: "1.5rem" }}
                  >
                    <iframe
                      width="690"
                      height="385"
                      src="https://www.youtube.com/embed/kOhF_hYYk0U"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-box-day gradient-danger">
                      <h2
                        className="header-title text-center text-white"
                        style={{ fontSize: "28px", margin: "24px 0" }}
                      >
                        Attention
                      </h2>
                      <h4
                        className="text-center text-white"
                        style={{
                          margin: "24px 10px",
                          fontSize: "18px",
                          lineHeight: "25px",
                        }}
                      >
                        Claim Your Free Bonus Scripts and Templates!
                      </h4>
                      <p
                        className="text-center text-white"
                        style={{
                          margin: "24px 5px",
                          fontSize: "16px",
                          lineHeight: "25px",
                        }}
                      >
                        Click The Button and Schedule Your Business Plan Call
                        with an Advisor Right Now!
                      </p>
                      <div align="center">
                        <button type="submit" className="schedule-btn">
                          Schedule Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-right-block2-container-day">
                  <div className="right-block2">
                    <div className="right-block2-inner">
                      <div className="innerheader-container">
                        <p className="innerheader">Your Assignments</p>
                      </div>
                      <div className="right-block2-inner-day">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              1
                            </p>
                          </div>
                        </div>
                        <p className="right-block2-day">
                          Schedule your 1-On-1 Business Plan Call with an
                          Advisor and claim your bonuses. We recommend choosing
                          time as soon as possible - our most successful
                          students got started on their Business Plan right
                          away.
                        </p>
                        <button className="call-btn">SCHEDULE CALL</button>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              2
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            Why did you join Affiliate Indians ?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="TO EARN RS. 5-LAKH PER MONTH."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              3
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            How much you want to earn per month?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="Write Your Views..."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day1">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              4
                            </p>
                          </div>
                        </div>
                        <div className="form-container1">
                          <p className="text">
                            What is your goal (car/house/laptop/bike, etc. ) for
                            this year?
                          </p>
                          <textarea
                            style={{
                              padding: "10px",
                              width: "400px",
                              fontSize: "14px",
                            }}
                            rows="9"
                            placeholder="Write Your Views..."
                          ></textarea>
                          <button className="save-btn">Submit</button>
                        </div>
                      </div>
                      <div className="right-block2-inner-day">
                        <div className="item-container">
                          <div className="item-box">
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#fff",
                                margin: "5px",
                              }}
                            >
                              Assignment
                            </p>
                            <p style={{ fontSize: "18px", color: "#DCB52C" }}>
                              5
                            </p>
                          </div>
                        </div>
                        <p className="right-block2-day">
                          IMPORTANT: Make sure to mark this lesson complete and
                          click â€œContinue To Next Stepâ€. The next lesson will
                          not unlock unless you do.
                        </p>
                        {/* <button className="call-btn">SCHEDULE CALL</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-right-block2-container-day1">
                  <div className="col-md-12">
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <div
                      className="col-md-6"
                      align="center"
                      style={{ fontSize: "25px", color: "#000" }}
                    >
                      <label style={{ fontSize: "24px" }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        &nbsp; Mark This Lesson Complete
                      </label>
                    </div>
                    <div className="col-md-6"   align="center"
                      style={{ fontSize: "25px", color: "#000" }}>
                      <button className="continue-btn">
                        Continue To Next Step
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DayContent;
