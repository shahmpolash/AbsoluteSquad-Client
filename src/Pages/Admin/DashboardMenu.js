import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import BackToAdminDashboard from "./BackToAdminDashboard";

const DashboardMenu = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <>
      <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row mb-3 mt-5">
            <div className="col text-right">
              {user ? (
                <Link className="main-btn" onClick={handleSignout}>
                  <span>Signout</span>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          {/* new */}

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1225/1225258.png?uid=R54525292"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/packages/" className="h5 title">
                    <h5 className="blue-dark">Package Edit</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/kXKtbTPL/shopping-list-3541315.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/orders/" className="h5 title">
                    <h5 className="blue-dark">Total Orders</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/Vkw0BXYv/setting-12711143.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting" className="h5 title">
                    <h5 className="blue-dark">Setting Option</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/jjK9b3RT/help-desk-4840332.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/help-desk/" className="h5 title">
                    <h5 className="blue-dark">Help Desk</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/13DTb1hM/email-4213166.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/subscription-email/" className="h5 title">
                    <h5 className="blue-dark"> Subscription Email</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/contact-messages/" className="h5 title">
                    <h5 className="blue-dark"> Contact Messages</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/wBVrT5Bm/team-management-8526176.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/manage-users/" className="h5 title">
                    <h5 className="blue-dark"> Manage Users</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/NMjzyyyP/investigation-9773465.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/audit-request/" className="h5 title">
                    <h5 className="blue-dark">Audit Request</h5>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardMenu;
