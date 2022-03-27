import React from "react";
import "../authentication.css";

const Login = () => {
  const guestUser = {
    email: "user@gmail.com",
    password: "user123",
  };

  return (
    <main className="auth-section">
      <section className="section-form">
        <form action="">
          <h1 className="form-title">Login</h1>
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
          <div className="form-group check-remember">
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox-remember" />
              <label htmlFor="checkbox-remember">Remember Me</label>
            </div>
            <a href="#" className="form-link">
              Forgot Password?
            </a>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Add Guest credentials</button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p className="register-text">
              Don't have an account?
              <a href="#" className="form-link">
                Signup
              </a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export { Login };
