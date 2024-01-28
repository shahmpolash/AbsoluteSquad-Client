import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const WhyChooseEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [choose, SetChoose] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);

  const handleWhyEdit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const btnText = event.target.btnText.value;
    const btnUrl = event.target.btnUrl.value;

    const chooseData = {
      title,
      description,
      btnText,
      btnUrl,
    };

    const url = `http://localhost:5000/edit-why-choose/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chooseData),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form mb-15" onSubmit={handleWhyEdit}>
        {choose.map((e) => (
          <div className="container" key={e.id}>
            <div className="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Title</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Banner Top Text"
                    name="title"
                    defaultValue={e.title}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Description</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Description"
                    name="description"
                    defaultValue={e.description}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Button Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Banner Text"
                    name="btnText"
                    defaultValue={e.btnText}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Button URL</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Button URL"
                    name="btnUrl"
                    defaultValue={e.btnUrl}
                  />
                </div>
              </div>

              <div className="col-sm">
                <button type="submit" className="main-btn">
                  <span>Update</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default WhyChooseEdit;
