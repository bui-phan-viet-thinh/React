import React from 'react';
import '../css/qldh.css';
function OrderStatusFilter({ filterOrders }) {
  return (
    <div>
      <label>Chọn trạng thái:</label>
      <select onChange={(e) => filterOrders(e.target.value)}>
        <option value="all">Tất cả</option>
        <option value="pending">Chờ xác nhận</option>
        <option value="confirmed">Đã xác nhận</option>
        <option value="shipping">Đang giao</option>
        <option value="delivered">Đã giao</option>
        <option value="canceled">Huỷ</option>
      </select>
    </div>
  );
}

export default OrderStatusFilter;
