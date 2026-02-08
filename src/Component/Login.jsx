import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    console.log("Login attempt:", { email, password });
    // Redirect to home page
    navigate("/");
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <p className="login-subtitle">Welcome to Garden TVET School</p>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
            <p>
              <a href="/forgot">Forgot your password?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
