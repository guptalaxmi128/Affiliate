import {BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Leads from './leads/leads'
import Affiliate from './affiliate/affiliate'
import Home from "./Home/Home";
import Commision from "./commisions/commisions";
import Ewallet from "./ewallet/ewallet"
import  Members from "./members/members"
import  Rank from "./ranks/ranks"
import  Reports from "./reports/reports"
import  Traffic from "./traffic/traffic"
import  Stream from "./streams/streams"
import  LeaderBoard from "./leaderboard/leaderboard"
import  Dashboard from "./Admin/Dashboard/Dashboard";
import  Registeredusers from "./Admin/Registeredusers/Registeredusers";
import  Lead from "./Admin/Lead/Lead";
import  Member from "./Admin/Members/Members";
import  Addadvisor from "./Admin/Addadvisor/Addadvisor";
import  Viewadvisor from "./Admin/Viewadvisor/Viewadvisor";
import  Schedulebooking from "./Admin/Schedulebooking/Schedulebooking";
import  Schedulecalls from "./Admin/Schedulecalls/Schedulecalls";
import  Mybooking from "./Admin/Mybooking/Mybooking";
import  Ewallets from "./Admin/Ewallets/Ewallets";
import Course from "./courses/Course";
import Login from "./login/Login";
import Basic from "./courses/basic/Basic";
import Beginner from "./courses/beginner/Beginner";
import Pro from "./courses/pro/Pro";
import Expert from "./courses/expert/Expert";
import BasicContent from "./courses/basic/basicContent/BasicContent";
import AffiliateIndianModel from "./courses/beginner/affiliateIndianModel/AffiliateIndianModel";
import AffiliateNicheBluePrint from "./courses/beginner/affiliateNicheBluePrint/AffiliateNicheBluePrint";
import AffiliateProduct from "./courses/beginner/affiliateProduct/AffiliateProduct";
import AffiliateFunnel from "./courses/beginner/affiliateFunnel/AffiliateFunnel";
import InternetTraffic from "./courses/beginner/internetTraffic/InternetTraffic";
import EmailMarketing from "./courses/beginner/emailMarketing/EmailMarketing";
import AffiliateBudget from "./courses/beginner/affiliateBudget/AffiliateBudget";
import Profile from "./profile/Profile";
import DayContent from "./profile/DayContent";
import FAQs from "./faqs/FAQs";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/affiliateindians" element={<Home/>}/>
      {/* Admin panel start */}
      <Route path="/lead" element={<Leads/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Viewadvisor" element={<Viewadvisor/>}/>
      <Route path="/Registeredusers" element={<Registeredusers/>}/>
      <Route path="/Leads" element={<Lead/>}/>
      <Route path="/Member" element={<Member/>}/>
      <Route path="/Addadvisor" element={<Addadvisor/>}/>
      <Route path="/Schedulebooking" element={<Schedulebooking/>}/>
      <Route path="/Schedulecalls" element={<Schedulecalls/>}/>
      <Route path="/Mybooking" element={<Mybooking/>}/>
      <Route path="/Ewallets" element={<Ewallets/>}/>
      {/* Admin panel end */}
      <Route path="/affiliate" element={<Affiliate/>}/>
      <Route path="/commisions" element={<Commision/>}/>
      <Route path="/ewallet" element={<Ewallet/>}/>
      <Route path="/leaderboard" element={<LeaderBoard/>}/>
      <Route path="/members" element={<Members/>}/>
      <Route path="/rank" element={<Rank/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/traffic" element={<Traffic/>}/>
      <Route path="/stream" element={<Stream/>}/>
      <Route path="/courses" element={<Course/>}/>
      <Route path="/basic" element={<Basic/>}/>
      <Route path="/beginner" element={<Beginner/>}/>
      <Route path="/pro" element={<Pro/>}/>
      <Route path="/expert" element={<Expert />}/>
      <Route path="/basic-content" element={<BasicContent />}/>
      {/* beginner cards start */}
      <Route path="/affiliate-indian-model" element={<AffiliateIndianModel />}/>
      {/* <Route path="/affiliate-niche-blueprint" element={<AffiliateNicheBluePrint />}/>
      <Route path="/affiliate-product" element={<AffiliateProduct />}/>
      <Route path="/affiliate-funnel" element={<AffiliateFunnel />}/>
      <Route path="/internet-traffic" element={<InternetTraffic />}/>
      <Route path="/email-marketing" element={<EmailMarketing />}/>
      <Route path="/affiliate-budget" element={<AffiliateBudget />}/> */}
      {/* beginner cards end */}
    <Route path="/profile" element={<Profile />}/> 
    <Route path="/day-content" element={<DayContent />}/>
    <Route path="/FAQs" element={<FAQs />}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
