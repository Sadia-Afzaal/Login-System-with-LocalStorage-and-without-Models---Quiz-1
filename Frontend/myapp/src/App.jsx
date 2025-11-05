import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from  "./components/DashBoard";
import Register from "./components/Register";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
// File: App.jsx located in src folder
import { useState } from "react";
import { useEffect } from "react";
 

  
function App() {
//    const [successValue, setsuccessValue] = useState("");
//   const [dataArray, setdataArray] = useState([]);
 
// const getDataFromApi = async () =>{
 
//   let myEndpoint = "http://localhost:5000/user/all-user/";
//   let myData = await fetch(myEndpoint);
//   //console.log("received Data: ", myData);
//   let parsedData = await myData.json(); /* Must wait for myData.json */
//   console.log("parsed received Data: ", parsedData);
 
//   let successData = parsedData.success;
//   console.log("successData: ", successData);
//   setsuccessValue(successData);
 
//   let getDataFetch = parsedData.getData;
//   console.log("getDataFetch: ", getDataFetch);
//   setdataArray(getDataFetch);
 
// }
 
//   useEffect(() => {
//     getDataFromApi();
     
//   }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
         {/* <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Contact />
              
            </>
          } */}
        {/* /> */}
        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

    //  <div>
    //   <h1 style={{textAlign: "center"}}>Basic application<br />for<br />Fetching API</h1>
    //   <p><b>Success State: </b>{successValue}</p>
    //   <h3>Data from Database</h3>
    //   {dataArray.map((element, index)=>{
    //     return (
    //         <div key={index}>
    //           <p><u> Row {index} in the Database</u></p>
    //           <p><b>Email: </b> {element.email} <br/></p>
    //           <p style={{marginBottom: "50px"}}><b>Name: </b> {element.fname}</p>
    //         </div>
    //       );
    //   })}
    // </div>
  );
  
}

export default App;
