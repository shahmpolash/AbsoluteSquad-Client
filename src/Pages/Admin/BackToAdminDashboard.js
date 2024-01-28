import React from "react";
import { Link } from "react-router-dom";

const BackToAdminDashboard = () => {
  return (
    <div
      className="header__action"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="main-btn" to="/admin/dashboard">
        <span> Admin Dashboard</span>
      </Link>
    </div>
  );
};

export default BackToAdminDashboard;
