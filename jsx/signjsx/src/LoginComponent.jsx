import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5023/api/user", {
        emailid,
        password,
      });
  
      // If the response is 200, consider it a success
      if (response.status === 200) {
        navigate("./Dashboard", { state: { userName: "User" } });
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Invalid Email ID or Password");
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email ID"
        value={emailid}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
     

      <style>{`
        .login-container {
          width: 300px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: lightblue;
          
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .login-container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .login-container button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .login-container button:hover {
          background-color: #45a049;
        }

        .error {
          color: red;
          text-align: center;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default LoginComponent;
