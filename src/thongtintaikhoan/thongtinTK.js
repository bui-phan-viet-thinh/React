import React from 'react';
import '../css/TTTK.css'
function TTTK() {
  return (
    <div className="container">
      <h1>Xem và Cập Nhật Thông Tin Tài Khoản</h1>
      <form>
        <label htmlFor="full-name">Họ tên:</label>
        <input type="text" id="full-name" name="full-name" defaultValue="John Doe" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue="johndoe@example.com" disabled />

        <label htmlFor="username">Tên đăng nhập:</label>
        <input type="text" id="username" name="username" defaultValue="johndoe123" disabled />

        <label htmlFor="phone">Điện thoại:</label>
        <input type="tel" id="phone" name="phone" defaultValue="123-456-7890" required />

        <label htmlFor="address">Địa chỉ:</label>
        <textarea id="address" name="address" required>
          123 Main St, City, Country
        </textarea>

        <input type="submit" value="Cập Nhật Thông Tin" />
      </form>
    </div>
  );
}

export default TTTK;