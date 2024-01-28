import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState({});
  const [social, setSocial] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-links`)
      .then((res) => res.json())
      .then((info) => setFooter(info[0]));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setSocial(info[0]));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const newsLetter = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const contact = {
      email,
    };

    const url = `http://localhost:5000/add-newsLetter/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/news-letter-submit");
      });
  };

  return (
    <>
      <div className="pt-185"></div>
      <footer className="footer-area footer-gradient-bg position-relative z-1 pt-185">
        <div className="shape">
          <span />
        </div>
        <div className="container">
          <div className="footer-widget pb-40">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".15s"
                >
                  {logo.map((show) => (
                    <img className="footer__logo" src={show.logo} alt="Logo" />
                  ))}

                  <ul className="widget-nav">
                    <p className="mt-3 text-dark">{footer.FooterAbout}</p>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".20s"
                >
                  <h4 className="widget-title">Links</h4>
                  <ul className="widget-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget social-widget mb-40 wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <h4 className="widget-title">Follow</h4>
                  <ul className="social-nav">
                    <li>
                      <Link to={social.instragram}>
                        <i className="fab fa-instagram" />
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to={social.twitter}>
                        <i className="fab fa-twitter" />
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link to={social.facebook}>
                        <i className="fab fa-behance" />
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to={social.youtube}>
                        <i className="fab fa-youtube" />
                        Youtube
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay=".30s"
                >
                  <div className="newsletter-content">
                    <h3>Subscribe Our Newsletter</h3>

                    <form onSubmit={newsLetter}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                        <button className="main-btn">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>{footer.CopyRight}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-nav float-lg-right">
                  <ul>
                    <li>
                      <div className="">
                        {" "}
                        <img
                          src="https://i.postimg.cc/G2GDpmcT/icon.png"
                          class="img-fluid rounded-top"
                          width={30}
                          alt=""
                        />{" "}
                        {social.email}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
