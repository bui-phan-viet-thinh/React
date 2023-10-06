import '../css/thaydoimk.css'
function ThayDoiMK(){
    return(
        <>

<div class="container">
<h1>Thay Đổi Mật Khẩu</h1>
<form>
    <div class="form-group">
        <label for="old-password">Mật khẩu cũ:</label>
        <input type="password" id="old-password" name="old-password" required/>
    </div>

    <div class="form-group">
        <label for="new-password">Mật khẩu mới:</label>
        <input type="password" id="new-password" name="new-password" required/>
    </div>

    <div class="form-group">
        <label for="confirm-new-password">Xác nhận mật khẩu mới:</label>
        <input type="password" id="confirm-new-password" name="confirm-new-password" required/>
    </div>

    <button type="submit">Đổi Mật Khẩu</button>
</form>
</div>
        
        </>
    );
}
export default ThayDoiMK;
