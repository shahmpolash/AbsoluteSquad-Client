import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutUs = () => {
  const { id } = useParams();
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

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

                  <Link
                    to={e.btnUrl}
                    className="main-btn bordered-btn btn-blue"
                  >
                    {e.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
