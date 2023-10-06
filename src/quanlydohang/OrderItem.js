import React from 'react';
import '../css/qldh.css';
function OrderItem({ order }) {
  return (
    <div className="order-item">
      <h3>Đơn hàng #{order.id}</h3>
      <p>Trạng thái: {order.status}</p>
      {/* Hiển thị thông tin chi tiết khác của đơn hàng */}
    </div>
  );
}

export default OrderItem;
