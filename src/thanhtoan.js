import React from 'react';
import '../src/css/thanhtoan.css'

function ThanhToan() {
    return (
        <>
            <h1>Trang Thanh Toán</h1>
            <div className="container">
                <div className="products">
                    <h2>Sản phẩm</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="product1.jpg" alt="Sản phẩm 1" /></td>
                                <td>Sản phẩm 1</td>
                                <td>$20.00</td>
                                <td>2</td>
                                <td>$40.00</td>
                            </tr>
                            <tr>
                                <td><img src="product2.jpg" alt="Sản phẩm 2" /></td>
                                <td>Sản phẩm 2</td>
                                <td>$30.00</td>
                                <td>3</td>
                                <td>$90.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="checkout-details">
                    <div className="recipient-info">
                        <h2>Thông tin người nhận hàng</h2>
                        <form>
                            <label htmlFor="full-name">Họ tên:</label>
                            <input type="text" id="full-name" name="full-name" required /><br />

                            <label htmlFor="phone">Điện thoại:</label>
                            <input type="tel" id="phone" name="phone" required /><br />

                            <label htmlFor="address">Địa chỉ:</label>
                            <textarea id="address" name="address" required></textarea>
                        </form>
                    </div>
                    <div className="payment-method">
                        <h2>Hình thức thanh toán</h2>
                        <form>
                            <input type="radio" id="cod" name="payment" value="cod" checked />
                            <label htmlFor="cod">COD (Thu tiền khi nhận hàng)</label><br />

                            <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
                            <label htmlFor="bank-transfer">Chuyển khoản ngân hàng</label><br />

                            <input type="radio" id="momo" name="payment" value="momo" />
                            <label htmlFor="momo">Thanh toán MOMO</label><br />

                            <button className="checkout-button">Thanh toán</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThanhToan;
