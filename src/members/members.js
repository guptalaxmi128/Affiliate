import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WebIcon from "@mui/icons-material/Web";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ErrorIcon from "@mui/icons-material/Error";
import RampRightIcon from "@mui/icons-material/RampRight";
import "../Home/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import "./members.css";
function Members() {
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
          <NavLink to="#">
            <div className="account-inner">
              <div>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: "30px", marginTop: "5px" }}
                />
              </div>
              <div className="item" style={{ marginTop: "10px" }}>
                Acccount <KeyboardArrowDownIcon />
              </div>
            </div>
          </NavLink>
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
          <NavLink to="/affiliateindians">
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
                      <NavLink to="/affiliateindians">
                        <WebIcon style={{ marginRight: "10px" }} /> Start Here
                      </NavLink>
                    </div>
                    <div className="wallet">
                      <NavLink to="/ewallet">
                        <FolderOpenIcon style={{ marginRight: "10px" }} />{" "}
                        eWallet
                      </NavLink>
                    </div>
                    <div className="links">
                      <NavLink to="/affiliate">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Affiliate Links
                      </NavLink>
                    </div>
                    <div className="leads">
                      <NavLink to="/lead">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />
                        Leads
                      </NavLink>
                    </div>
                    <div className="members">
                      <NavLink to="/members">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Members
                      </NavLink>
                    </div>
                    <div className="reports">
                      <NavLink to="/reports">
                        <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                        Reports
                      </NavLink>
                    </div>
                    <div className="rank">
                      <NavLink to="/rank">
                        <ShowChartOutlinedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Rank
                      </NavLink>
                    </div>
                    <div className="leader">
                      <NavLink to="/leaderboard">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
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
                        <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
                        Streams of Income
                      </NavLink>
                    </div>
                    <div className="traffic">
                      <NavLink to="/traffic">
                        <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO]
                        Get Traffic
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
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
                        <NavLink to="/affiliateindians">
                          <div className="start1-content1">Start Here</div>
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
                        <NavLink to="/affiliateindians">
                          <div className="start1-content1">Start Here</div>
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
                      <NavLink to="/affiliateindians">
                        <WebIcon style={{ marginRight: "10px" }} /> Start Here
                      </NavLink>
                    </div>
                    <div className="wallet">
                      <NavLink to="/ewallet">
                        <FolderOpenIcon style={{ marginRight: "10px" }} />{" "}
                        eWallet
                      </NavLink>
                    </div>
                    <div className="links">
                      <NavLink to="/affiliate">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Affiliate Links
                      </NavLink>
                    </div>
                    <div className="leads">
                      <NavLink to="/lead">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />
                        Leads
                      </NavLink>
                    </div>
                    <div className="members">
                      <NavLink to="/members">
                        <PeopleOutlineIcon style={{ marginRight: "10px" }} />{" "}
                        Members
                      </NavLink>
                    </div>
                    <div className="reports">
                      <NavLink to="/reports">
                        <ArticleOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                        Reports
                      </NavLink>
                    </div>
                    <div className="rank">
                      <NavLink to="/rank">
                        <ShowChartOutlinedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Rank
                      </NavLink>
                    </div>
                    <div className="leader">
                      <NavLink to="/leaderboard">
                        <FormatListBulletedIcon
                          style={{ marginRight: "10px" }}
                        />{" "}
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
                        <RampRightIcon style={{ marginRight: "10px" }} /> [PRO]
                        Streams of Income
                      </NavLink>
                    </div>
                    <div className="traffic">
                      <NavLink to="/traffic">
                        <DragHandleIcon style={{ marginRight: "10px" }} /> [PRO]
                        Get Traffic
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
                <div
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    paddingLeft: "10px",
                  }}
                >
                  Members
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
                    Members
                  </p>
                </div>
              </div>
              <div className="right-block-container">
                <div className="right-block1">
                  <div className="right-block1-part1-container">
                    <div className="right-block1-part1">
                      <p style={{ fontSize: "28px", color: "#fff" }}>
                        Welcome to Affiliate Indians
                      </p>
                      <p style={{ fontSize: "18px", color: "#fff" }}>
                        <center>
                          Complete the assignment below and get Your Rankings
                        </center>
                      </p>
                    </div>
                  </div>
                  <div className="right-block1-part2"></div>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingLeft: "25px",
                    paddingTop: "0px",
                    paddingBottom: "10px",
                    fontWeight: "900",
                  }}
                >
                  <ErrorIcon style={{ marginRight: "7px" }} />
                  <i>Tables can be scrolled horizontally</i>
                </div>
                <div className="member-right-block2-container">
                  <div className="member-right-block2">
                    <div className="member-right-block2-header">
                      <div className="member-right-block2-header1">Sr No.</div>
                      <div className="member-right-block2-header2">Date</div>
                      <div className="member-right-block2-header3">User Id</div>
                      <div className="member-right-block2-header4">
                        Course Id
                      </div>
                      <div className="member-right-block2-header5">Name</div>
                      <div className="member-right-block2-header6">Email</div>
                      <div className="member-right-block2-header7">Phone</div>
                    </div>
                    <div className="member-right-block2-body1">
                      <div className="member-right-block2-body1-part1">0</div>
                      <div className="member-right-block2-body1-part2">
                        2022-04-24
                      </div>
                      <div className="member-right-block2-body1-part3">
                        1518
                      </div>
                      <div className="member-right-block2-body1-part4">2</div>
                      <div className="member-right-block2-body1-part5">
                        DHanesh ygubhnk
                      </div>
                      <div className="member-right-block2-body1-part6">
                        tfvyg@gbh.y
                      </div>
                      <div className="member-right-block2-body1-part7">
                        2543678956
                      </div>
                    </div>
                    <div className="member-right-block2-body2">
                      <div className="member-right-block2-body2-part1">0</div>
                      <div className="member-right-block2-body2-part2">
                        2022-04-24
                      </div>
                      <div className="member-right-block2-body2-part3">
                        1517
                      </div>
                      <div className="member-right-block2-body2-part4">2</div>
                      <div className="member-right-block2-body2-part5">
                        DHanesh ygubhnk
                      </div>
                      <div className="member-right-block2-body2-part6">
                        tfvyg@gbh.y
                      </div>
                      <div className="member-right-block2-body2-part7">
                        1256489745
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright">2020 © copyright</div>
            </div>
          </div>
        ) : (
          <div>
            <div className={ham ? "home-right1" : "home-right"}>
              <div className="right-header">
                <div className="header-heading">Members</div>
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
                    Members
                  </p>
                </div>
              </div>
              <div className="right-block-container">
                <div className="right-block1">
                  <div className="right-block1-part1-container">
                    <div className="right-block1-part1">
                      <p style={{ fontSize: "28px", color: "#fff" }}>
                        Welcome to Affiliate Indians
                      </p>
                      <p style={{ fontSize: "18px", color: "#fff" }}>
                        <center>
                          Complete the assignment below and get Your Rankings
                        </center>
                      </p>
                    </div>
                  </div>
                  <div className="right-block1-part2"></div>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    paddingLeft: "25px",
                    paddingTop: "0px",
                    paddingBottom: "10px",
                    fontWeight: "900",
                  }}
                >
                  <ErrorIcon style={{ marginRight: "7px" }} />
                  <i>Tables can be scrolled horizontally</i>
                </div>
                <div className="member-right-block2-container">
                  <div className="member-right-block2">
                    <div className="member-right-block2-header">
                      <div className="member-right-block2-header1">Sr No.</div>
                      <div className="member-right-block2-header2">Date</div>
                      <div className="member-right-block2-header3">User Id</div>
                      <div className="member-right-block2-header4">
                        Course Id
                      </div>
                      <div className="member-right-block2-header5">Name</div>
                      <div className="member-right-block2-header6">Email</div>
                      <div className="member-right-block2-header7">Phone</div>
                    </div>
                    <div className="member-right-block2-body1">
                      <div className="member-right-block2-body1-part1">0</div>
                      <div className="member-right-block2-body1-part2">
                        2022-04-24
                      </div>
                      <div className="member-right-block2-body1-part3">
                        1518
                      </div>
                      <div className="member-right-block2-body1-part4">2</div>
                      <div className="member-right-block2-body1-part5">
                        DHanesh ygubhnk
                      </div>
                      <div className="member-right-block2-body1-part6">
                        tfvyg@gbh.y
                      </div>
                      <div className="member-right-block2-body1-part7">
                        2543678956
                      </div>
                    </div>
                    <div className="member-right-block2-body2">
                      <div className="member-right-block2-body2-part1">0</div>
                      <div className="member-right-block2-body2-part2">
                        2022-04-24
                      </div>
                      <div className="member-right-block2-body2-part3">
                        1517
                      </div>
                      <div className="member-right-block2-body2-part4">2</div>
                      <div className="member-right-block2-body2-part5">
                        DHanesh ygubhnk
                      </div>
                      <div className="member-right-block2-body2-part6">
                        tfvyg@gbh.y
                      </div>
                      <div className="member-right-block2-body2-part7">
                        1256489745
                      </div>
                    </div>
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

export default Members;
