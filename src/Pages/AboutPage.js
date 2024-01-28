import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AboutUs from "../components/HomePage/AboutUs";
import CounterSection from "../components/HomePage/CounterSection";
import VideoSection from "../components/HomePage/VideoSection";
import FeaturesPage from "./FeaturesPage";

const AboutPage = () => {
  const { id } = useParams();

  const [about, setAbout] = useState([]);
  const [choose, setChoose] = useState([]);
  const [team, setTeam] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/${id}`)
      .then((res) => res.json())
      .then((info) => setChoose(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/teams`)
      .then((res) => res.json())
      .then((info) => setTeam(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
      <section className="about-area about-area-v2 pt-130">
        <div className="container">
          {about.map((e) => (
            <div className="row">
              <div className="col-lg-5">
                <div className="img-holder mb-50 wow fadeInLeft">
                  <div className="shape shape-one animate-float-y">
                    <span>
                      <img src="assets/images/shape/shape-5.png" alt="images" />
                    </span>
                  </div>
                  <img src={e.img} alt="about-images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-wrapper mb-50 wow fadeInRight">
                  <div className="section-title mb-25">
                    <h2> {e.title}</h2>
                  </div>
                  <p>
                    {about.map((AboutData, index) => (
                      <div key={index}>
                        {AboutData.subText
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <p />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CounterSection></CounterSection>
      <VideoSection></VideoSection>
      <FeaturesPage></FeaturesPage>
      </section>
    </>
  );
};

export default AboutPage;
