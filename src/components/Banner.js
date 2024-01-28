import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import { TypeAnimation } from "react-type-animation";
import Swiper from "swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import your icon library

const Banner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [swiper, setSwiper] = useState(null);

  const [banner, setBanner] = useState([]);
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/sliders/`)
      .then((res) => res.json())
      .then((info) => setSliders(info));
  }, [id]);

  useEffect(() => {
    const swiperInstance = new Swiper(".bannerSwiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    setSwiper(swiperInstance);
  }, []);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;
    const auditStatus = event.target.auditStatus.value;
    

    const websiteCheck = {
      email,
      website,
      userMail,
      auditStatus,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/submitted-website");
      });
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing"); // Replace "pricing" with the actual ID of your pricing section
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero-banner-v2 position-relative z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-two-shape-1.png" alt />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/hero-two-shape-2.png" alt />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/hero/hero-two-shape-3.png" alt />
          </span>
        </div>
        <div className="shape shape-four">
          <span>
            <img src="assets/images/hero/dot-pattern.png" alt />
          </span>
        </div>
        <div className="container">
          {banner.map((e) => (
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <span className="sub-title wow fadeInUp">
                    <i className="fas fa-arrow-right" />
                    {e.bannerToptext}
                  </span>
                  <h1 className="wow fadeInUp" data-wow-delay=".5s">
                    {e.bannerHeadingText1}
                  </h1>
                  <p
                    className="wow fadeInDown banner__text"
                    data-wow-delay="1s"
                  >
                    {e.bannertext}
                  </p>
                  <div className="d-flex justify-content-between">
                   
                    <Link
                      to={e.bannerLink}
                      className="main-btn arrow-btn wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      {e.buttonText}
                    </Link>
                    <button
          onClick={handleScrollToPricing}
          className="main-btn arrow-btn wow fadeInUp btn-danger"
        >
          Pricing
        </button>
       
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img wow fadeInRight" data-wow-delay=".9s">
                  <img src={e.bannerImg} alt="images" />
                  <div className="hero-shape hero-shape-one animate-float-x">
                    <span>
                      <img src="assets/images/hero/shape-1.png" alt />
                    </span>
                  </div>
                  <div className="hero-shape hero-shape-two animate-float-y">
                    <span>
                      <img src="assets/images/hero/shape-2.png" alt />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
