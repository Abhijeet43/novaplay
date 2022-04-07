import React, { useState } from "react";
import "../authentication.css";
import { loginService } from "../../../services/";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/";
import { useToggle } from "../../../hooks/useToggle";
import { toast } from "react-toastify";

const Login = () => {
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useToggle(false);
  const navigate = useNavigate();

  const guestUser = {
    email: "user@gmail.com",
    password: "user123",
  };

  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService(user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({
          type: "LOGIN",
          payload: {
            token: response.data.encodedToken,
            user: response.data.foundUser,
          },
        });
        toast.success(`Welcome Back ${response.data.foundUser.firstName}`);
        navigate("/");
      } else {
        throw new Error("Something Went Wrong!!... Try Again Later");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <main className="auth-section">
      <section className="section-form">
        <form action="" onSubmit={submitHandler}>
          <h1 className="form-title">Login</h1>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={changeHandler}
              value={user.email}
              required
            />
          </div>
          <div className="form-group">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={changeHandler}
              value={user.password}
              required
            />
            <i
              className={`fas ${showPass ? "fa-eye-slash" : "fa-eye"}`}
              onClick={setShowPass}
            ></i>
          </div>
          <div className="form-group check-remember">
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox-remember" />
              <label htmlFor="checkbox-remember">Remember Me</label>
            </div>
            <Link to="/forgotpassword" className="form-link">
              Forgot Password?
            </Link>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={guestUserHandler}>
              Add Guest credentials
            </button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p className="register-text">
              Don't have an account?
              <Link to="/signup" className="form-link">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Login };
