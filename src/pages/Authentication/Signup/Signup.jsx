import React from "react";
import "../authentication.css";

const Signup = () => {
  return (
    <main className="auth-section">
      <section className="section-form">
        <form action="">
          <h1 className="form-title">Sign Up</h1>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <i className="fas fa-eye"></i>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <i className="fas fa-eye"></i>
          </div>
          <div className="form-group">
            <span className="terms">
              By creating an account you agree to our
              <a href="#" className="form-link">
                Privacy Policy
              </a>
              and
              <a href="#" className="form-link">
                Terms of Use
              </a>
            </span>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p className="login-text">
              Already Have an Account?
              <a href="#" className="form-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Signup };
