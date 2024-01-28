import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricePage = () => {
  const margin0 = {
    marginBottom: "0",
    marginRight: "10px",
  };

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <>
      <section
        className="testimonials s2"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
       
        <div className="container" id='pricing'>
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <section className="pricing-area pricing-area-v1">
                  <div className="container-1350">
                    <div className="pricing-wrapper pt-75 pb-70">
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <div className="section-title text-center mb-55">
                            {title.map((e) => e.packageType === 'Fixed' && (
                              <>
                                <h2>
                                  {" "}
                                  {e.titleOne} <br />
                                  {e.titleTwo}
                                </h2>
                                <p>{e.description}</p>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        {packages.map((e) => e.featureTen === 'Fixed' && (
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="pricing-item pricing-item-one mb-40 wow fadeInUp">
                              <div className="pricing-head text-center">
                                <span className="plan">{e.packageName}</span>
                                <h2 className="price">
                                  <span className="currency">$</span>
                                  {e.price}
                                </h2>
                              </div>
                              <div className="pricing-body">
                                <ul className="pricing-list">
                                  <li className="check">{e.featureOne}</li>
                                  <li className="check">{e.featureTwo}</li>
                                  <li className="check">{e.featureThree}</li>
                                  <li className="check">{e.featureFour}</li>
                                  <li className="check">{e.featureFive}</li>
                                  <li className="check">{e.featureSix}</li>
                                  <li className="check">{e.featureSeven}</li>
                                  <li className="check">{e.featureEight}</li>
                                  <li className="check">{e.featureNine}</li>
                                  
                                </ul>
                                <Link
                                  to={`/service-package/${e._id}`}
                                  className="main-btn arrow-btn"
                                >
                                  Choose Plan
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricePage;
