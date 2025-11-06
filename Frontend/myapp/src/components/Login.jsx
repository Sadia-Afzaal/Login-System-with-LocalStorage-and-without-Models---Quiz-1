import { useState } from "react";
import { sanitizeInput } from "../utils/sanitizeInput";
import { regEmailTest } from "../utils/regEmailTest";
import { charLength } from "../utils/charLength";

function Login() {
  // States for errors
  const [errorOverallState, setErrorOverallState] = useState("");
  const [errorEmailState, setErrorEmailState] = useState("");
  const [errorPassState, setErrorPassState] = useState("");

  // Initialize states for all input fields
  const [InputData, setInputData] = useState({
    emailField: "",
    passField: ""
  });

  // Function to update values of states when user types
  const onChangeInputData = (event) => {
    setInputData({ ...InputData, [event.target.name]: event.target.value });
  };

  // Sending login data to backend for validation
  const loginUser = async (loginEmail, password) => {
    const myEndpoint = "http://localhost:5000/user/login-user/";
    try {
      const response = await fetch(myEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginEmail: loginEmail,
          password: password
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const resJSON_Data = await response.json();
      
      if(resJSON_Data.resStatus === "true"){
        alert("Login successful! Redirecting to Dashboard...");
        localStorage.setItem("userToken", resJSON_Data.token);
        localStorage.setItem("userData", JSON.stringify(resJSON_Data.user));
        window.location.replace("/dashboard/");
      } else {
        setErrorOverallState(resJSON_Data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setErrorOverallState("Network error. Please try again.");
    }
  };

  // When form is submitted
  const handleForm = (event) => {
    event.preventDefault(); // avoid page loading when form is submitted

    // Reset previous errors
    setErrorOverallState("");
    setErrorEmailState("");
    setErrorPassState("");

    let errorOverall = 1; // assume no errors initially

    // Validating emailField
    let emailField_get = sanitizeInput(InputData.emailField);
    if (emailField_get === "") {
      setErrorEmailState("Please enter email");
      errorOverall = 0;
    } else if(regEmailTest(emailField_get) === 0) {
      setErrorEmailState("Invalid Email format");
      errorOverall = 0;
    }

    // Validating passField
    let passField_get = sanitizeInput(InputData.passField);
    if (passField_get === "") {
      setErrorPassState("Please enter password");
      errorOverall = 0;
    } else if (charLength(passField_get, 6, 35) === 0) {
      setErrorPassState("Password should be 6 to 35 characters");
      errorOverall = 0;
    }

    // Stop execution if errors exist
    if (errorOverall === 0) {
      setErrorOverallState("Please enter all data in correct format");
      return; // stops the function here
    }

    console.log("Login attempt - Email:", emailField_get);
    loginUser(emailField_get, passField_get);
  };

  return (
    <div className="login-container">
  <div className="login-box">
      {errorOverallState && (
        <p style={{color: "red"}}>{errorOverallState}</p>
      )}
      <h1>Login</h1>
      <form onSubmit={handleForm}>

        <label htmlFor="email">Email</label><br />
        {errorEmailState && (
          <p style={{color: "red"}}>{errorEmailState}</p>
        )}
        <input 
          type="email" 
          name="emailField" 
          id="emailField" 
          value={InputData.emailField} 
          onChange={onChangeInputData} 
          placeholder="abobakar@gmail.com" 
        />
        <br />

        <label htmlFor="password">Password</label><br />
        {errorPassState && (
          <p style={{color: "red"}}>{errorPassState}</p>
        )}
        <input 
          type="password" 
          name="passField" 
          id="passField" 
          value={InputData.passField} 
          onChange={onChangeInputData} 
          placeholder="Enter your password" 
        />
        <br />

        <button type="submit">Login</button>
      </form>
      
      <p className="register-link">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
    </div>
     
  );
}

export default Login;