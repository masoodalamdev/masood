import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/academy/single/Single";
import Write from "./pages/academy/write/Write";
import SongForm from "./components/SongForm/index"
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./app.css"
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Jobs from "./pages/academy/jobs/Jobs";
import Blog from "./pages/academy/blog/Blog";
import Videos from "./pages/academy/videos/Videos";
import Schedule from "./pages/academy/schedule/Schedule";
import Assignment from "./pages/academy/assignment/Assignment";
import News from "./pages/academy/news/News";
import Notices from "./pages/academy/notices/Notices";
import Results from "./pages/academy/results/Results";
import Attendance from "./pages/academy/attendance/Attendance";
import FeeReports from "./pages/academy/feeReports/FeeReports";
import Lectures from "./pages/academy/lectures/Lectures";
import Schools from "./pages/academy/schools/Schools";
import AddSchool from "./pages/addSchool/AddSchool";

import Blogs from "./pages/student/blogs/Blogs";



function App() {
  const {user} = useContext(Context);
  return (
  
    <BrowserRouter>
        <TopBar/>
        <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={user ? <Home/> : <Register />}/>
          <Route path="/login" element={user ? <Home/> : <Login />}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route path="/post/:postId" element={<Single/>}/>
          <Route path="/jobs" element={<Jobs />}/>
          <Route path="/index" element={<SongForm />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/results" element={<Results />}/>
          <Route path="/attendance" element={<Attendance />}/>
          <Route path="/feeReports" element={<FeeReports />}/>
          <Route path="/notices" element={<Notices />}/>
          <Route path="/lectures" element={<Lectures />}/>
          <Route path="/assignment" element={<Assignment />}/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/schools" element={<Schools />}/>
          <Route path="/addSchool" element={<AddSchool />}/>

          {/* student portal */}

          <Route path="/student/blogs" element={<Blogs />}/>



        </Routes>
     </div>
        <Footer/>
  </BrowserRouter>  


  );
}

export default App;
