import '../src/css/giohang.css'
function GioHang(){
    return(
    <>
      <h1>Giỏ hàng</h1>
    <table>
        <thead>
            <tr>
                <th>Sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Áo thun</td>
                <td>$20.00</td>
                <td><input type="number" value="1"/></td>
                <td>$20.00</td>
                <td>
                    <button class="delete-button">Xóa</button>
                    <button class="update-button">Cập nhật</button>
                </td>
            </tr>
            <tr>
                <td>Quần jean</td>
                <td>$30.00</td>
                <td><input type="number" value="1"/></td>
                <td>$30.00</td>
                <td>
                    <button class="delete-button">Xóa</button>
                    <button class="update-button">Cập nhật</button>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="cart-actions">
        <button id="continue-shopping">Tiếp tục mua hàng</button>
        <button id="checkout">Thanh toán</button>
    </div>

    <script src="script.js"></script>
    </>);
}
export default GioHang;