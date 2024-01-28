import React from "react";
import { Link } from "react-router-dom";

const HelpDeskMenu = () => {
  return (
    <div className="header__right container custom-orders d-flex justify-content-center align-items-center">
      <nav id="main-nav" className="main-nav">
        <ul id="menu-primary-menu" className="menu custom-orders-ul d-flex justify-content-center align-items-center">
          <li className="menu-item menu-item-has-children mx-2">
            <Link to="/admin/help-desk/open-ticket" className="main-btn">
              Open Ticket
            </Link>
          </li>
          <li className="menu-item menu-item-has-children mx-2">
            <Link to="/admin/help-desk/replied-ticket" className="main-btn">
              Replied Ticket
            </Link>
          </li>
          <li className="menu-item mx-2">
            <Link to="/admin/help-desk/solved-ticket" className="main-btn">
              Solved Ticket
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HelpDeskMenu;
