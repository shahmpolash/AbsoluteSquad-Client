import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditBanner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, [id]);

  const [user] = useAuthState(auth);

  const handleBanner = (event) => {
    event.preventDefault();
    const bannerToptext = event.target.bannerToptext.value;
    const bannerHeadingText1 = event.target.bannerHeadingText1.value;
    const bannerImg = event.target.bannerImg.value;
    const bannertext = event.target.bannertext.value;
    const buttonText = event.target.buttonText.value;
    const bannerLink = event.target.bannerLink.value;

    const updateBanner = {
      bannerToptext,
      bannerHeadingText1,
      bannerImg,
      bannertext,
      buttonText,
      bannerLink,
    };

    const url = `http://localhost:5000/edit-banner/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form class="form mb-15" onSubmit={handleBanner}>
        {banner.map((e) => (
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Banner Top Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Top Text"
                    name="bannerToptext"
                    defaultValue={e.bannerToptext}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">
                  Enter Banner Heading Text
                </label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Heading Text"
                    name="bannerHeadingText1"
                    defaultValue={e.bannerHeadingText1}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Image URL</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Image URL"
                    name="bannerImg"
                    defaultValue={e.bannerImg}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Text"
                    name="bannertext"
                    defaultValue={e.bannertext}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Button Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Button Text"
                    name="buttonText"
                    defaultValue={e.buttonText}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Banner Link</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Link"
                    name="bannerLink"
                    defaultValue={e.bannerLink}
                  />
                </div>
              </div>

              <div class="col-sm">
                <button type="submit" class="main-btn arrow-btn">
                  <span>Update Bannner</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditBanner;
