import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const [cta, setCta] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => setCta(info[0]));
  }, []);
  return (
    <>
      <section className="cta-area cta-area-v2 position-relative z-2 wow fadeInDown">
        <div className="container">
          <div className="cta-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="text-wrapper">
                  <div className="section-title section-title-white">
                    <h2>{cta.title}</h2>
                    <p>{cta.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="button-box float-lg-right">
                  <Link
                    to={cta.btnUrl}
                    className="main-btn bordered-btn btn-white arrow-btn"
                  >
                    {cta.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
