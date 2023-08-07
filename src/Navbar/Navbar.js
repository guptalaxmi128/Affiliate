import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const [planning, setplanning] = useState(false);
  const [ham, setham] = useState(false);

    const cross = () => {
    setham(!ham);

  };
  
  return (
    <>
      <nav className={ham?"main-nav1":"main-nav"}>
        {/* 1st logo part  */}
        <div className="logo">
          {ham?<img
            className="logopic"
            src="https://affiliateindians.com/ai/assets/logo-small.png"
            alt="location"
          ></img>:      <img
            className="logopic1"
            src="https://affiliateindians.com/ai/assets/logo_white.png"
          
            alt="location"
          ></img>}
        </div>
        <div className="ham">
         <span  className={ham?"top topcross":"top"} onClick={cross}></span>
          <span className={ham?"middle middlecross":"middle"}  onClick={cross}></span>
          <span className={ham?"bottom bottomcross":"bottom"}  onClick={cross}></span>
           </div>
        {/* 2nd menu part  */}
    
          
            <div className="course">
              <NavLink  to="#">
              <div className="course-inner">
              <div><WorkOutlineIcon style={{fontSize:"30px",marginTop:"5px"}} /></div>
               <div style={{marginTop:"10px"}}>My Courses</div>
               </div></NavLink>
            </div>
            <div className="account">
              <NavLink to="#">
              <div className="account-inner">
              <div><PersonOutlineOutlinedIcon style={{fontSize:"30px",marginTop:"5px"}} /></div>
               <div style={{marginTop:"10px"}}> Acccount <KeyboardArrowDownIcon /></div> </div></NavLink>
            </div>

            <div className="support">
              <NavLink to="#">
              <div className="support-inner">
               <div><AttachFileOutlinedIcon style={{fontSize:"30px",transform:"rotate(45deg)",marginTop:"5px"}} /></div>
               <div style={{marginTop:"10px"}}> Support <KeyboardArrowDownIcon /></div> </div>
               </NavLink>
            </div>
            <div className="affiliate">
              <NavLink  to="/affiliateindians"> 
              <div className="affiliate-inner">
               <div><CurrencyRupeeOutlinedIcon style={{fontSize:"30px",marginTop:"5px"}} /></div>
               <div style={{marginTop:"10px"}}> Affiliates</div> </div>
               </NavLink>
            </div>
            <div className="advisor">
              <NavLink  to="#">
              <div className="advisor-inner">
               <div><ContactMailOutlinedIcon style={{fontSize:"30px",marginTop:"5px"}} /></div>
               <div style={{marginTop:"10px"}}> My Advisor</div> </div>
               </NavLink>
            </div>
       
    

      </nav>


    </>
  );
};

export default Navbar;
