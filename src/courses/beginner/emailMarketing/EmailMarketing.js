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
import RampRightIcon from "@mui/icons-material/RampRight";
import "../../../Home/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import avtar from "../../../assets/avtar.png";
import arrow from "../../../assets/arrow-right.png";
import "../../basic/basicContent/basicContent.css";
function EmailMarketing() {
  const [ham, setham] = useState(false);
  const [fileName, setFileName] = useState("");
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1030px)").matches
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };

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
                <div className="sidebar-container-1">
                      <div className="home-left">
                        <div className="slimScrollDiv">
                          <ul className="metismenu">
                            <li>
                              <div className="title">
                                <NavLink to="#">
                                  <div style={{ display: "flex" }}>
                                    <PlayCircleIcon
                                      style={{ marginRight: "8px",marginTop:'5px' }}
                                    />
                                    <p
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {" "}
                                      How To Get The Best Value From This
                                      Challenge?(8:17)
                                    </p>
                                  </div>
                                </NavLink>
                              </div>
                            </li>
                            <li>
                              <div className="title">
                                <NavLink to="#">
                                  <div style={{ display: "flex" }}>
                                    <PlayCircleIcon
                                      style={{ marginRight: "8px",marginTop:'5px' }}
                                    />
                                    <p
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        
                                      }}
                                    >
                                      {" "}
                                      My Introduction & Future Scope Of
                                      Affiliate Marketing In India (26:13)
                                    </p>
                                  </div>
                                </NavLink>
                              </div>
                            </li>
                          </ul>
                        </div>
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
                  Affiliate Indian Blueprints
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
                  ></p>
                  <p
                    style={{
                      color: "#9BA3AA",
                      fontSize: "18px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Training
                  </p>
                </div>
              </div>
              <div className="right-block-container">
                <div className="right-block1"></div>
              </div>
              <div className="copyright">2020 © copyright</div>
            </div>
          </div>
        ) : (
          <div>
         
            <div className={ham ? "home-right1 content-container" : "home-right content-container"}>
           
              <div className="right-header">
                <div className="header-heading">
                  How To Get The Best Value From This Challenge? (8:17)
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
                <div className="row">
                  <div className="col-xl">
                    <iframe
                      src="https://iframe.mediadelivery.net/embed/129728/b203ae0c-e4f1-4997-b53f-f57a643d9174"
                      title="Affiliate Indian"
                      // frameBorder="0"
                      allowFullScreen
                      width="100%"
                      height="500px"
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card-box">
                      <div>
                        <table className="table table-centered table-striped table-bordered table-hover mb-0">
                          <thead>
                            <tr>
                              <td
                                style={{
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  background: "#000",
                                  color: "#fff",
                                  paddingLeft: "20px",
                                }}
                              >
                                <b>Post a Comment</b>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ background: "#f1f5f7 !important" }}>
                              <td>
                                <div style={{ display: "flex" }}>
                                  <img
                                    src={avtar}
                                    alt="avtar"
                                    width={40}
                                    height={40}
                                    className="rounded-circle"
                                    style={{
                                      marginLeft: "20px",
                                      marginRight: "20px",
                                    }}
                                  />
                                  <div className="col-md-6">
                                    <p
                                      style={{
                                        color: "#000",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        fontFamily: "sans-serif",
                                        marginLeft: "8px",
                                      }}
                                    >
                                      Prakhar Kulshrestha
                                    </p>
                                    <input
                                      type="file"
                                      id="file-upload"
                                      name="file-upload"
                                      onChange={handleFileChange}
                                      className="input"
                                    />
                                    {fileName && <span>{fileName}</span>}
                                    <textarea
                                      rows="6"
                                      className="form-control"
                                      placeholder="Write Your Views..."
                                      style={{ marginLeft: "10px" }}
                                    />
                                    <br />
                                    <button
                                      type="submit"
                                      className="btn1 btn-hover"
                                    >
                                      Post Comment
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

export default EmailMarketing;
