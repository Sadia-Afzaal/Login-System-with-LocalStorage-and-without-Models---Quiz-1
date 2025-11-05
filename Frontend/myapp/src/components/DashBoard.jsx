/* File: src/pages/Dashboard.jsx */
import React, { useState, useEffect  } from 'react';


import "../App.css";

const DashBoard = () => {
   const [userEmail, setuserEmail] = useState("");
  const [userName, setuserName] = useState("");
 
  const getDataFromApi = async(token)=>{
    let myEndpoint = "http://localhost:5000/user/get-profile/";
      let dataFetched = await fetch(myEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log("received Data: ", dataFetched);
      let parsedData = await dataFetched.json(); /* Must wait for myData.json */
      //console.log("parsed received Data: ", parsedData);
      if (parsedData.message !== "OK") {
        window.location.replace("/register/");
      }
      setuserEmail(parsedData.userData.regEmail);
      setuserName(parsedData.userData.regName);
  }
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    //console.log("token from browser: ", token)
    if (!token) {
      alert("Please register or login first!");
      window.location.replace("/register/");
    }else{
      //console.log("token exists...");
      getDataFromApi(token);
    }
  }, []);
 
  // Logout function
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("userToken");
 
    // Redirect to login/register page and reload (fresh page)
    window.location.replace("/register"); // or "/login"
  };
 
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">TechBlog</h2>
        <ul className="sidebar-menu">
          <li>📊 Overview</li>
          <li>📝 My Posts</li>
          <li>💬 Comments</li>
          <li>👤 Profile</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      {/* Main content area */}
      <main className="main-content">
        <header className="topbar">
          <h1>Welcome Back, Zarish 👋</h1>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="cards-section">
          <div className="card">
            <h3>Total Posts</h3>
            <p>24</p>
          </div>
          <div className="card">
            <h3>Comments</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Followers</h3>
            <p>89</p>
          </div>
        </section>

        <section className="activity-section">
          <h2>Recent Activity</h2>
          <ul>
            <li>📝 You published “AI Trends in 2025”</li>
            <li>💬 Someone commented on “Understanding React Hooks”</li>
            <li>🛠 Profile updated successfully</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
