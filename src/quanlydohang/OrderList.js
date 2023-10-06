// import React, { useState } from 'react';
// import OrderItem from './OrderItem';
// import Pagination from './Pagination';
// import OrderStatusFilter from './OrderStatusFilter';
// import '../css/qldh.css';
// function OrderList() {
//   //const orders = useSelector(state => state.orders); // Lấy danh sách đơn hàng từ Redux store
//   const [currentPage, setCurrentPage] = useState(1);
//   const [ordersPerPage] = useState(5); // Số đơn hàng trên mỗi trang

//   // Lọc đơn hàng theo trạng thái
//   const [filteredOrders, setFilteredOrders] = useState(orders);
//   const filterOrders = (status) => {
//     const filtered = orders.filter(order => order.status === status);
//     setFilteredOrders(filtered);
//   };

//   // Tính toán phân trang
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

//   // Chuyển trang
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>Quản lý đơn hàng</h1>
//       <OrderStatusFilter filterOrders={filterOrders} />
//       {currentOrders.map(order => (
//         <OrderItem key={order.id} order={order} />
//       ))}
//       <Pagination
//         ordersPerPage={ordersPerPage}
//         totalOrders={filteredOrders.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// }

// export default OrderList;
