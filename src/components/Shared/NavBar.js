import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import StickyHeader from "./StickyHeader";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setAdmin(info));
  }, []);

  // Function to determine the dashboard link based on user role
  const getDashboardLink = () => {
    if (admin && admin.length > 0) {
      const isAdmin = admin.some(
        (userData) =>
          userData.userEmail === user.email && userData.userRole === "Admin"
      );
      if (isAdmin) {
        return "/admin/dashboard"; // Link for admin dashboard
      } else {
        return "/user-dashboard"; // Link for normal user dashboard
      }
    }
    return "/login"; // Default to login if user data is not fetched yet or user role not found
  };

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    <>
      {/* <header id="header_main" className="header">
        <div className="container big">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  {logo.map((showLogo, index) => (
                    <Link to="/" key={index}>
                      <img
                        id="site-logo"
                        src={showLogo.logo}
                        alt="Logo"
                        width={160}
                        height={38}
                        data-width={160}
                        data-height={38}
                      />
                    </Link>
                  ))}
                </div>
                <div className="header__right">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item">
                        <Link to="/">Home</Link>
                      </li>

                      <li className="menu-item">
                        <Link to="/services">Our Services</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                      <li className="menu-item menu-item__dashlink">
                        <Link to="/user-dashboard">Dashboard</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-button">
                    <span />
                  </div>
                </div>
                <div className="header__action">
                  {user ? (
                    <Link className="main-btn" to={getDashboardLink()}>
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="main-btn">
                      <span>Login Now</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div>
        <div className="offcanvas-panel">
          <div className="panel-overlay" />
          <div className="offcanvas-panel-inner">
            <div className="panel-logo">
              {logo.map((showLogo, index) => (
                <Link to="/" key={index}>
                  <img
                    id="site-logo"
                    src={showLogo.logo}
                    alt="Logo"
                    width={160}
                    height={38}
                    data-width={160}
                    data-height={38}
                  />
                </Link>
              ))}
            </div>
            <div className="about-us">
              <h5 className="panel-widget-title">About Us</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore ipsam alias quae cupiditate quas, neque eum magni
                impedit asperiores.
              </p>
            </div>
            <div className="contact-us">
              <h5 className="panel-widget-title">Contact Us</h5>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  121 King St, Melbourne VIC 3000, Australia.
                </li>
                <li>
                  <i className="fal fa-envelope-open" />
                  <a href="mailto:hello@barky.com"> hello@barky.com</a>
                  <a href="mailto:info@barky.com">info@barky.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />
                  <a href="tel:(312)-895-9800">(312) 895-9800</a>
                  <a href="tel:(312)-895-9888">(312) 895-9888</a>
                </li>
              </ul>
            </div>
            <a href="#" className="panel-close">
              <i className="fal fa-times" />
            </a>
          </div>
        </div>
        <header className="theme-header transparent-header">
          {/* header Navigation */}
          <div className="header-navigation navigation-style-v2">
            <div className="nav-overlay" />
            <div className="container-fluid">
              <div className="primary-menu">
                <div className="site-branding">
                  {logo.map((showLogo, index) => (
                    <Link to="/" key={index} className="brand-logo">
                      <img
                        id="site-logo"
                        src={showLogo.logo}
                        alt="Logo"
                        width={160}
                        height={38}
                        data-width={160}
                        data-height={38}
                      />
                    </Link>
                  ))}
                </div>
                <div className="nav-menu nav-ml-auto">
                  {/* Navbar Close */}
                  <div className="navbar-close">
                    <i className="far fa-times" />
                  </div>

                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item ">
                        <Link to="/" className="active nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="menu-item ">
                        <Link to="/services" className="nav-link">
                          Our Service
                        </Link>
                      </li>

                      <li className="menu-item ">
                        <Link to="/about-us" className="nav-link">
                          About Us
                        </Link>
                      </li>

                      <li className="menu-item">
                        <Link to="/contact-us" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-nav">
                  <ul>
                    {user ? (
                      <Link className="main-btn" to={getDashboardLink()}>
                        <span>Dashboard</span>
                      </Link>
                    ) : (
                      <Link to="/login" className="main-btn">
                        <span>Login Now</span>
                      </Link>
                    )}

                    <li className="bar-item"></li>
                    <li className="navbar-toggle-btn">
                      <div className="navbar-toggler">
                        <span />
                        <span />
                        <span />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {shouldRenderPageHero && <StickyHeader />}
      </div>
    </>
  );
};

export default NavBar;
