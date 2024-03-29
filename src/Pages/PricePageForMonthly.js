import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricePageForMonthly = () => {
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
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                {title.map((e) => (
                  <div className="block-text center">
                    <h6 className="sub-heading">
                      <span>{e.titleTop}</span>
                    </h6>
                    <h3 className="heading">
                      {e.titleOne} <br />
                      {e.titleTwo}
                    </h3>
                    <p className="mt-15"> {e.description}</p>
                  </div>
                ))}
                <div className="swiper testimonials-swiper s2">
                  <div className="container">
                    <div className="row">
                      {packages.map((p , i) => (
                        <div className="col-lg-4 col-md-6 col-12 margin__mobile">
                          <div className="swiper-slide">
                            <div className="box-testimonial center" key={i}>
                              <div className="image">
                                <img src={p.img} alt="" />
                              </div>
                              <div className="info">
                                <h5 className="name">${p.price} USD</h5>

                                <p>{p.packageName}</p>
                                <img
                                  src="https://themesflat.co/html/cyfoniihtml/assets/images/icon/quote-2.png"
                                  alt=""
                                />
                              </div>
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureOne}</span>
                              </li>
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureTwo}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureThree}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureFour}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureFive}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureSix}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureSeven}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureEight}</span>
                              </li>{" "}
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureNine}</span>
                              </li>
                              <li className="text1">
                                <img
                                  style={margin0}
                                  src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                                  alt="images"
                                ></img>
                                <span>{p.featureTen}</span>
                              </li>
                              <Link class="main-btn" to={`/package/${p._id}`}>
                                {" "}
                                <span>Buy Now</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <section className="pricing-area pricing-area-v1">
                  <div className="container-1350">
                    <div className="pricing-wrapper pt-75 pb-70">
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <div className="section-title text-center mb-55">
                            {title.map((e) => e.packageType === 'Monthly' && (
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
                        {packages.map((e) => e.featureTen === 'Monthly' && (
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

export default PricePageForMonthly;
