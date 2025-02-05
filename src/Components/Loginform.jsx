import React from "react";
import "../Styles/Loginform.css";
import { IoMdClose } from "react-icons/io";

const LoginForm = ({ handleForm, isOpen }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="container">
        <button className="close-btn" onClick={handleForm}>
          <IoMdClose />
        </button>
        <form action="#" method="post" className="form-box">
          <div className="header">
            <h2>Login</h2>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
