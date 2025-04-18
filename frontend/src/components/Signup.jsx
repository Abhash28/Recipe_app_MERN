import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; //
// Import Bootstrap CSS
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior (page refresh)

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name: user,
        email: email,
        password: password,
      });
      console.log("Login Response:", response.data);
      alert("SignUp successfully");
      setUser("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setUser("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">SignUp</h2>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto border p-4 rounded shadow-sm"
      >
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="user"
            value={user}
            placeholder="Enter your name"
            required
            className="form-control"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            required
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            required
            placeholder="Enter your password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <Link to="/login">Login?</Link>
      </form>
    </div>
  );
}

export default Signup;
