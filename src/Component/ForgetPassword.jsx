import { useState } from "react";
import "./ForgetPassword.css";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setMessage("If an account exists for this email, a reset link has been sent.");
    setTimeout(() => navigate("/"), 2200);
  };

  return (
    <section className="forgot-section">
      <div className="forgot-container">
        <div className="forgot-box">
          <h1>Reset Password</h1>
          <p className="forgot-subtitle">Enter your email to receive reset instructions</p>

          <form onSubmit={handleSubmit} className="forgot-form">
            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}

            <div className="form-group">
              <label htmlFor="fp-email">Email Address</label>
              <input
                id="fp-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <button type="submit" className="forgot-btn">Send Reset Link</button>
          </form>

          <div className="forgot-footer">
            <p>
              Remembered your password? <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
