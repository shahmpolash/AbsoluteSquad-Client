import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const UserDashboardMenu = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  // Filter the orders with paymentStatus === "Received"
  const receivedOrders = orders.filter(
    (order) =>
      order.paymentStatus === "Received" && order.customerEmail === user?.email
  );

  // Calculate the total spend
  const totalSpend = receivedOrders.reduce(
    (total, order) => total + parseFloat(order.packagePrice),
    0
  );

  return (
    <>
      <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row mb-15">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div>
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
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5">
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://i.postimg.cc/kXKtbTPL/shopping-list-3541315.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/user-dashboard/my-orders/" className="h5 title">
                    <h5 className="blue-dark">
                      {" "}
                      My Orders <br></br>(Total Orders: {receivedOrders.length})
                    </h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9165/9165704.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <h5 className="blue-dark">Total Spent ({totalSpend}$)</h5>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4961/4961759.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/user-dashboard/support/" className="h5 title">
                    <h5 className="blue-dark"> Support</h5>
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

export default UserDashboardMenu;
