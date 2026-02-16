import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import mugishaImage from "/mugisha.jpg";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      if (activeTab === "messages") {
        const response = await fetch("http://localhost:5000/api/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setMessages(data);
        } else {
          setError(data.message || "Failed to fetch messages");
        }
      } else {
        const response = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsers(data);
        } else {
          setError(data.message || "Failed to fetch users");
        }
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!token || !user.is_admin) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => {
      fetchData();
    }, 0);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleResolve = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}/resolve`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setMessages(messages.map((msg) => 
          msg.id === id ? { ...msg, status: "resolved" } : msg
        ));
      }
    } catch (err) {
      setError("Failed to resolve message");
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setMessages(messages.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      setError("Failed to delete message");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setUsers(users.filter((u) => u.id !== id));
      } else {
        const data = await response.json();
        setError(data.message || "Failed to delete user");
      }
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-title">
          <img src={mugishaImage} alt="Admin" className="admin-image" />
          <h1>Admin Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="admin-tabs">
        <button
          className={`tab-btn ${activeTab === "messages" ? "active" : ""}`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
        <button
          className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="admin-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : activeTab === "messages" ? (
          <div className="messages-section">
            <h2>Contact Messages</h2>
            {messages.length === 0 ? (
              <p className="no-data">No messages found</p>
            ) : (
              <div className="messages-list">
                {messages.map((msg) => (
                  <div key={msg.id} className={`message-card ${msg.status}`}>
                    <div className="message-header">
                      <span className={`status-badge ${msg.status}`}>
                        {msg.status}
                      </span>
                      <span className="message-date">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="message-details">
                      <p><strong>From:</strong> {msg.name} ({msg.email})</p>
                      <p><strong>Subject:</strong> {msg.subject}</p>
                      <p><strong>Message:</strong> {msg.message}</p>
                    </div>
                    <div className="message-actions">
                      {msg.status !== "resolved" && (
                        <button
                          onClick={() => handleResolve(msg.id)}
                          className="resolve-btn"
                        >
                          Mark Resolved
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="users-section">
            <h2>User Management</h2>
            {users.length === 0 ? (
              <p className="no-data">No users found</p>
            ) : (
              <div className="users-list">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>
                          {u.is_admin ? (
                            <span className="admin-badge">Admin</span>
                          ) : (
                            <span className="user-badge">User</span>
                          )}
                        </td>
                        <td>{new Date(u.created_at).toLocaleDateString()}</td>
                        <td>
                          {!u.is_admin && (
                            <button
                              onClick={() => handleDeleteUser(u.id)}
                              className="delete-btn"
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

