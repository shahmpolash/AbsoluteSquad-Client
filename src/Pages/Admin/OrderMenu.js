import React from "react";
import { Link } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OrderMenu = () => {
  return (
    <div className="custom-ordermenu mb-15">
      <BackToAdminDashboard></BackToAdminDashboard>

      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <div class="col mb-3">
            <Link to="/admin/orders/" class="main-btn">
              Total Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders-pending" class="main-btn">
              Pending Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/accepted" class="main-btn">
              Accepted Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/cancelled" class="main-btn">
              Cancelled Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/orders/delivered" class="main-btn">
              Delivered Orders
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/pending" class="main-btn">
              Pending Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/received" class="main-btn">
              Received Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/cancelled" class="main-btn">
              Cancelled Payments
            </Link>
          </div>
          <div class="col mb-3">
            <Link to="/admin/payments/refunded" class="main-btn">
              Refunded Payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
