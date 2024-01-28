import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Message sent successfully!");
  };
  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info[0]));
  }, [id]);

  const UserContactMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    const date = event.target.date.value;
    const messageStatus = event.target.messageStatus.value;

    const contact = {
      name,
      email,
      message,
      subject,
      date,
      messageStatus,
    };

    const url = `http://localhost:5000/add-contact-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        notifySuccess();
        navigate("/message-sent-success");
      });
  };
  // Function to get the current date in yyyy-MM-dd format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <section className="contact-area contact-area-v2 pt-80 pb-125">
        <div className="container-1350">
          <div className="contact-wrapper pt-70 pb-40">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-wrapper mb-40 wow fadeInLeft">
                  <h2>{contact.titleOne}</h2>
                  <p>
                    On the other hand denounce righteous indigna tion and
                    dislike men who are beguiled and demra charms of pleasure of
                    the moment
                  </p>
                  <div className="information-style-two d-flex mb-20">
                    <div className="icon">
                      <i className="far fa-envelope-open" />
                    </div>
                    <div className="info">
                      <h5 className="blue-dark">Email Us</h5>
                      <h4>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </h4>
                    </div>
                  </div>
                  <div className="information-style-two d-flex mb-20">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="info">
                      <h5 className="blue-dark">Phone Us</h5>
                      <h4>
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      </h4>
                    </div>
                  </div>
                  <div className="information-style-two d-flex mb-20">
                    <div className="icon">
                      <i className="far fa-map" />
                    </div>
                    <div className="info">
                      <h5 className="blue-dark">Location</h5>
                      <h4>
                        <p>{contact.address}</p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form mb-40 wow fadeInRight">
                  <h2>{contact.titleTwo}</h2>
                  <form onSubmit={UserContactMessage}>
                    <input
                      type="date"
                      hidden
                      name="date"
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
                    />
                    <input
                      hidden
                      type="text"
                      name="messageStatus"
                      value="UnRead"
                    />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Subject"
                            name="subject"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            type="text"
                            className="form_control"
                            placeholder="message"
                            name="message"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn arrow-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
